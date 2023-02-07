import { globalCss } from 'milky-ui';

export const globalStyles = globalCss({
  body: {
    $$appBackgroundColor: '$colors$gray1',
    $$subtleAppBackgroundColor: '$colors$gray2',
    $$appLowContrastTextColor: '$colors$gray11',
    $$appHighContrastTextColor: '$colors$gray12',

    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    background: '$$appBackgroundColor',
    color: '$$appLowContrastTextColor',

    fontFamily: '$default',
  },
});
