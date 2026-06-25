import { Cards } from '../cards/Cards.component';
import './Category.css';

export type Resource = {
  id: string;
  category: string;
  title: string;
  thumbnail: string;
  tags: string[];
  duration: number;
  description: string;
  date_uploaded: string;
}

type CategoryProps = {
  resources: Resource[];
}

export function groupByCategory(resources: Resource[]): Record<string, Resource[]> {
  return resources.reduce((acc, resource) => {
    acc[resource.category] = [...(acc[resource.category] ?? []), resource];
    return acc;
  }, {} as Record<string, Resource[]>);
}

export function Category({ resources }: CategoryProps) {
  const grouped = groupByCategory(resources);

  return (
    <div className="resource-catalogue">
      {Object.entries(grouped).map(([category, cards]) => (
        <section key={category} className="resource-catalogue__category">
          <h2 className="resource-catalogue__heading">{category}</h2>
          <Cards cards={cards} />
        </section>
      ))}
    </div>
  );
}