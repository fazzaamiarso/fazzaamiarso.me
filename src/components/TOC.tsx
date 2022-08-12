type Props = {
  headings: { depth: number; text: string; slug: string }[];
};

export default function TOC({ headings }: Props) {
  return (
    <ul className="space-y-2 mt-20">
      {headings.map((h) => {
        return (
          <li key={h.slug} className="">
            <a href={`#${h.slug}`} className="text-blue-400">
              {h.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
