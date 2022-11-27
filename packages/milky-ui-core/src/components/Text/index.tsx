import { TextElement, TextElementProps } from "./styles";

export type TextProps = TextElementProps;

/**
 * Text is the used to render text and paragraphs
 * within an interface.
 * 
 * #### Variants
 * - h1
 * - h2
 * - h3
 * - h4
 * 
 */
export const Text = (props: TextProps) => {
  return <TextElement {...props} />;
};
