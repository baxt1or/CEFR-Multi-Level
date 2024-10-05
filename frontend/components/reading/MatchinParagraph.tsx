type Props = {
  paragraphNumber?: string;
  paragraph: string;
};

export const MatchinParagraph = ({ paragraph, paragraphNumber }: Props) => {
  return (
    <div className="flex gap-4">
      <h1 className="text-xl font-bold">{paragraphNumber}</h1>
      <p className="text-md">{paragraph}</p>
    </div>
  );
};
