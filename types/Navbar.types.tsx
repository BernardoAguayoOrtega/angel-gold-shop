import { MouseEventHandler } from "react";

export type LinkProps = {
  ref: string;
  label: string;
};

export interface NavigationLinksComponentProps {
  isMobile: boolean;
  isMenuOpen: boolean;
}

export type IconMenuComponentType = {
  handleOpenCart: MouseEventHandler<SVGElement>;
};

export interface MobileMenuButtonComponentType {
  isMenuOpen: boolean;
  setIsMenuOpen: MouseEventHandler<HTMLButtonElement>;
}

export type stateType = {
  isMenuOpen: boolean;
  isCartOpen: boolean;
};
