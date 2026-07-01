/**
 * Sends form data to Google Sheets via Apps Script web app.
 * Uses hidden form POST — most reliable for Google Apps Script.
 */

const SUBMIT_COOLDOWN_MS = 60_000;
const COOLDOWN_KEY = "tgm_last_form_submit";

function assertSubmitCooldown() {
  const last = sessionStorage.getItem(COOLDOWN_KEY);
  if (last && Date.now() - Number(last) < SUBMIT_COOLDOWN_MS) {
    const seconds = Math.ceil((SUBMIT_COOLDOWN_MS - (Date.now() - Number(last))) / 1000);
    throw new Error(
      `Please wait ${seconds} seconds before submitting again. Google limits how often forms can be saved.`
    );
  }
}

function markSubmitted() {
  sessionStorage.setItem(COOLDOWN_KEY, String(Date.now()));
}

export async function submitToGoogleSheet(payload) {
  const url = import.meta.env.VITE_GOOGLE_SCRIPT_URL?.trim();

  if (!url) {
    throw new Error(
      "Form is not configured on this deployment. Add VITE_GOOGLE_SCRIPT_URL before building for GitHub Pages."
    );
  }

  if (!url.includes("script.google.com/macros/s/") || !url.endsWith("/exec")) {
    throw new Error("Invalid Google Script URL. It must end with /exec");
  }

  assertSubmitCooldown();

  const data = {
    type: payload.type || "",
    name: payload.name || "",
    email: payload.email || "",
    phone: payload.phone || "",
    city: payload.city || "",
    category: payload.category || "",
    message: payload.message || "",
    amount: payload.amount || "",
  };

  await submitViaHiddenForm(url, data);
  markSubmitted();

  return { success: true, message: "Data saved successfully" };
}

function submitViaHiddenForm(url, data) {
  return new Promise((resolve, reject) => {
    const iframeName = `gas_frame_${Date.now()}`;
    const iframe = document.createElement("iframe");
    iframe.name = iframeName;
    iframe.style.cssText =
      "position:absolute;width:0;height:0;border:0;visibility:hidden";

    const form = document.createElement("form");
    form.method = "POST";
    form.action = url;
    form.target = iframeName;
    form.style.display = "none";
    form.setAttribute("accept-charset", "UTF-8");

    for (const [key, value] of Object.entries(data)) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = String(value ?? "");
      form.appendChild(input);
    }

    const timeout = setTimeout(() => {
      form.remove();
      resolve();
    }, 5000);

    iframe.onerror = () => {
      clearTimeout(timeout);
      form.remove();
      reject(
        new Error(
          "Could not reach Google Sheets. If you see 'rate limit exceeded', wait 1 hour and try again."
        )
      );
    };

    document.body.appendChild(iframe);
    document.body.appendChild(form);
    form.submit();
  });
}
