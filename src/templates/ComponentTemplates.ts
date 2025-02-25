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
    footer: new FooterTemplate()
};