import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Brand colors for easy access
export const brandColors = {
  deepAmber: "#8B4513",
  gold: "#FFD700",
  cream: "#FFF8DC",
  forestGreen: "#228B22",
} as const;

// Animation utilities
export const animations = {
  fadeIn: "luxury-fade-in",
  slideUp: "animate-slide-up",
  float: "animate-float",
  pulse: "animate-pulse-slow",
  bounce: "animate-bounce-slow",
  rotate: "animate-rotate-slow",
} as const;

// Glass morphism utility
export const glassEffect = "glass backdrop-blur-md bg-opacity-25 border border-opacity-20";

// Luxury gradient utilities
export const gradients = {
  luxury: "bg-gradient-to-r from-amber-deep via-gold to-cream",
  natural: "bg-gradient-to-r from-forest via-green-400 to-green-200",
} as const;