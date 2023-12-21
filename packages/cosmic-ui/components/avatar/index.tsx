import clsx from 'clsx';

type AvatarProps = {
  src?: string | null;
  square?: boolean;
  initials?: string;
  alt?: string;
  className?: string;
};

export const Avatar = ({
  src = null,
  square = false,
  initials,
  alt = '',
  className,
  ...props
}: AvatarProps & React.ComponentPropsWithoutRef<'span'>) => {
  return (
    <span
      data-slot="avatar"
      className={clsx(
        className,

        // Basic layout
        'inline-grid align-middle *:col-start-1 *:row-start-1',

        // Add the correct border radius
        square ? 'rounded-[20%] *:rounded-[20%]' : 'rounded-full *:rounded-full'
      )}
      {...props}
    >
      {initials && (
        <svg
          className="select-none fill-current text-[48px] font-medium uppercase"
          viewBox="0 0 100 100"
          aria-hidden={alt ? undefined : 'true'}
        >
          {alt && <title>{alt}</title>}
          <text
            x="50%"
            y="50%"
            alignmentBaseline="middle"
            dominantBaseline="middle"
            textAnchor="middle"
            dy=".125em"
          >
            {initials}
          </text>
        </svg>
      )}
      {src && <img src={src} alt={alt} />}
      {/* Add an inset border that sits on top of the image */}
      <span
        className="ring-1 ring-inset ring-black/5 dark:ring-white/5 forced-colors:outline"
        aria-hidden="true"
      />
    </span>
  );
};
