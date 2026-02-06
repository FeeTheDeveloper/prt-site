"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { brandLogos, logoMotionPresets } from "./BrandAssets";

const sizeMap = {
  sm: 96,
  md: 140,
  lg: 200,
  xl: 280,
} as const;

type LogoSize = keyof typeof sizeMap;
type LogoVariant = "full" | "mark";

type LogoProps = {
  size?: LogoSize;
  animated?: boolean;
  background?: "light" | "dark";
  variant?: LogoVariant;
  priority?: boolean;
  alt?: string;
  className?: string;
};

export function Logo({
  size = "md",
  animated = false,
  background = "light",
  variant = "full",
  priority = false,
  alt,
  className,
}: LogoProps) {
  const dimension = sizeMap[size];
  const src =
    variant === "mark"
      ? brandLogos.mark
      : background === "dark"
        ? brandLogos.light
        : brandLogos.dark;

  const wrapperClassName = ["inline-flex items-center", className]
    .filter(Boolean)
    .join(" ");

  const image = (
    <Image
      src={src}
      alt={alt ?? "PRT Logistics & Freight logo"}
      width={dimension}
      height={dimension}
      priority={priority}
      className="select-none"
      sizes={`${dimension}px`}
    />
  );

  if (!animated) {
    return <div className={wrapperClassName}>{image}</div>;
  }

  return (
    <motion.div className={wrapperClassName} {...logoMotionPresets.reveal}>
      {image}
    </motion.div>
  );
}

export default Logo;
