import { Body, BodyProps } from './Body';
import { Container } from './Container';
import { Title, TitleProps } from './Title';

type CardWithTitleProps = {
  titleProps?: TitleProps;
  bodyProps?: BodyProps;
};

export const TextareaWithTitle = ({
  titleProps,
  bodyProps,
}: CardWithTitleProps) => {
  return (
    <Container>
      <Title {...titleProps} />
      <Body {...bodyProps} />
    </Container>
  );
};
