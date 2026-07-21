"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Droplet, Wrench } from "lucide-react";

const MIN_DISPLAY_MS = 700;
const MAX_DISPLAY_MS = 3000;

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const start = Date.now();
    let isFinished = false;

    function finish() {
      if (isFinished) return;
      isFinished = true;
      const remaining = Math.max(MIN_DISPLAY_MS - (Date.now() - start), 0);
      setTimeout(() => setIsLoading(false), remaining);
    }

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }
    const fallback = setTimeout(finish, MAX_DISPLAY_MS);

    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center gap-5 bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.span
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: [0.94, 1, 0.94], opacity: 1 }}
            transition={{
              scale: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.4, ease: "easeOut" },
            }}
            className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-[0_10px_24px_rgba(14,165,233,0.35)]"
          >
            <Droplet aria-hidden="true" className="h-9 w-9" />
            <Wrench
              aria-hidden="true"
              strokeWidth={2.4}
              className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-white p-1 text-sky-500"
            />
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
            className="text-[20px] font-extrabold tracking-tight text-[#06265a]"
          >
            LUXEN
          </motion.span>

          <div className="h-1 w-32 overflow-hidden rounded-full bg-sky-100">
            <motion.div
              className="h-full w-1/3 rounded-full bg-sky-500"
              animate={{ x: ["-100%", "220%"] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
