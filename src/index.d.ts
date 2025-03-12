declare module 'react-tailwind-generator' {
    
    export type ComponentType = "accordion" | "alert" | "avatar" | "badge" | "button" | "card" | "checkbox" | "dropdown" | "input" | "modal" | "navbar" | "pagination" | "progress" | "radio" | "select" | "switch" | "table" | "tabs" | "tooltip";
    export type ComponentTemplate = "AccordionTemplate" | "AlertTemplate" | "AvatarTemplate" | "BadgeTemplate" | "ButtonTemplate" | "CardTemplate" | "CheckboxTemplate" | "DropdownTemplate" | "InputTemplate" | "ModalTemplate" | "NavbarTemplate" | "PaginationTemplate" | "ProgressTemplate" | "RadioTemplate" | "SelectTemplate" | "SwitchTemplate" | "TableTemplate" | "TabsTemplate" | "TooltipTemplate";
    export type Component = {
        type: ComponentType;
        template: ComponentTemplate;
    };
    export type ComponentOptions = {
        name: string;
        className: string;
        isTypeScript: boolean;
    };
    export class ComponentGenerator {
        private component;
        constructor(component: Component);
        generateComponent(options: ComponentOptions): string;
    }
}