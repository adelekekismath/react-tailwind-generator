import { IComponentTemplate } from "./IComponentTemplate";
import { ButtonTemplate } from "./templates/ButtonTemplate";
import { CardTemplate } from "./templates/CardTemplate";
import { ModalTemplate } from "./templates/ModalTemplate";
import { NavbarTemplate } from "./templates/NavbarTemplate";
import { InputTemplate } from "./templates/InputTemplate";

export const componentTemplates: Record<string, IComponentTemplate> = {
  button: new ButtonTemplate(),
  card: new CardTemplate(),
  modal: new ModalTemplate(),
  navbar: new NavbarTemplate(),
  input: new InputTemplate(),
};