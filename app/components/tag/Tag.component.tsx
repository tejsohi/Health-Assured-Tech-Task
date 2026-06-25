import "./Tag.css";

type TagProps = {
  text: string;
};

export function Tag({ text,}: TagProps) {
  return (
    <div className="tag-container">
        <span>{text}</span>
    </div>
  );
}