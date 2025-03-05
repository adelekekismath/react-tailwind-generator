import { ComponentType } from "../utils/types";
import { AbstractComponentTemplate } from "./AbstractComponentTemplate";

export class TabsTemplate extends AbstractComponentTemplate {

    getComponentType(): ComponentType {
        return "tabs";
    }

    generateComponent(name: string, className: string, isTypeScript: boolean): string {
         
        const propsInterface = isTypeScript
            ? `
interface ${name}Props {
  tabs: { label: string, content: React.ReactNode }[];
  activeTab?: number;
  onTabChange?: (index: number) => void;
}
`
            : "";

        const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

        return `import React, { useState } from "react";
${propsInterface}
export const ${name}${componentType} = ({
    tabs,
    activeTab = 0,
    onTabChange
}) => {
    const [currentTab, setCurrentTab] = useState(activeTab);

    const handleTabClick = (index ${isTypeScript ? ": number":""}) => {
        setCurrentTab(index);
        if (onTabChange) {
            onTabChange(index);
        }
    };

    return (
        <div className={\`flex flex-col ${className}\`}>
            <div className="flex border-b border-gray-300">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={\`px-4 py-2 \${currentTab === index ? 'border-b-2 border-blue-500' : ''}\`}
                        onClick={() => handleTabClick(index)}
                        role="tab"
                        aria-selected={currentTab === index}
                        aria-controls={\`tab-content-\${index}\`}
                        id={\`tab-\${index}\`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="p-4" role="tabpanel" id={\`tab-content-\${currentTab}\`} aria-labelledby={\`tab-\${currentTab}\`}>
                {tabs[currentTab].content}
            </div>
        </div>
    );
};
    `;
    }
}