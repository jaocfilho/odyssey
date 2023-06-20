import ReactMarkdown from 'react-markdown';

type MarkdownProps = {
  children: string;
};

export function Markdown({ children }: MarkdownProps) {
  return (
    <ReactMarkdown
      components={{
        pre: ({ node, ...props }) => (
          <pre
            {...props}
            className="dark:bg-grayScheme-950 rounded-sm p-2 my-4"
          />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
