import { globalCss } from 'milky-ui';

export const globalStyles = globalCss({
  body: {
    $$backgroundColor: '$colors$gray1',

    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    background: '$$backgroundColor',
    color: '$gray11',

    fontFamily: '$default',
  },
});
