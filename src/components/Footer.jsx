export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white/55 px-12 pt-12 pb-7">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white font-extrabold text-sm">
                P
              </div>
              <span className="text-xl font-extrabold text-cyan-500">
                PScar
              </span>
            </div>
            <p className="text-[13px] leading-relaxed">
              Advanced scar treatment clinic with over 10 years of clinical
              excellence and 50,000+ satisfied patients.
            </p>
          </div>

          {/* Columns */}
          {[
            [
              "Services",
              ["Microneedling", "TCA Cross", "Laser Therapy", "Chemical Peels"],
            ],
            ["Company", ["About Us", "Our Team", "Blog", "Contact"]],
            ["Contact", ["0912-345-601", "hello@pscar.in", "Mon–Sat 9am–7pm"]],
          ].map(([title, items]) => (
            <div key={title}>
              <p className="text-xs font-bold tracking-[2px] uppercase text-cyan-500 mb-4">
                {title}
              </p>
              {items.map((item) => (
                <p
                  key={item}
                  className="text-[13px] mb-2.5 cursor-pointer hover:text-white transition-colors duration-200"
                >
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/7 pt-5 flex flex-wrap justify-between items-center gap-3 text-xs">
          <span>© 2026 PScar Skin Clinic. All rights reserved.</span>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <span
                key={l}
                className="cursor-pointer hover:text-cyan-400 transition-colors duration-200"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
