import { IComponentTemplate } from "../IComponentTemplate";

export class ModalTemplate implements IComponentTemplate {
  generate(name: string, className: string, props: string[] = []): string {
    const defaultProps = ["onClose = () => {}", "overlayStyle = {}", "modalStyle = {}", "additionalClass = ''"];
    const allProps = [...defaultProps, ...props].join(", ");

    return `
import React from "react";

export const ${name} = ({ children, isOpen, ${allProps} }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" style={overlayStyle}>
      <div className={\`bg-white p-6 rounded-lg shadow-lg ${className} \${additionalClass}\`} style={modalStyle}>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
    `;
  }
}