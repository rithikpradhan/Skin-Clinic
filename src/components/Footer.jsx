import { useEffect, useState } from "react";
import { client } from "../lib/sanityClient";

export default function Footer() {
  const [cmsFooter, setCmsFooter] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type=="footerSection"][0]`)
      .then((data) => setCmsFooter(data));
  }, []);

  const brandName = cmsFooter?.brandName || "PScar";

  const brandDescription =
    cmsFooter?.brandDescription ||
    "Advanced scar treatment clinic with over 10 years of clinical excellence and 50,000+ satisfied patients.";

  const services = cmsFooter?.services || [
    "Microneedling",
    "TCA Cross",
    "Laser Therapy",
    "Chemical Peels",
  ];

  const companyLinks = cmsFooter?.companyLinks || [
    "About Us",
    "Our Team",
    "Blog",
    "Contact",
  ];

  const contactInfo = cmsFooter?.contactInfo || [
    "0912-345-601",
    "hello@pscar.in",
    "Mon–Sat 9am–7pm",
  ];

  const copyright =
    cmsFooter?.copyright || "© 2026 PScar Skin Clinic. All rights reserved.";

  const bottomLinks = cmsFooter?.bottomLinks || [
    "Privacy Policy",
    "Terms of Service",
  ];

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
                {brandName}
              </span>
            </div>

            <p className="text-[13px] leading-relaxed">{brandDescription}</p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold tracking-[2px] uppercase text-cyan-500 mb-4">
              Services
            </p>

            {services.map((item, i) => (
              <p
                key={i}
                className="text-[13px] mb-2.5 cursor-pointer hover:text-white transition-colors duration-200"
              >
                {item}
              </p>
            ))}
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-bold tracking-[2px] uppercase text-cyan-500 mb-4">
              Company
            </p>

            {companyLinks.map((item, i) => (
              <p
                key={i}
                className="text-[13px] mb-2.5 cursor-pointer hover:text-white transition-colors duration-200"
              >
                {item}
              </p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold tracking-[2px] uppercase text-cyan-500 mb-4">
              Contact
            </p>

            {contactInfo.map((item, i) => (
              <p
                key={i}
                className="text-[13px] mb-2.5 cursor-pointer hover:text-white transition-colors duration-200"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/7 pt-5 flex flex-wrap justify-between items-center gap-3 text-xs">
          <span>{copyright}</span>

          <div className="flex gap-6">
            {bottomLinks.map((l, i) => (
              <span
                key={i}
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
