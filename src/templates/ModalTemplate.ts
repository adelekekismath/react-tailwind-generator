import { IComponentTemplate } from "../IComponentTemplate";

export class ModalTemplate implements IComponentTemplate {
  generate(name: string, className: string, props: string[] = []): string {
    const propsDeclaration = ["isOpen", ...props].join(", ");

    return `
import React from "react";

export const ${name} = ({ children, isOpen, ${propsDeclaration} }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center ${className}">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
};
    `;
  }
}