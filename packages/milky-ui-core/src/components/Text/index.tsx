import { TextElement, TextElementProps } from "./styles";

type TextVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export type TextProps = TextElementProps & {
  variant?: TextVariants;
};

/**
 * Text is the used to render text and paragraphs within an interface.
 */
export const Text = ({ variant = "p", ...rest }: TextProps) => {
  return <TextElement as={variant} {...rest} />;
};
