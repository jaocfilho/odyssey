import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { styled } from '../../styles/stiches';
import { createColorVariants } from '../../utils';

export const DropdownMenuTrigger = styled(DropdownMenu.Trigger, {
  all: 'unset',
});

export const DropdownMenuPortalContainer = styled(DropdownMenu.Portal, {
  all: 'unset',
});

const contentStyles = {
  minWidth: 220,
  py: '$4',

  rounded: '$sm',
  border: '$borderWidth$1',
  borderSolid: true,

  bgColor: '$gray1',

  variants: {
    borderColor: createColorVariants({
      variantFormat: (color) => ({
        borderColor: `$${color}7`,
      }),
    }),
  },

  defaultVariants: {
    borderColor: 'gray',
  },
};

export const DropdownMenuContentContainer = styled(DropdownMenu.Content, {
  ...contentStyles,
});

export const DropdownMenuSubContentContainer = styled(DropdownMenu.SubContent, {
  ...contentStyles,
});

const itemStyles = {
  all: 'unset',

  px: '$4',
  py: '$2',

  fontSize: '$md',

  display: 'flex',
  alignItems: 'center',

  cursor: 'pointer',

  variants: {
    colorScheme: createColorVariants({
      variantFormat: (color) => ({
        lowContrastTextColor: color,
        '&:hover': {
          bgColor: `$${color}4`,
        },
      }),
    }),
  },

  defaultVariants: {
    colorScheme: 'gray',
  },
};

export const DropdownMenuItemContainer = styled(DropdownMenu.Item, {
  ...itemStyles,
});

export const DropdownMenuCheckboxItemContainer = styled(
  DropdownMenu.CheckboxItem,
  itemStyles
);

export const DropdownMenuRadioItemContainer = styled(
  DropdownMenu.RadioItem,
  itemStyles
);
