import { IComponentTemplate } from "../IComponentTemplate";

type ButtonType = "button" | "submit" | "reset";

export class ButtonTemplate implements IComponentTemplate {

  generate(name: string, className: string): string {
    const defaultProps = [ "text = ''", "disabled = false", "type='button' ","onClick = () => {}", "ariaLabel = ''"].join(", ");

    return `
import React from "react";

export const ${name} = ({ ${defaultProps} }) => {
  return (
    <button
        className="${className}"
        onClick={onClick}
        type={type}
        disabled={disabled}
        aria-label={ariaLabel}
    >
      {text}
    </button>
  );
};
    `;
  }
}