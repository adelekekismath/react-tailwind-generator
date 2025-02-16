import { IComponentTemplate } from "../IComponentTemplate";

type ButtonType = "button" | "submit" | "reset";

export class ButtonTemplate implements IComponentTemplate {

  generate(name: string, className: string, props: string[] = []): string {
    // Ajouter des props par défaut
    const defaultProps = [ "disabled = false", "type='button' ", "ariaLabel = ''"];
    const allProps = [...defaultProps, ...props].join(", ");

    return `
import React from "react";

export const ${name} = ({ children, onClick, ${allProps} }) => {
  return (
    <button
      className="${className}"
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
    `;
  }
}