export default function Logo({ className = "h-12", showText = true }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto shrink-0"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="22" stroke="#D4AF37" strokeWidth="1.2" opacity="0.4" />
        <path
          d="M24 40V28M24 28C24 28 18 24 16 18C14 12 18 8 24 10C30 8 34 12 32 18C30 24 24 28 24 28Z"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M24 28C24 28 20 22 20 16C20 12 22 10 24 12C26 10 28 12 28 16C28 22 24 28 24 28Z"
          stroke="#D4AF37"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path d="M20 32C18 30 14 30 12 32" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <path d="M28 32C30 30 34 30 36 32" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <path d="M24 36C22 34 20 34 18 36" stroke="#D4AF37" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        <path d="M24 36C26 34 28 34 30 36" stroke="#D4AF37" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        <circle cx="24" cy="14" r="1.5" fill="#D4AF37" opacity="0.8" />
        <circle cx="18" cy="20" r="1" fill="#D4AF37" opacity="0.6" />
        <circle cx="30" cy="20" r="1" fill="#D4AF37" opacity="0.6" />
        <circle cx="20" cy="24" r="0.8" fill="#D4AF37" opacity="0.5" />
        <circle cx="28" cy="24" r="0.8" fill="#D4AF37" opacity="0.5" />
      </svg>
      {showText && (
        <span className="font-serif text-2xl font-semibold tracking-widest text-[#D4AF37]">
          TGM
        </span>
      )}
    </div>
  );
}
