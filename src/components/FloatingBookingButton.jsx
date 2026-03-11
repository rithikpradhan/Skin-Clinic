import { useState } from "react";
import { PopupModal } from "react-calendly";

export default function FloatingBookingButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
      >
        📅 Book Appointment
      </button>

      <PopupModal
        url="https://calendly.com/pradhanrithik62/30min"
        open={open}
        onModalClose={() => setOpen(false)}
        rootElement={document.getElementById("root")}
      />
    </>
  );
}
