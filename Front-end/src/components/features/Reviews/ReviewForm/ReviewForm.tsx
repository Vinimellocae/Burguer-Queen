// components/ReviewForm/ReviewForm.tsx
import { useState } from "react";
import { toast } from "sonner";
import { useReviews } from "@/contexts/ReviewsContext";
import { StarRating } from "..";
import styles from "./ReviewForm.module.css";

const CURRENT_USER = "ADM Burguer Queen";

const ReviewForm = () => {
  const { addReview } = useReviews();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (rating === 0) return;
    addReview(CURRENT_USER, rating, comment.trim() || undefined);
    toast.success("Obrigado pela avaliação!");
    setRating(0);
    setComment("");
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.label}>Como foi sua experiência?</span>
        <StarRating value={rating} onChange={setRating} />
      </div>

      <textarea
        className={styles.comment}
        placeholder="Conte mais (opcional)"
        rows={2}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button
        type="button"
        className={styles.submitButton}
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Enviar avaliação
      </button>
    </div>
  );
};

export default ReviewForm;
