type JsonViewProps = {
  value: any;
};

/**
 * Provides a way to render an object on the dom.
 *
 * This is a helper component and is commonly used on
 * development to check state changes.
 */
export const JsonView = ({ value }: JsonViewProps) => {
  return <pre>{JSON.stringify(value, null, 2)}</pre>;
};
