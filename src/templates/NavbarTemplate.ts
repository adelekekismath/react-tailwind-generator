import { ComponentType } from "../utils/types";
import { AbstractComponentTemplate } from "./AbstractComponentTemplate";

export class NavbarTemplate extends AbstractComponentTemplate {
  protected getComponentType(): ComponentType {
    return "navbar";
  }

  protected generateComponent(name: string, className: string, isTypeScript: boolean): string {
    const propsInterface = isTypeScript
      ? `
interface ${name}Props {
    leftSection?: React.ReactNode;
    rightSection?: React.ReactNode;
    logo?: React.ReactNode;
    links: { label: string; href: string; active?: boolean }[];
    isMobileMenuOpen?: boolean; 
    onToggleMobileMenu?: () => void; 
    className?: string;
}
`
      : "";

    const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

    return `import React, { useState } from "react";
${propsInterface}

export const ${name}${componentType} = ({
    leftSection,
    rightSection,
    logo,
    links = [],
    isMobileMenuOpen = false,
    onToggleMobileMenu,
    className = "",
}) => {
    return (
        <nav className={\`bg-white shadow-md ${className}\`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        {logo && <div className="navbar-logo">{logo}</div>}
                        {leftSection && <div className="navbar-left">{leftSection}</div>}
                    </div>

                    <div className="hidden md:flex space-x-4">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className={\`navbar-link px-3 py-2 rounded-md text-sm font-medium \${
                                    link.active
                                        ? "bg-blue-500 text-white"
                                        : "text-gray-700 hover:bg-gray-100"
                                }\`}
                                aria-current={link.active ? "page" : undefined}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center">
                        {rightSection && <div className="navbar-right">{rightSection}</div>}

                        <button
                            onClick={onToggleMobileMenu}
                            className="md:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {links.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className={\`block px-3 py-2 rounded-md text-base font-medium \${
                                        link.active
                                            ? "bg-blue-500 text-white"
                                            : "text-gray-700 hover:bg-gray-100"
                                    }\`}
                                    aria-current={link.active ? "page" : undefined}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
`;
  }
}