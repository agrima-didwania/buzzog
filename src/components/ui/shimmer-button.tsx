import React, { type CSSProperties } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps
  extends React.HTMLAttributes<HTMLElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  hoverBackground?: string;
  className?: string;
  children?: React.ReactNode;
  shimmerOnHover?: boolean;
  shimmerAlways?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "#6FCF4A",
      shimmerSize = "2px",
      shimmerDuration = "2.5s",
      borderRadius = "9999px",
      background = "#141414",
      hoverBackground,
      className,
      children,
      shimmerOnHover = true,
      shimmerAlways = false,
      href,
      target,
      rel,
      type = "button",
      disabled = false,
      style,
      onClick,
      ...props
    },
    ref
  ) => {
    const effectiveHoverBg = hoverBackground || background;

    const buttonStyle: CSSProperties = {
      "--spread": "90deg",
      "--shimmer-color": shimmerColor,
      "--radius": borderRadius,
      "--speed": shimmerDuration,
      "--cut": shimmerSize,
      "--bg": background,
      "--hover-bg": effectiveHoverBg,
      borderRadius,
      ...style,
    } as CSSProperties;

    const baseClassName = cn(
      "group relative z-0 inline-flex items-center justify-center overflow-hidden border px-5 py-2 whitespace-nowrap text-sm font-semibold select-none",
      "transform-gpu transition-all duration-200 ease-in-out active:translate-y-px",
      "[background:var(--bg)] hover:[background:var(--hover-bg)]",
      className
    );

    const innerContent = (
      <>
        {/* Spark container - travels around the outer perimeter of this box */}
        <div
          className={cn(
            "pointer-events-none -z-30 blur-[2px] absolute inset-0 overflow-visible",
            shimmerAlways
              ? "opacity-100"
              : shimmerOnHover
              ? "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              : "opacity-100"
          )}
          style={{
            containerType: "size",
          }}
        >
          {/* Spark track */}
          <div className="animate-shimmer-slide absolute inset-0 aspect-[1] h-full rounded-none [mask:none]">
            <div
              className="animate-spin-around absolute -inset-full w-auto [translate:0_0] rotate-0"
              style={{
                background:
                  "conic-gradient(from calc(270deg - (var(--spread) * 0.5)), transparent 0, var(--shimmer-color) var(--spread), transparent var(--spread))",
              }}
            />
          </div>
        </div>

        {/* Content - crisp text centered inside the box */}
        <span className="relative z-10 flex items-center justify-center font-inherit text-inherit">
          {children}
        </span>

        {/* Subtle highlight sheen */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 size-full",
            "rounded-[inherit] shadow-[inset_0_-2px_4px_rgba(255,255,255,0.08)]",
            "transform-gpu transition-all duration-200 ease-in-out",
            "group-hover:shadow-[inset_0_-3px_8px_rgba(111,207,74,0.3)]",
            "group-active:shadow-[inset_0_-5px_10px_rgba(111,207,74,0.4)]"
          )}
        />

        {/* Backdrop - protects text from inner glow bleed */}
        <div
          className="absolute -z-20 pointer-events-none transition-colors duration-200 [background:var(--bg)] group-hover:[background:var(--hover-bg)]"
          style={{
            inset: "var(--cut)",
            borderRadius: "calc(var(--radius) - var(--cut))",
          }}
        />
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          target={target}
          rel={rel}
          ref={ref as React.Ref<HTMLAnchorElement>}
          style={buttonStyle}
          className={baseClassName}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {innerContent}
        </Link>
      );
    }

    return (
      <button
        type={type}
        disabled={disabled}
        ref={ref as React.Ref<HTMLButtonElement>}
        style={buttonStyle}
        className={baseClassName}
        onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {innerContent}
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
