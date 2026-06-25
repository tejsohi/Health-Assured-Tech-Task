import './Sorting.css';
import type { Resource } from "../category/Category.component";

export type SortOrder = 'default' | 'a-z' | 'z-a';

type SortDropdownProps = {
  value: SortOrder;
  onChange: (value: SortOrder) => void;
};

export function sortResources(resources: Resource[], order: SortOrder): Resource[] {
  if (order === 'default') return resources;
  return [...resources].sort((a, b) => {
    const cmp = a.category.localeCompare(b.category);
    return order === 'a-z' ? cmp : -cmp;
  });
}

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="sort-container">
      <span className="sort-label">Sort by</span>
      <select
        className="sort-select"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOrder)}
      >
        <option value="default">Default</option>
        <option value="a-z">A → Z</option>
        <option value="z-a">Z → A</option>
      </select>
    </div>
  );
}

