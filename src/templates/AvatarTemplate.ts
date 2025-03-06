import { AbstractComponentTemplate } from "./AbstractComponentTemplate";
import { ComponentType } from "../utils/types";

export class AvatarTemplate extends AbstractComponentTemplate {

    protected getComponentType(): ComponentType {
        return "avatar";
    }

    generateComponent(name: string, className: string, isTypeScript: boolean): string {
        const propsInterface = isTypeScript
            ? `
interface ${name}Props {
    src?: string;
    alt?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    shape?: 'circle' | 'square';
    className?: string;
    fallbackText?: string;
}
`
            : "";
    
        const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

        return `import React from "react";
${propsInterface}
export const ${name}${componentType} = ({
    src,
    alt = "Avatar",
    size = "md",
    shape = "circle",
    className = "",
    fallbackText = "",
}) => {
 
    const sizeClasses = {
        xs: "w-6 h-6",
        sm: "w-8 h-8",
        md: "w-12 h-12",
        lg: "w-16 h-16",
        xl: "w-20 h-20",
    }[size];

    const shapeClasses = {
        circle: "rounded-full",
        square: "rounded-lg",
    }[shape];

    const renderFallback = () => {
        if (fallbackText) {
            return (
                <div
                    className={\`\${sizeClasses} \${shapeClasses} bg-gray-300 flex items-center justify-center text-gray-600 font-semibold\`}
                >
                    {fallbackText}
                </div>
            );
        }
        return (
            <div
                className={\`\${sizeClasses} \${shapeClasses} bg-gray-300 flex items-center justify-center\`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-1/2 h-1/2 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                </svg>
            </div>
        );
    };

    return (
        <div className={\`inline-block \${className}\`}>
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    className={\`\${sizeClasses} \${shapeClasses} object-cover\`}
                    aria-label={alt}
                />
            ) : (
                renderFallback()
            )}
        </div>
    );
};
`;
    }
}