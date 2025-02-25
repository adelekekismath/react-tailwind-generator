import { AbstractComponentTemplate } from "./AbstractComponentTemplate";
import { ButtonTemplate } from "./templates/ButtonTemplate";
import { CardTemplate } from "./templates/CardTemplate";
import { ModalTemplate } from "./templates/ModalTemplate";
import { NavbarTemplate } from "./templates/NavbarTemplate";
import { InputTemplate } from "./templates/InputTemplate";
import { AlertTemplate } from "./templates/AlertTemplate";
import { DropdownTemplate } from "./templates/DropdownTemplate";
import { BadgeTemplate } from "./templates/BadgeTemplate";
import { AvatarTemplate } from "./templates/AvatarTemplate";
import { FooterTemplate } from "./templates/FooterTemplate";

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