import { Tag } from "../tag/Tag.component";
import "./Modal.css";

type ModalProps = {
  title: string;
  thumbnail: string;
  tags: string[];
  duration: number;
  dateUploaded: Date;
  description: string;
  onClose: () => void;
  category: string;
};

export function Modal({ title, thumbnail, tags, duration, dateUploaded, description, category, onClose }: ModalProps) {
  return (
    <div className="modal__backdrop" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal__image" style={{ backgroundImage: `url(${thumbnail})` }} />
        <div className="modal__body">
            <div className="modal__header">
                <h2 className="modal__title">{title}</h2>
                <p className="modal__category">{category}</p>
            </div>
          <p className="modal__description">{description}</p>
          <ul className="modal__tags">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </ul>
          <div className="modal__meta">
            <span>{duration} min</span>
            <span>{dateUploaded.toLocaleDateString("en-GB")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}