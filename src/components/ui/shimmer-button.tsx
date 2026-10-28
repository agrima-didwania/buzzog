import React, { type ComponentPropsWithoutRef, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
  shimmerOnHover?: boolean;
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "#6FCF4A",
      shimmerSize = "0.08em",
      shimmerDuration = "2.5s",
      borderRadius = "100px",
      background = "rgba(20, 20, 20, 1)",
      className,
      children,
      shimmerOnHover = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] border border-white/10 px-4 py-2 whitespace-nowrap text-white [background:var(--bg)]",
          "transform-gpu transition-all duration-300 ease-in-out active:translate-y-px",
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Spark container - strictly around outer perimeter */}
        <div
          className={cn(
            "pointer-events-none -z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]",
            shimmerOnHover && "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          )}
        >
          {/* Spark track */}
          <div className="animate-shimmer-slide absolute inset-0 aspect-[1] h-full rounded-none [mask:none]">
            <div className="animate-spin-around absolute -inset-full w-auto [translate:0_0] rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
          </div>
        </div>

        {/* Content - 100% crisp and readable */}
        <span className="relative z-10 flex items-center justify-center select-none">
          {children}
        </span>

        {/* Subtle highlight sheen */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 size-full",
            "rounded-[inherit] shadow-[inset_0_-2px_4px_rgba(255,255,255,0.08)]",
            "transform-gpu transition-all duration-300 ease-in-out",
            "group-hover:shadow-[inset_0_-3px_8px_rgba(111,207,74,0.3)]",
            "group-active:shadow-[inset_0_-5px_10px_rgba(111,207,74,0.4)]"
          )}
        />

        {/* Backdrop - protects text from inner glow bleed */}
        <div
          className={cn(
            "absolute inset-[var(--cut)] -z-20 [border-radius:calc(var(--radius)-var(--cut))] [background:var(--bg)]"
          )}
        />
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
