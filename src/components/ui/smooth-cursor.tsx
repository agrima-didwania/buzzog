"use client";

import { useEffect, useRef, useState, type FC } from "react";
import { motion, useSpring } from "motion/react";

interface Position {
  x: number;
  y: number;
}

export interface SmoothCursorProps {
  cursor?: React.ReactNode;
  springConfig?: {
    damping: number;
    stiffness: number;
    mass: number;
    restDelta: number;
  };
}

const DESKTOP_POINTER_QUERY = "(any-hover: hover) and (any-pointer: fine)";

function isTrackablePointer(pointerType: string) {
  return pointerType !== "touch";
}

// Clean, smooth follower dot & ring (NO finger / NO arrow pointer)
const DefaultSmoothDot: FC = () => {
  return (
    <div className="relative flex items-center justify-center pointer-events-none">
      {/* Outer fluid trailing ring with Buzz OG green glow */}
      <div className="w-6 h-6 rounded-full border-[1.5px] border-[#6FCF4A] bg-[#6FCF4A]/15 shadow-[0_0_12px_rgba(111,207,74,0.6)]" />
      {/* Center pinpoint core */}
      <div className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
    </div>
  );
};

export function SmoothCursor({
  cursor = <DefaultSmoothDot />,
  springConfig = {
    damping: 32,
    stiffness: 350,
    mass: 0.6,
    restDelta: 0.001,
  },
}: SmoothCursorProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const scale = useSpring(1, {
    stiffness: 400,
    damping: 25,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_POINTER_QUERY);

    const updateEnabled = () => {
      const nextIsEnabled = mediaQuery.matches;
      setIsEnabled(nextIsEnabled);

      if (!nextIsEnabled) {
        setIsVisible(false);
      }
    };

    updateEnabled();
    mediaQuery.addEventListener("change", updateEnabled);

    return () => {
      mediaQuery.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!isTrackablePointer(e.pointerType)) {
        return;
      }

      setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onPointerDown = () => scale.set(0.8);
    const onPointerUp = () => scale.set(1);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [cursorX, cursorY, scale, isEnabled]);

  if (!isEnabled) {
    return null;
  }

  return (
    <motion.div
      style={{
        position: "fixed",
        left: cursorX,
        top: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        scale: scale,
        zIndex: 99999,
        pointerEvents: "none",
        willChange: "transform",
        opacity: isVisible ? 1 : 0,
      }}
      initial={false}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{
        duration: 0.15,
      }}
    >
      {cursor}
    </motion.div>
  );
}
