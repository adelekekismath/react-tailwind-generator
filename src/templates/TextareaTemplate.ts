import { AbstractComponentTemplate } from "./AbstractComponentTemplate";
import { ComponentType } from "../utils/types";

export class TextareaTemplate extends AbstractComponentTemplate {
  protected getComponentType(): ComponentType {
    return "textarea";
  }

  protected generateComponent(name: string, className: string, isTypeScript: boolean): string {
    const propsInterface = isTypeScript
      ? `
import React, { forwardRef } from "react";
import clsx from "clsx";

interface ${name}Props {
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    className?: string;
}
`
      : `import React, { forwardRef } from "react";
import clsx from "clsx";`;

    return `${propsInterface}

export const ${name} = ${isTypeScript ? `forwardRef<HTMLTextAreaElement, ${name}Props>` : "forwardRef"}(({ 
    placeholder = "", 
    value, 
    onChange, 
    onBlur, 
    className = "" 
}, ref
) => {
    return (
        <textarea
            ref={ref}
            className={clsx("px-3 py-2 border rounded focus:outline-none focus:ring", className)}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
        />
    );
  }
);
    `;
  }
}