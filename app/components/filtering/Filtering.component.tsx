import type { Resource } from "../category/Category.component";
import './Filtering.css';


export function filterResources(resources: Resource[], query: string): Resource[] {
  const lower = query.toLowerCase();
  return resources.filter(resource =>
    resource.title.toLowerCase().includes(lower) ||
    resource.tags.some(tag => tag.toLowerCase().includes(lower))
  );
}

type SearchBoxProps = {
  value?: string;
  onChange: (value: string) => void;
};

export function SearchBox({ value = "", onChange }: SearchBoxProps) {
  return (
      <div className="search-container">
          <span className="search-label">Search resources</span>
          <input
              type="search"
              placeholder="Search by title or tag..."
              value={value}
              onChange={(e) => onChange(e.target.value)}
          />
      </div>
  );
}