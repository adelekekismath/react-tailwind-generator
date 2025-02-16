import { IComponentTemplate } from "../IComponentTemplate";

export class AvatarTemplate implements IComponentTemplate {
  generate(name: string, className: string, props: string[] = []): string {
    const defaultProps = ["src = ''", "alt = 'Avatar'", "size = 'md'", "shape = 'circle'"];
    const allProps = [...defaultProps, ...props].join(", ");

    return `
import React from "react";

export const ${name} = ({ src, alt, size, shape, ${allProps} }: ${name}Props) => {
  const sizeClass = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }[size];

  const shapeClass = shape === "circle" ? "rounded-full" : "rounded-lg";

  return (
    <img
      src={src}
      alt={alt}
      className={\`${className} \${sizeClass} \${shapeClass} object-cover\`}
    />
  );
};
    `;
  }
}