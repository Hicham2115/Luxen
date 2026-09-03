"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  options: string[];
  placeholder?: string;
  id?: string;
  name?: string;
  className?: string;
  "aria-invalid"?: boolean;
};

export function Select({
  value,
  onChange,
  onBlur,
  options,
  placeholder = "Seleccionar…",
  id,
  name,
  className,
  ...rest
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(e: PointerEvent) {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
        onBlur?.();
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open, onBlur]);

  function openMenu() {
    setActiveIndex(Math.max(0, options.indexOf(value)));
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
    onBlur?.();
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openMenu();
      }
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      closeMenu();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(options.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (activeIndex >= 0) {
        onChange(options[activeIndex]);
        closeMenu();
      }
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        id={id}
        name={name}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        onClick={() => (open ? closeMenu() : openMenu())}
        onKeyDown={handleKeyDown}
        className={cn(
          "flex h-13 w-full items-center justify-between rounded-xl border border-[#e1e9f2] bg-[#f8fbfe] px-4 text-left text-[15px] text-[#06265a] shadow-none transition-colors focus-visible:border-marino-500 focus-visible:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-marino-500/15",
          open && "border-marino-500 bg-white ring-4 ring-marino-500/15",
          !value && "text-[#8ba0bf]",
          className,
        )}
        {...rest}
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "h-4 w-4 shrink-0 text-marino-500 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            id={listboxId}
            role="listbox"
            tabIndex={-1}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-20 mt-2 max-h-64 w-full overflow-auto rounded-xl border border-[#e1e9f2] bg-white p-1.5 shadow-[0_18px_40px_rgba(9,42,83,0.16)]"
          >
            {options.map((option, index) => {
              const selected = option === value;
              return (
                <li
                  key={option}
                  role="option"
                  aria-selected={selected}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => {
                    onChange(option);
                    closeMenu();
                  }}
                  className={cn(
                    "flex cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-[14px] font-medium text-[#06265a] transition-colors",
                    index === activeIndex && "bg-marino-500/8",
                    selected && "text-marino-500",
                  )}
                >
                  {option}
                  {selected && (
                    <Check aria-hidden="true" className="h-4 w-4 text-gold-500" />
                  )}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
