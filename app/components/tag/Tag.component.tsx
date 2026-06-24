import "./Tag.css";

type TagProps = {
  text: string;
};

export function Tag({ text }: TagProps) {
  return <span className="tag">{text}</span>;
}