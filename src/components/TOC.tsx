import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

type Props = {
  headings: { depth: number; text: string; slug: string }[];
};

export default function TOC({ headings }: Props) {
  const tocRef = useRef<HTMLUListElement>(null);
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    if (!tocRef.current) return;

    const setCurrent: IntersectionObserverCallback = (entries) => {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          const { id } = entry.target;
          setCurrentId(id);
          break;
        }
      }
    };

    const observerOption: IntersectionObserverInit = {
      rootMargin: "0px 0px -66%",
      threshold: 1,
    };
    const headingObserver = new IntersectionObserver(
      setCurrent,
      observerOption
    );
    document
      .querySelectorAll("article :is(h2,h3,h4)")
      .forEach((heading) => headingObserver.observe(heading));

    return () => headingObserver.disconnect();
  }, [tocRef.current]);

  return (
    <ul className="space-y-2 " ref={tocRef}>
      {headings.map((h) => {
        return (
          <li key={h.slug} className="text-ellipsis line-clamp-1">
            <a
              href={`#${h.slug}`}
              className={clsx(
                h.depth > 2 ? "pl-4" : "",
                currentId.trim() === h.slug.trim()
                  ? "text-primary-red"
                  : "text-blue-400"
              )}
            >
              {h.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
