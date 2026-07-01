/**
 * Sends form data to Google Sheets via Apps Script web app.
 * Uses hidden form POST — most reliable way to populate e.parameter in Apps Script.
 */
export async function submitToGoogleSheet(payload) {
  const url = import.meta.env.VITE_GOOGLE_SCRIPT_URL?.trim();

  if (!url) {
    throw new Error(
      "Google Sheets URL is missing. Add VITE_GOOGLE_SCRIPT_URL to your .env file."
    );
  }

  if (!url.includes("script.google.com/macros/s/") || !url.endsWith("/exec")) {
    throw new Error("Invalid Google Script URL. It must end with /exec");
  }

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

  return submitViaHiddenForm(url, data);
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
      resolve({ success: true, message: "Data saved successfully" });
    }, 5000);

    iframe.onerror = () => {
      clearTimeout(timeout);
      form.remove();
      reject(new Error("Could not reach Google Sheets. Check your script URL."));
    };

    document.body.appendChild(iframe);
    document.body.appendChild(form);
    form.submit();
  });
}
