import { IComponentTemplate } from "../IComponentTemplate";
import { generatePropsUsage } from "../utils/utils";

export class ModalTemplate implements IComponentTemplate {
  generate(name: string, className: string, props: string[] = []): string {
    const propsDeclaration = ["isOpen", ...props].join(", ");
    const propsUsage = generatePropsUsage(props);

    return `
import React from "react";

export const ${name} = ({ children, isOpen, ${propsDeclaration} }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center ${className}">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {children}
        ${propsUsage}
      </div>
    </div>
  );
};
    `;
  }
}