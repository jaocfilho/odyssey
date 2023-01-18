'use client';

import type { ReactNode } from 'react';

import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuTrigger,
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

type DropdownMenuWrapperProps = {
  children: ReactNode;
};

export const DropdownMenu = ({ children, trigger }: DropdownMenuProps) => {
  return (
    <RadixDropdownMenu.Root>
      <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
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

/**
 * This component wraps all DropdownMenu children components. It is
 * used for testing purposes since DropdownMenu uses the context api.
 *
 */
export const DropdownMenuOpenWrapper = ({
  children,
}: DropdownMenuWrapperProps) => {
  return (
    <RadixDropdownMenu.Root open>
      <DropdownMenuContentContainer>{children}</DropdownMenuContentContainer>
    </RadixDropdownMenu.Root>
  );
};
