import { TextElement, TextElementProps } from './styles';

export type TextProps = TextElementProps;

/**
 * Text is the used to render text and paragraphs
 * within an interface.
 *
 * #### Props
 * **variant**
 * - `h1` | `h2` | `h3` | `h4`
 *
 * **fontWeight**
 * - `regular` | `medium` | `bold`
 *
 * **letterSpacing**
 * - `tightest` | `tighter` | `tight` | `normal` | `wide` | `wider` | `widest`
 *
 */
export const Text = (props: TextProps) => {
  return <TextElement {...props} />;
};
