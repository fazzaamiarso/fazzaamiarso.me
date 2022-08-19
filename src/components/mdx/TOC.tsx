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
    <aside className="hidden lg:block">
      <div className="sticky top-32 max-h-[calc(100vh-10rem)] overflow-y-auto overflow-x-hidden">
        <h2 className="tracking-wider mb-2 px-2 font-semibold">ON THIS PAGE</h2>
        <ul className=" " ref={tocRef}>
          {headings.map((h) => {
            const isActiveId = currentId === h.slug;
            return (
              <li
                key={h.slug}
                className={clsx(
                  " p-2 transition-all",
                  h.depth > 2 ? "ml-4" : "",
                  isActiveId
                    ? "bg-secondary-brown dark:bg-transparent  rounded-md"
                    : ""
                )}
              >
                <a
                  href={`#${h.slug}`}
                  className={clsx(
                    "line-clamp-1 text-sm",
                    isActiveId ? "text-primary-red " : "text-secondary-text"
                  )}
                >
                  {h.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
