import { ComponentType } from "../utils/types";
import { AbstractComponentTemplate } from "./AbstractComponentTemplate";

export class ModalTemplate extends AbstractComponentTemplate {
  protected getComponentType(): ComponentType {
    return "modal";
  }

  protected generateComponent(name: string, className: string, isTypeScript: boolean): string {
    const propsInterface = isTypeScript
      ? `
interface ${name}Props {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode; 
    overlayClassName?: string; 
    closeOnOverlayClick?: boolean;
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
    overlayClassName = "bg-black/50",
    closeOnOverlayClick = true,
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
            className={\`fixed inset-0 flex items-center justify-center z-50 \${overlayClassName}\`}
            onClick={closeOnOverlayClick ? onClose : undefined}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                className={\`bg-white rounded-lg shadow-lg relative ${className}\`}
                onClick={(e) => e.stopPropagation()} 
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-4 text-2xl text-gray-500 hover:text-gray-700 transition-colors duration-200"
                    aria-label="Close modal"
                >
                    &times;
                </button>
                <div className="p-6">
                    {children || (
                        <div>
                            <h2 id="modal-title" className="text-xl font-bold mb-4">
                                Modal Title
                            </h2>
                            <p>Your content goes here.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
`;
  }
}