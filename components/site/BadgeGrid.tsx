type BadgeGridProps = {
  items: string[];
};

/** Clean inline badge grid — used for industries, freight types, etc. */
export default function BadgeGrid({ items }: BadgeGridProps) {
  return (
    <ul className="flex flex-wrap justify-center gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-brand-navy/10 bg-white px-5 py-2 text-sm font-medium text-brand-navy shadow-sm"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
