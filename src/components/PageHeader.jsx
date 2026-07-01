export default function PageHeader({ title, subtitle, image }) {
  return (
    <section className="relative bg-[#013220] overflow-hidden">
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[#013220]/70" />
        </>
      )}
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] font-serif">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white/85 text-lg max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
