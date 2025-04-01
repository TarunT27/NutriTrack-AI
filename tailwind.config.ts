
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1E3A8A", // Deep Blue
          foreground: "#FFFFFF",
          hover: "#162a66",
        },
        secondary: {
          DEFAULT: "#4C1D95", // Dark Purple
          foreground: "#FFFFFF",
          hover: "#3a1670",
        },
        accent: {
          cyan: "#0EA5E9", // Electric Cyan
          magenta: "#E11D48", // Vibrant Magenta
          green: "#84CC16", // Bright Lime Green
          foreground: "#FFFFFF",
        },
        neutral: {
          off_white: "#F8FAFC", // Soft Off-White
          gray: "#64748B", // Cool Gray
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#2A2A39",
          foreground: "#94A3B8",
        },
        popover: {
          DEFAULT: "#171724",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#121220",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        futuristic: ["Orbitron", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { 
            boxShadow: "0 0 5px rgba(14,165,233,0.3), 0 0 15px rgba(14,165,233,0.2)" 
          },
          "50%": { 
            boxShadow: "0 0 10px rgba(14,165,233,0.5), 0 0 20px rgba(14,165,233,0.3)" 
          },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        slideInRight: {
          "0%": { transform: "translateX(30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
          "100%": { transform: "translateY(0px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fadeIn": "fadeIn 0.5s ease-out",
        "glow": "glow 2s ease-in-out infinite",
        "pulse": "pulse 2s ease-in-out infinite",
        "slideInRight": "slideInRight 0.5s ease-out",
        "slideInLeft": "slideInLeft 0.5s ease-out",
        "scaleIn": "scaleIn 0.4s ease-out",
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
      },
      boxShadow: {
        'neon-blue': '0 0 5px #0EA5E9, 0 0 10px rgba(14,165,233,0.8)',
        'neon-magenta': '0 0 5px #E11D48, 0 0 10px rgba(225,29,72,0.8)',
        'neon-green': '0 0 5px #84CC16, 0 0 10px rgba(132,204,22,0.8)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #1E3A8A, #4C1D95)',
        'gradient-accent': 'linear-gradient(to right, #0EA5E9, #E11D48)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
