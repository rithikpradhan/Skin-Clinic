import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const NAV_LINKS = [
    { label: "About Us", path: "/about" },
    { label: "Pitted Scars Treatment", path: "/treatment" },
    { label: "Treatment Effectiveness", path: "/results" },
    { label: "Blog", path: "/blog" },
  ];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm shadow-cyan-100"
          : "bg-white border-b border-cyan-50"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white font-extrabold text-sm">
          P
        </div>
        <span className="text-xl font-extrabold text-cyan-500">PScar</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-9">
        {NAV_LINKS.map((l) =>
          l.path.startsWith("/") ? (
            <Link
              key={l.label}
              to={l.path}
              className="text-sm font-medium text-slate-700 hover:text-cyan-500 transition-colors duration-200"
            >
              {l.label}
            </Link>
          ) : (
            <a
              key={l.label}
              href={l.path}
              className="text-sm font-medium text-slate-700 hover:text-cyan-500 transition-colors duration-200"
            >
              {l.label}
            </a>
          ),
        )}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {/* CTA (desktop only) */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-200"
        >
          Get in touch
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-slate-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden flex flex-col items-center py-6 gap-5">
          {NAV_LINKS.map((l) =>
            l.path.startsWith("/") ? (
              <Link
                key={l.label}
                to={l.path}
                className="text-sm font-medium text-slate-700 hover:text-cyan-500"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.path}
                className="text-sm font-medium text-slate-700 hover:text-cyan-500"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ),
          )}

          <a
            href="#contact"
            className="bg-cyan-500 text-white text-sm font-bold px-6 py-2.5 rounded-full"
            onClick={() => setOpen(false)}
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
}
