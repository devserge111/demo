// heading.tsx
import { cn } from "@/lib/utils";
// If you need the icon too, alias it:
// import { Tag as TagIcon } from "lucide-react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const levelToTag = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
} as const;

type HeadingTagName = typeof levelToTag[HeadingLevel];

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
}

export function Heading({ level = 1, className, ...props }: HeadingProps) {
  const HeadingTag = levelToTag[level] as HeadingTagName; // <-- not the icon
  return (
    <HeadingTag
      className={cn("scroll-m-20 text-4xl font-bold tracking-tight", className)}
      {...props}
    />
  );
}
