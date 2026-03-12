import { useEffect, useState } from "react";
import Reveal from "../hooks/Reveal";
import { client } from "../lib/sanityClient";
import { urlFor } from "../lib/imageBuilder";

export default function Services() {
  const [cmsServices, setCmsServices] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "service"]{
        label,
        desc,
        image,
        
      }`,
      )
      .then((data) => setCmsServices(data));
  }, []);

  const DEFAULT_SERVICES = [
    {
      label: "Microneedling for Scars",
      image:
        "https://diaminyaesthetics.com/cdn/shop/articles/Microneedling_for_Acne_Scars4.jpg?v=1752568960",
      bg: "bg-cyan-100",
      desc: "Professionally administered to directly impact the scarred area, clearing tissue effectively.",
    },
    {
      label: "TCA Cross",
      image:
        "https://northsidedermatology.com.au/wp-content/uploads/2020/07/Screen-Shot-2022-10-16-at-9.02.18-pm.png",
      bg: "bg-emerald-100",
      desc: "Chemical reconstruction of skin scars using targeted application to boost collagen growth.",
    },
    {
      label: "Cut the Bottom Scar",
      image:
        "https://hbioclinic.com.vn/wp-content/uploads/2025/07/uu-va-nhuoc-diem-cua-cat-day-cac-vet-seo-ro.jpg.webp",
      bg: "bg-orange-100",
      desc: "Subcision technique to release tethered acne scars, allowing natural skin elevation.",
    },
  ];

  const services =
    cmsServices && cmsServices.length > 0
      ? cmsServices.map((s) => ({
          label: s.label,
          desc: s.desc,
          image: urlFor(s.image).width(800).url(),
        }))
      : DEFAULT_SERVICES;

  return (
    <section className="bg-cyan-50/60 py-16 md:py-20 px-4 sm:px-6 md:px-12">
      {/* Heading */}
      <Reveal>
        <div className="text-center mb-12 md:mb-14">
          <p className="text-xs font-bold tracking-[2.5px] uppercase text-cyan-500 mb-3">
            Services at PScar
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight">
            Proud to provide{" "}
            <span className="text-cyan-500">effective solutions</span>
          </h2>
        </div>
      </Reveal>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-cyan-100 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
              <div className={`h-40 sm:h-44 flex items-center justify-center`}>
                <img src={s.image} className="w-full h-full object-cover" />
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-[15px] font-bold text-slate-800 mb-2">
                  {s.label}
                </h3>

                <p className="text-[13px] text-slate-400 leading-relaxed">
                  {s.desc}
                </p>

                <p className="mt-3 text-sm font-bold text-cyan-500 flex items-center gap-1">
                  Read more <span>→</span>
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Technology Banner */}
      <Reveal delay={0.2}>
        <div className="max-w-5xl mx-auto mt-10 bg-white rounded-2xl px-5 sm:px-8 md:px-11 py-6 md:py-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-[2.5px] uppercase text-cyan-500 mb-2">
              Technology
            </p>

            <h3 className="text-lg md:text-xl font-extrabold text-slate-800 leading-snug">
              Exploring the potential of{" "}
              <span className="text-cyan-500">PScar</span> scar removal
              technology
              <br className="hidden md:block" />— The journey to regain smooth
              skin
            </h3>
          </div>

          <a
            href="#contact"
            className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-bold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-cyan-200 whitespace-nowrap"
          >
            Our Treatment Plans →
          </a>
        </div>
      </Reveal>
    </section>
  );
}
