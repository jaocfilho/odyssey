import { TextElement, TextElementProps } from "./styles";

export type TextProps = TextElementProps;

/**
 * Text is the used to render text and paragraphs within an interface.
 */
export const Text = (props: TextProps) => {
  return <TextElement {...props} />;
};
