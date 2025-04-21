import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "primary" | "secondary" | "accent" | "brown" | "navy" | "beige";
  className?: string;
  icon?: ReactNode;
}

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  theme = "primary",
  className = "",
  icon,
}: SectionTitleProps) {
  // Theme styles for the underline and text
  const themes = {
    primary: "border-foh-brown text-foh-navy",
    secondary: "border-foh-navy text-foh-brown",
    accent: "border-foh-beige text-foh-navy",
    brown: "border-foh-brown text-foh-brown",
    navy: "border-foh-navy text-foh-navy",
    beige: "border-foh-beige text-foh-brown",
  };

  // Theme-specific subtitle colors for better visibility
  const subtitleThemes = {
    primary: "text-foh-navy/80",
    secondary: "text-foh-brown/90",
    accent: "text-foh-navy/80",
    brown: "text-foh-brown/90",
    navy: "text-foh-navy/90",
    beige: "text-foh-brown/90",
  };

  // Alignment styles
  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const underlineWidths = {
    left: "w-20",
    center: "w-20 mx-auto",
    right: "w-20 ml-auto",
  };

  return (
    <div className={`mb-10 ${className}`}>
      {/* Icon if provided */}
      {icon && (
        <div
          className={`mb-4 ${
            align === "center"
              ? "flex justify-center"
              : align === "right"
              ? "flex justify-end"
              : ""
          }`}
        >
          <div className="bg-foh-peach/50 p-2.5 rounded-full shadow-sm inline-flex items-center justify-center">
            {icon}
          </div>
        </div>
      )}

      {/* Title */}
      <div className={alignments[align]}>
        <h2 className={`text-3xl font-bold ${themes[theme]} mb-3`}>{title}</h2>
        <div
          className={`border-b-3 ${themes[theme]} ${underlineWidths[align]}`}
          style={{ borderBottomWidth: "3px" }}
        ></div>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`mt-4 font-medium ${subtitleThemes[theme]} ${
            align === "center"
              ? "text-center mx-auto max-w-2xl"
              : align === "right"
              ? "text-right"
              : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
