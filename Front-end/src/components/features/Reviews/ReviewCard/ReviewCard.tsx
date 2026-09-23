// components/ReviewCard/ReviewCard.tsx
import type { Review } from "@/types/Review";
import styles from "./ReviewCard.module.css";
import { StarRating } from "..";

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.userName}>{review.userName}</span>
        <span className={styles.date}>{review.date}</span>
      </div>
      <StarRating value={review.rating} size={18} />
      {review.comment && <p className={styles.comment}>{review.comment}</p>}
    </div>
  );
};

export default ReviewCard;
