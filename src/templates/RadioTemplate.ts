import { AbstractComponentTemplate } from "./AbstractComponentTemplate";
import { ComponentType } from "../utils/types";

export class RadioTemplate extends AbstractComponentTemplate {
  protected getComponentType(): ComponentType {
    return "radio";
  }

  protected generateComponent(name: string, className: string, isTypeScript: boolean): string {
    const imports = `import React, { forwardRef } from "react";
import clsx from "clsx";`;

    const propsInterface = isTypeScript
      ? `interface ${name}Props {
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    disabled?: boolean;
    label?: string;
}`
      : "";

    const forwardRefType = isTypeScript
      ? `forwardRef<HTMLInputElement, ${name}Props>`
      : `forwardRef`;

    return `${imports}

${propsInterface}

export const ${name} = ${forwardRefType}(
  ({ checked, onChange, className = "", disabled = false, label }, ref) => {
    return (
      <label className={clsx("flex items-center gap-2 cursor-pointer", { "opacity-50 cursor-not-allowed": disabled })}>
        <input
          ref={ref}
          type="radio"
          className={clsx(
            "form-radio h-5 w-5 text-blue-600 transition-all duration-200 ease-in-out",
            "border-gray-300 focus:ring focus:ring-blue-300 focus:ring-opacity-50",
            "hover:border-blue-500 focus:outline-none",
            className
          )}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          aria-checked={checked}
        />
        {label && <span className="text-gray-800">{label}</span>}
      </label>
    );
  }
);`;
  }
}