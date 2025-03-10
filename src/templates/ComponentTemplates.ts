import { AbstractComponentTemplate } from "./AbstractComponentTemplate";
import { ButtonTemplate } from "./ButtonTemplate";
import { CardTemplate } from "./CardTemplate";
import { ModalTemplate } from "./ModalTemplate";
import { NavbarTemplate } from "./NavbarTemplate";
import { InputTemplate } from "./InputTemplate";
import { AlertTemplate } from "./AlertTemplate";
import { DropdownTemplate } from "./DropdownTemplate";
import { BadgeTemplate } from "./BadgeTemplate";
import { AvatarTemplate } from "./AvatarTemplate";
import { FooterTemplate } from "./FooterTemplate";
import { TooltipTemplate } from "./TooltipTemplate";
import { SidebarTemplate } from "./SidebarTemplate";
import { SpinnerTemplate } from "./SpinnerTemplate";
import { BreadcrumbTemplate } from "./BreadcrumbTemplate";
import { AccordionTemplate } from "./AccordionTemplate";
import { TabsTemplate } from "./TabsTemplate";
import { TableTemplate } from "./TableTemplate";
import { TextareaTemplate } from "./TextareaTemplate";
import { SelectTemplate } from "./SelectTemplate";
import { RadioTemplate } from "./RadioTemplate";
import { CheckboxTemplate } from "./CheckboxTemplate";
import { LabelTemplate } from "./LabelTemplate";
import { FormTemplate } from "./FormTemplate";




export const componentTemplates: Record<string, AbstractComponentTemplate> = {
    button: new ButtonTemplate(),
    card: new CardTemplate(),
    modal: new ModalTemplate(),
    navbar: new NavbarTemplate(),
    input: new InputTemplate(),
    alert: new AlertTemplate(),
    dropdown: new DropdownTemplate(),
    badge: new BadgeTemplate(),
    avatar: new AvatarTemplate(),
    footer: new FooterTemplate(),
    tooltip: new TooltipTemplate(),
    sidebar: new SidebarTemplate(),
    spinner: new SpinnerTemplate(),
    breadcrumb: new BreadcrumbTemplate(),
    accordion: new AccordionTemplate(),
    tabs: new TabsTemplate(),
    table: new TableTemplate(),
    textarea: new TextareaTemplate(),
    select: new SelectTemplate(),
    radio: new RadioTemplate(),
    checkbox: new CheckboxTemplate(),
    label: new LabelTemplate(),
    form: new FormTemplate()
};