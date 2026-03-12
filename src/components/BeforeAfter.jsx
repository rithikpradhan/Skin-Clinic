import { useState, useEffect } from "react";
import Reveal from "../hooks/Reveal";
import { client } from "../lib/sanityClient";
import { urlFor } from "../lib/imageBuilder";

import ananyaR from "../assets/Pigmantation-before.png";
import ananyaA from "../assets/Pigmantation-after.png";
import nishiB from "../assets/acne-before.png";
import nishiA from "../assets/Acne-after.png";
import kavyaB from "../assets/pitted-before.png";
import kavyaA from "../assets/pitted-after.png";

export default function BeforeAfter() {
  const [cmsSlides, setCmsSlides] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "beforeAfter"]{
        name,
        months,
        goal,
        severity,
        interval,
        session,
        result,
        beforeImage,
        afterImage
      }`,
      )
      .then((data) => setCmsSlides(data));
  }, []);

  const DEFAULT_SLIDES = [
    {
      name: "Nishi R.",
      months: 5,
      goal: "Remove acne scars",
      severity: "Moderate",
      session: "3-phase laser",
      interval: "30 min",
      result: "Smooth, even skin",
      beforeImage: nishiB,
      afterImage: nishiA,
    },
    {
      name: "Kavya M.",
      months: 6,
      goal: "Pitted scar correction",
      severity: "Severe",
      session: "3-phase laser",
      interval: "30 min",
      result: "Renewed confidence",
      beforeImage: kavyaB,
      afterImage: kavyaA,
    },
    {
      name: "Ananya S.",
      months: 4,
      goal: "Hyperpigmentation",
      severity: "Mild",
      session: "3-phase laser",
      interval: "30 min",
      result: "Bright, clear skin",
      beforeImage: ananyaR,
      afterImage: ananyaA,
    },
  ];

  const slides =
    cmsSlides && cmsSlides.length > 0
      ? cmsSlides.map((s) => ({
          name: s.name,
          months: s.months,
          goal: s.goal,
          severity: s.severity,
          result: s.result,
          session: s.session,
          interval: s.interval,
          beforeImage: urlFor(s.beforeImage).width(800).url(),
          afterImage: urlFor(s.afterImage).width(800).url(),
        }))
      : DEFAULT_SLIDES;

  useEffect(() => {
    const t = setInterval(() => {
      setActiveSlide((p) => (p + 1) % slides.length);
    }, 4000);

    return () => clearInterval(t);
  }, [slides.length]);

  const s = slides[activeSlide];

  return (
    <section
      id="effectiveness"
      className="bg-white py-20 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <Reveal>
          <div className="mb-14 text-center md:text-left">
            <p className="text-xs font-bold tracking-[3px] uppercase text-cyan-500 mb-3">
              Treatment Effectiveness
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
              Explore the treatment journey at
              <span className="text-cyan-500"> PScar</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-center">
          {/* Journey Card */}
          <Reveal>
            <div className="w-full bg-white shadow-xl border border-slate-200 rounded-3xl p-8">
              <div className="flex justify-between items-center mb-6">
                <p className="text-sm font-bold text-slate-800">
                  {s.months}-months treatment
                </p>

                <div className="flex gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === activeSlide
                          ? "w-6 bg-cyan-500"
                          : "w-2 bg-cyan-200"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-600">
                {[
                  ["User", s.name],
                  ["Goal", s.goal],
                  ["Severity", s.severity],
                  // ["Protocol", "3-phase laser"],
                  ["Session", s.session],
                  ["Interval", s.interval],
                  ["Result", s.result],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-2">
                    <span className="font-semibold w-24 text-slate-700">
                      {k}:
                    </span>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Before After */}
          <Reveal delay={0.15}>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center lg:col-span-2">
              {/* Before */}
              <div className="group bg-white shadow-2xl w-full max-w-[360px] h-[360px] rounded-2xl p-4 text-center transition duration-500 hover:-translate-y-2">
                <img
                  key={s.beforeImage}
                  src={s.beforeImage}
                  className="w-full h-[85%] object-cover rounded-xl mb-4 transition-opacity duration-700"
                />

                <p className="text-sm font-bold text-slate-600">
                  Before Treatment
                </p>
              </div>

              {/* After */}
              <div className="group bg-white shadow-2xl w-full max-w-[400px] h-[400px] rounded-2xl p-4 text-center transition duration-500 hover:-translate-y-2 md:-translate-y-10">
                <img
                  key={s.afterImage}
                  src={s.afterImage}
                  className="w-full h-[85%] object-cover rounded-xl mb-4 transition-opacity duration-700"
                />

                <p className="text-sm font-bold text-slate-600">
                  After Treatment
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
