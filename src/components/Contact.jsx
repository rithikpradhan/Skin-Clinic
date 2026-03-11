import Reveal from "../hooks/Reveal";
import { PopupModal } from "react-calendly";
import { useRef } from "react";
import { useState } from "react";

const FORM_FIELDS = [
  { key: "name", placeholder: "Your Full Name", type: "text" },
  { key: "phone", placeholder: "Phone Number", type: "tel" },
  { key: "email", placeholder: "Email Address", type: "email" },
  { key: "date", placeholder: "Preferred Date", type: "date" },
];

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  date: "",
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  // const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // const submit = () => {
  //   if (!form.name || !form.phone) return;

  //   setSubmitted(true);
  //   setForm(INITIAL_FORM);

  //   setTimeout(() => setSubmitted(false), 3500);
  // };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 md:px-12 overflow-hidden"
      style={{
        background:
          "linear-gradient(120deg,#1a3a4a 0%,#1a8fab 55%,#2dd4bf 100%)",
      }}
    >
      {/* Decorative blob */}
      <div className="absolute -top-32 right-20 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <Reveal>
          <p className="text-xs font-bold tracking-[3px] uppercase text-white/60 mb-3">
            Contact
          </p>

          <h2 className="text-4xl font-extrabold text-white leading-tight mb-4">
            Make an appointment
          </h2>

          <p className="text-sm text-white/70 leading-relaxed mb-9">
            Book a consultation with our specialists. We'll analyze your skin
            and craft a personalized treatment plan designed just for you.
          </p>

          {/* Doctor card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 flex flex-col sm:flex-row items-center sm:items-center gap-4">
            <div className="w-48 h-48 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0">
              <img
                src="https://plus.unsplash.com/premium_photo-1681967035389-84aabd80cb1e?q=100&w=1200&auto=format&fit=crop"
                alt="Dr. Nisha Kapoor"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center sm:text-left">
              <p className="text-[15px] font-bold text-white">
                Dr. Nisha Kapoor
              </p>

              <p className="text-xs text-white/60 mt-0.5">
                Chief Dermatologist · 15 yrs exp.
              </p>

              <p className="text-lg font-extrabold text-white mt-1.5">
                0912-345-601
              </p>
            </div>
          </div>
        </Reveal>

        {/* Right Form */}
        <Reveal delay={0.15}>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4">
              Book Your Skin Consultation
            </h3>

            <p className="text-sm text-white/70 mb-6">
              Choose a convenient time with our dermatologist and get a
              personalized skin treatment plan.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <span>✔</span>
                <p>Personalized skin analysis</p>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <span>✔</span>
                <p>Expert dermatologist consultation</p>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <span>✔</span>
                <p>Treatment plan tailored for your skin</p>
              </div>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="w-full bg-white hover:bg-cyan-50 text-cyan-600 font-bold text-sm py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg"
            >
              📅 Book Appointment Now
            </button>

            <p className="text-xs text-white/60 mt-4 text-center">
              Takes less than 30 seconds
            </p>

            <PopupModal
              url="https://calendly.com/pradhanrithik62/30min"
              onModalClose={() => setOpen(false)}
              open={open}
              rootElement={document.getElementById("root")}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
