import { AbstractComponentTemplate } from "./AbstractComponentTemplate";
import { ComponentType } from "../utils/types";

export class ModalTemplate extends AbstractComponentTemplate {
  protected getComponentType(): ComponentType {
    return "modal";
  }

  protected generateComponent(name: string, className: string, isTypeScript: boolean): string {
    const defaultProps = this.getDefaultProps();
    const propsInterface = isTypeScript
      ? `
interface ${name}Props {
  isOpen: boolean;
  onClose: () => void;
}
`
      : "";

    const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

return `import React from "react";
${propsInterface}

export const ${name}${componentType} = ({ ${defaultProps} }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="${className}">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                &times;
                </button>
                <div className="p-4">
                    {/* Your content here */}
                </div>
            </div>
        </div>
    );
};
    `;
  }
}