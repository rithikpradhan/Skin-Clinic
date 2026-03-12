import { useEffect, useState } from "react";
import { client } from "../lib/sanityClient";
import { urlFor } from "../lib/imageBuilder";
import Reveal from "../hooks/Reveal";

export default function Treatments() {
  const [cmsTreatments, setCmsTreatments] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "treatment"]{
        title,
        desc,
        image,
        color
      }`,
      )
      .then((data) => setCmsTreatments(data));
  }, []);

  const DEFAULT_TREATMENTS = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiYmaikOljV_2tQQ-aJI7-pZXO12ceCSKOMg&s",
      title: "Remove Pitted, Indented Scars",
      desc: "Advanced micro-fractional treatment to fill and smooth deep indentations.",
      color: "bg-cyan-50",
    },
    {
      image:
        "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/benefits_of_light_therapy_slideshow/1800ss_getty_rf_facial_acne.jpg",
      title: "Remove Acne Scars",
      desc: "Laser and filler-based protocols to erase post-acne marks permanently.",
      color: "bg-green-50",
    },
    {
      image:
        "https://www.drdixitcosmeticdermatology.com/assets/blog/6c05e97af3ce8c478ff01a08a310a192.webp",
      title: "Remove Freckles",
      desc: "Targeted light therapy to fade and eliminate stubborn pigmentation.",
      color: "bg-yellow-50",
    },
    {
      image:
        "https://media.post.rvohealth.io/wp-content/uploads/2021/05/Black-teenager-applying-under-eye-patches-732x540-thumbnail.jpg",
      title: "Restore Thin, Weak Skin",
      desc: "Collagen-stimulating therapies to rebuild skin density and elasticity.",
      color: "bg-red-50",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx7FtReSojULYTNGBrNL-gvmLIh20J9JBF8w&s",
      title: "Remove Dry Skin",
      desc: "Deep hydration infusions and barrier-repair treatments for lasting moisture.",
      color: "bg-purple-50",
    },
  ];

  const treatments =
    cmsTreatments && cmsTreatments.length > 0
      ? cmsTreatments.map((t) => ({
          title: t.title,
          desc: t.desc,
          image: urlFor(t.image).width(200).url(),
          color: t.color || "bg-cyan-50",
        }))
      : DEFAULT_TREATMENTS;

  return (
    <section
      id="treatments"
      className="bg-white py-16 md:py-24 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Left */}
        <Reveal>
          <p className="text-xs font-bold tracking-[2.5px] uppercase text-cyan-500 mb-3">
            Standard Medical Treatment
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight mb-4">
            Treating pitted scars,
            <span className="text-cyan-500"> concave scars</span>
          </h2>

          <p className="text-sm md:text-[15px] text-slate-500 leading-relaxed mb-8">
            With over 10 years of experience providing scar treatment, PScar is
            committed to bringing the most advanced and effective solutions to
            customers.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-200"
          >
            Learn More
          </a>

          <div className="mt-10 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl h-48 sm:h-56 md:h-60 overflow-hidden relative flex items-end justify-center">
            <img
              src="https://images.unsplash.com/photo-1728727217834-b190862837a3?q=80&w=870&auto=format&fit=crop"
              className="w-full h-full object-cover"
            />

            <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 text-xs font-bold text-cyan-500">
              ✦ Proven Results
            </span>
          </div>
        </Reveal>

        {/* Right */}
        <Reveal delay={0.15}>
          <div>
            {treatments.map((t) => (
              <div
                key={t.title}
                className="flex items-center gap-3 sm:gap-4 bg-white rounded-full px-3 sm:px-4 py-3 shadow-md hover:shadow-cyan-200/60 hover:shadow-lg hover:translate-x-1 transition-all duration-200 cursor-pointer mb-3"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${t.color} flex items-center justify-center shrink-0`}
                >
                  <img
                    src={t.image}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-800 truncate">
                    {t.title}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5 leading-snug line-clamp-1">
                    {t.desc}
                  </p>
                </div>

                <span className="text-cyan-500 text-lg sm:text-xl shrink-0">
                  ›
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
