import { ComponentType } from "./types";

export const COMPONENT_TYPES: ComponentType[] = [
    "alert", "avatar", "badge", "button", "card", "dropdown", "footer", "input", "modal", "navbar",
    "tooltip", "sidebar", "table", "spinner", "breadcrumb", "accordion", "tabs"
];

export const DEFAULT_CLASSES: Record<ComponentType, string> = {
    button: "px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded",
    card: "p-6 bg-white shadow-md rounded-lg",
    modal: "bg-white p-6 rounded-lg shadow-lg",
    input: "p-2 border border-gray-300 rounded",
    navbar: "p-4 bg-gray-800 text-white",
    alert: "rounded max-w-md",
    dropdown: "max-w-md",
    badge: "px-2 py-1 rounded-full",
    avatar: "w-12 h-12 rounded-full",
    footer: "p-4 bg-gray-800 text-white",
    tooltip: "p-2 bg-black text-white rounded",
    sidebar: "w-64 bg-gray-800 text-white h-full",
    table: "w-full bg-white border border-gray-300",
    spinner: "w-8 h-8 border-4  border-t-transparent rounded-full animate-spin",
    breadcrumb: "flex space-x-2 text-blue-500",
    accordion: "w-full bg-white border border-gray-300 rounded",
    tabs: "flex space-x-4 border-b border-gray-300"
};

export const DEFAULT_PROPS: Record<ComponentType, string[]> = {
    button: ['text = "Button"','disabled = false','type = "button"','onClick = () => {}','ariaLabel','className: propClassName = ""'],
    alert: ["type = 'info'", "message = ''", "onClose = () => {}"],
    badge: ["text = 'Badge Text'", "color = 'blue'", "onClick = () => {}"],
    avatar: ["src = '#'", "alt = 'Avatar'", "size = 'md'", "shape = 'circle'"],
    card: ["header = 'Default Header'", "footer = 'Default Footer'", "title = 'Default Title'", "content = 'Default Content'", "className : propClassName = ''", ],
    dropdown: ["options = []", "placeholder = 'Select an option'", "onSelect = () => {}", "className = ''"],
    footer: ["leftSection = null", "rightSection = null", "centerSection = null", "links = []"],
    input: ["placeholder = 'Placeholder'", "type = 'text'", "value = ''", "onChange = () => {}", "onBlur = () => {}"],
    modal: ["isOpen = false", "onClose = () => {}"],
    navbar: ["logo = ''", "links = []", "leftSection = null", "rightSection = null"],
    tooltip: ["text = ''", "position = 'top'", "isVisible = false", "backgroundColor = 'bg-black'", "textColor = 'text-white'", "pointerColor = 'bg-black'", "maxWidth = 'max-w-xs'" ],
    sidebar: ["children = null","isOpen = false", "onClose = () => {}"],
    table: ["data = []"],
    spinner: ["size = 'md'", "color = 'blue'"],
    breadcrumb: ["items = []"],
    accordion: ["items = []"],
    tabs: ["tabs = []", "activeTab = 0", "onTabChange = () => {}"]
};