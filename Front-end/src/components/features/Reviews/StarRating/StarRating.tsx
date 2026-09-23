import { Star } from "lucide-react";
import styles from "./StarRating.module.css";

interface StarRatingProps {
  value: number;
  onChange?: (value: number) => void;
  size?: number;
}

const StarRating = ({ value, onChange, size = 22 }: StarRatingProps) => {
  const readOnly = !onChange;

  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={`${styles.starButton} ${star <= value ? styles.starFilled : ""} ${
            readOnly ? styles.readOnly : ""
          }`}
          onClick={() => onChange?.(star)}
          disabled={readOnly}
          aria-label={`${star} estrela${star > 1 ? "s" : ""}`}
        >
          <Star size={size} fill={star <= value ? "currentColor" : "none"} />
        </button>
      ))}
    </div>
  );
};

export default StarRating;
