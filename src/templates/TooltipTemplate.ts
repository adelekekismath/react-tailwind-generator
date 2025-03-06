import { ComponentType } from "../utils/types";
import { AbstractComponentTemplate } from "./AbstractComponentTemplate";

export class TooltipTemplate extends AbstractComponentTemplate {
  getComponentType(): ComponentType {
    return "tooltip";
  }

  generateComponent(name: string, className: string, isTypeScript: boolean): string {
    const propsInterface = isTypeScript
      ? `
interface ${name}Props {
    text: string;
    position: 'top' | 'right' | 'bottom' | 'left';
    backgroundColor?: string;
    textColor?: string;
    pointerColor?: string;
    maxWidth?: string;
    children: React.ReactNode;
}
`
      : "";

    const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

    return `import React, { useState } from "react";
${propsInterface}
export const ${name}${componentType} = ({
    text = '',
    position = 'top',
    backgroundColor = 'bg-black',
    textColor = 'text-white',
    pointerColor = 'bg-black',
    maxWidth = 'max-w-xs',
    children,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    const positionClasses = {
        top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
        right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
        bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
        left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    };

    const tooltipPosition = positionClasses[position] || positionClasses.top;

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
        {children}

        {isVisible && (
            <div
                className={\`absolute \${tooltipPosition} p-2 \${backgroundColor} \${textColor} rounded text-sm shadow-lg \${maxWidth} z-10 whitespace-nowrap overflow-hidden text-ellipsis\`}
                role="tooltip"
            >
            {text}
            <div
                className={\`absolute w-2 h-2 \${pointerColor} transform rotate-45 \${
                position === "top"
                    ? "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                    : position === "right"
                    ? "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    : position === "bottom"
                    ? "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    : "right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
                }\`}
            />
            </div>
        )}
        </div>
    );
};
`;
  }
}