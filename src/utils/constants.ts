import { ComponentType } from "./types";

export const COMPONENT_TYPES: ComponentType[] = [
    "alert", "avatar", "badge", "button", "card", "dropdown", "footer", "input", "modal", "navbar"
];

export const DEFAULT_CLASSES: Record<ComponentType, string> = {
    button: "px-4 py-2 bg-blue-500 text-white rounded",
    card: "p-6 bg-white shadow-md rounded-lg",
    modal: "bg-white p-6 rounded-lg shadow-lg ",
    input: "p-2 border border-gray-300 rounded",
    navbar: "p-4 bg-gray-800 text-white",
    alert: "p-4 bg-red-100 text-red-700 rounded",
    dropdown: "p-2 bg-white border border-gray-300 rounded",
    badge: "px-2 py-1 bg-green-100 text-green-700 rounded-full",
    avatar: "w-12 h-12 rounded-full",
    footer: "p-4 bg-gray-800 text-white",
  };


  export const DEFAULT_PROPS: Record<ComponentType, string[]> = {
    button: ["text = ''", "disabled = false", "type = 'button'", "onClick = () => {}", "ariaLabel = ''"],
    alert: ["type = 'info'", "message = ''", "onClose = () => {}"],
    badge: ["text = ''", "color = 'blue'", "onClick = () => {}"],
    avatar: ["src = ''", "alt = 'Avatar'", "size = 'md'", "shape = 'circle'"],
    card: ["header = null", "footer = null","title", "content"],
    dropdown: ["options = []", "placeholder = 'Select an option'", "onSelect = () => {}"],
    footer: [ "leftSection = null", "rightSection = null", "centerSection = null", "links = []"],
    input: ["placeholder = ''", "type = 'text'", "value = ''", "onChange = () => {}", "onBlur = () => {}"],
    modal: ["isOpen = false", "onClose = () => {}"],
    navbar: ["logo = ''", "links = []", "leftSection = null", "rightSection = null"],

  };
