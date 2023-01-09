'use client';

import type { ReactNode } from 'react';

import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuContentContainer,
  DropdownMenuSubContentContainer,
  DropdownMenuPortalContainer,
  DropdownMenuItemContainer,
  DropdownMenuCheckboxItemContainer,
  DropdownMenuRadioItemContainer,
} from './styles';

export type DropdownMenuProps = {
  children: ReactNode;
  trigger: ReactNode;
};

export const DropdownMenu = ({ children, trigger }: DropdownMenuProps) => {
  return (
    <RadixDropdownMenu.Root>
      <RadixDropdownMenu.Trigger asChild>{trigger}</RadixDropdownMenu.Trigger>
      <DropdownMenuPortalContainer>{children}</DropdownMenuPortalContainer>
    </RadixDropdownMenu.Root>
  );
};

export const DropdownMenuPortal = DropdownMenuPortalContainer;

export const DropdownMenuContent = DropdownMenuContentContainer;

export const DropdownMenuSubContent = DropdownMenuSubContentContainer;

export const DropdownMenuItem = DropdownMenuItemContainer;

export const DropdownMenuCheckboxItem = DropdownMenuCheckboxItemContainer;

export const DropdownMenuRadioItem = DropdownMenuRadioItemContainer;
