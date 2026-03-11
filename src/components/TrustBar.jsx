export default function TrustBar() {
  const TRUST_ITEMS = [
    ["01", "Taking 100% Responsibility for Scar Filling Effectiveness"],
    ["02", "Standard Medical Treatment Process"],
    ["03", "Professional and Dedicated Staff"],
    ["04", "Advanced Technology and Genuine Cosmetics"],
  ];

  return (
    <section className="bg-white border-b border-cyan-50 py-6 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TRUST_ITEMS.map(([num, label]) => (
          <div key={num} className="flex items-start gap-3">
            <span className="text-sm font-extrabold text-cyan-400/50 shrink-0">
              {num}
            </span>

            <span className="text-[13px] sm:text-[14px] font-semibold text-slate-500 uppercase leading-snug">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
