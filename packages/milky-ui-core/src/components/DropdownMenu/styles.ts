import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { styled } from '../../styles/stiches';
import { createColorVariants } from '../../utils';

export const DropdownMenuPortalContainer = styled(DropdownMenu.Portal, {});

const contentStyles = {
  minWidth: 220,
  rounded: '$sm',
  padding: '$2',

  bgColor: '$gray1',
};

export const DropdownMenuContentContainer = styled(DropdownMenu.Content, {
  ...contentStyles,
});

export const DropdownMenuSubContentContainer = styled(DropdownMenu.SubContent, {
  ...contentStyles,
});

const itemStyles = {
  all: 'unset',

  rounded: '$xs',

  display: 'flex',
  alignItems: 'center',

  variants: {
    color: createColorVariants({
      variantFormat: (color) => ({
        lowContrastTextColor: color,
        '&[data-highlighted]': {
          solidColor: color,
          colorHighlightedTextColor: color,
        },
      }),
    }),
  },

  defaultVariants: {
    color: 'gray',
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
