import { useState, useEffect } from "react";
import Reveal from "../hooks/Reveal";
import { client } from "../lib/sanityClient";
import { urlFor } from "../lib/imageBuilder";

export default function AboutTeam() {
  const [cmsAbout, setCmsAbout] = useState(null);
  const [cmsImages, setCmsImages] = useState([]);
  const [cmsStats, setCmsStats] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type=="aboutSection"][0]`)
      .then((data) => setCmsAbout(data));

    client.fetch(`*[_type=="aboutImages"]`).then((data) => setCmsImages(data));

    client.fetch(`*[_type=="aboutStats"]`).then((data) => setCmsStats(data));
  }, []);

  const DEFAULT_STATS = [
    { val: "100+", label: "Specialist Doctors" },
    { val: "50k", label: "Patients Treated" },
    { val: "1,000", label: "Surgeries / Month" },
  ];

  const DEFAULT_IMAGES = [
    {
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=868&auto=format&fit=crop",
      caption: "Our Clinic",
    },
    {
      image:
        "https://images.unsplash.com/photo-1629909614456-6b1c5c94cecc?q=80&w=894&auto=format&fit=crop",
      caption: "Waiting Room",
    },
  ];

  const stats = cmsStats && cmsStats.length > 0 ? cmsStats : DEFAULT_STATS;

  const images =
    cmsImages && cmsImages.length > 0
      ? cmsImages.map((i) => ({
          caption: i.caption,
          image: urlFor(i.image).width(600).url(),
        }))
      : DEFAULT_IMAGES;

  const title = cmsAbout?.title || "Dedicated & professional team of experts";

  const description =
    cmsAbout?.description ||
    "All PScar Medicos share one overriding goal — to keep feeling good. We aim to put patients at ease and make their treatment a success.";

  const buttonText = cmsAbout?.buttonText || "Get in touch";

  return (
    <section
      id="about"
      className="bg-cyan-50/60 py-16 md:py-24 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left */}
        <Reveal>
          <p className="text-xs font-bold tracking-[2.5px] uppercase text-cyan-500 mb-3">
            About Us
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-snug mb-4">
            {title.split("experts")[0]}
            <span className="text-cyan-500">experts</span>
          </h2>

          <p className="text-sm md:text-[15px] text-slate-500 leading-relaxed mb-8">
            {description}
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-bold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-cyan-200"
          >
            {buttonText}
          </a>
        </Reveal>

        {/* Right */}
        <Reveal delay={0.15}>
          <div>
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {images.map((item) => (
                <div
                  key={item.caption}
                  className="rounded-2xl overflow-hidden flex flex-col items-center"
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-32 sm:h-40 md:h-44 object-cover rounded-xl shadow-sm hover:scale-105 transition-all duration-300"
                  />

                  <p className="text-[13px] font-semibold text-slate-500 mt-2">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="bg-white rounded-2xl px-5 sm:px-7 py-5 shadow-sm flex flex-col sm:flex-row gap-5 sm:gap-6">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex-1 ${
                    i > 0 ? "sm:border-l-2 border-cyan-100 sm:pl-5" : ""
                  }`}
                >
                  <p className="text-xl md:text-2xl font-extrabold text-cyan-500">
                    {s.val}
                  </p>

                  <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
