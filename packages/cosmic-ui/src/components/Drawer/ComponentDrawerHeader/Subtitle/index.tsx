interface SubtitleProps {
  subTitle: string;
}

export function Subtitle({ subTitle }: SubtitleProps) {
  return (
    <div className="mt-1">
      <p className="text-sm dark:text-zinc-400">{subTitle}</p>
    </div>
  );
}
