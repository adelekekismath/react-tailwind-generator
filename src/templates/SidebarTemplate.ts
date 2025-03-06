import { ComponentType } from "../utils/types";
import { AbstractComponentTemplate } from "./AbstractComponentTemplate";

export class SidebarTemplate extends AbstractComponentTemplate {
  protected getComponentType(): ComponentType {
    return "sidebar";
  }

  protected generateComponent(name: string, className: string, isTypeScript: boolean): string {
    const propsInterface = isTypeScript
      ? `
interface ${name}Props {
    isOpen?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
    overlayClassName?: string; 
    closeOnOverlayClick?: boolean; 
    position?: "left" | "right"; 
}
`
      : "";

    const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

    return `import React, { useEffect } from "react";
${propsInterface}

export const ${name}${componentType} = ({
    isOpen = false,
    onClose = () => {},
    children,
    overlayClassName = "bg-black bg-opacity-50",
    closeOnOverlayClick = true,
    position = "left",
}) => {
    useEffect(() => {
        const handleEscape = (event${isTypeScript ? ": KeyboardEvent" : ""}) => {
            if (event.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className={\`fixed inset-0 z-50 flex \${overlayClassName}\`}
            onClick={closeOnOverlayClick ? onClose : undefined}
            role="dialog"
            aria-modal="true"
        >
            <div
                className={\`relative bg-white w-64 h-full shadow-lg transform transition-transform duration-200 \${
                    position === "left" ? "-translate-x-full" : "translate-x-full"
                } \${
                    isOpen ? "translate-x-0" : position === "left" ? "-translate-x-full" : "translate-x-full"
                } ${className}\`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 m-4 text-lg font-bold text-gray-500 hover:text-gray-700 transition-colors duration-200"
                    aria-label="Close sidebar"
                >
                    &times;
                </button>
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