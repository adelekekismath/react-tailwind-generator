import { ComponentType } from "../utils/types";
import { AbstractComponentTemplate } from "./AbstractComponentTemplate";

export class SidebarTemplate extends AbstractComponentTemplate {

    getComponentType(): ComponentType {
        return "sidebar";
    }

    generateComponent(name: string, className: string, isTypeScript: boolean): string {
        const defaultProps = this.getDefaultProps();
        const propsInterface = isTypeScript
            ? `
interface ${name}Props {
  isOpen?: boolean;
  onClose?: () => void;
}
`
            : "";

        const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

        return `import React from "react";
${propsInterface}
export const ${name}${componentType} = ({ ${defaultProps} }) => {
    if (!isOpen) return null;

    return (
        <div className=" fixed inset-0 z-50 flex ${className}} role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="relative bg-white w-64 h-full shadow-lg">
                <button onClick={onClose} className="absolute top-0 right-0 m-4 text-lg font-bold">&times;</button>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};
    `;
    }
}