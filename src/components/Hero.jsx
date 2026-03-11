import HeroImage from "../assets/hero_img.jpg";

export default function Hero() {
  return (
    <section className="relative mt-16 min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <img
        src={HeroImage}
        alt="Skin treatment"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-800/50 to-slate-700/10" />

      {/* Decorative rings (hide on small screens) */}
      <div className="hidden lg:block absolute right-[38%] top-[15%] w-52 h-52 rounded-full border border-white/8 pointer-events-none" />
      <div className="hidden lg:block absolute right-[34%] top-[5%] w-80 h-80 rounded-full border border-white/5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-12 max-w-xl py-16 flex flex-col justify-end">
        {/* Headline */}
        <h1
          className="text-3xl sm:text-4xl xl:text-[50px] font-extrabold text-white mb-2"
          style={{ animation: "hfade .7s ease .3s both" }}
        >
          Standard Medical
        </h1>

        <h1 className="text-3xl sm:text-4xl xl:text-[50px] font-extrabold text-white mb-5">
          Treatment Process
        </h1>

        {/* Sub text */}
        <p
          className="text-sm sm:text-[15px] text-white/70 leading-relaxed mb-8 max-w-md"
          style={{ animation: "hfade .7s ease .5s both" }}
        >
          Nonclinical skin care and treatment uses modern machinery and genuine
          pharmaceutical cosmetics to deliver clinically proven, lasting
          results.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          style={{ animation: "hfade .7s ease .7s both" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-cyan-600 hover:text-white text-blue-500 text-sm font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            📞 Get In Touch
          </a>

          <a
            href="#treatments"
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/35 hover:border-white text-white text-sm font-bold px-6 py-3 rounded-full transition-all duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
