// Reviews.tsx
import { ReviewCard, ReviewForm } from "@/components/features/Reviews";
import { useReviews } from "@/contexts/ReviewsContext";

const Reviews = () => {
  const { reviews } = useReviews();

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col gap-8">
      <section>
        <h2 className="text-[var(--text-primary)] font-semibold mb-3">
          Deixe sua avaliação
        </h2>
        <ReviewForm />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-[var(--text-primary)] font-semibold">
          Avaliações recentes
        </h2>
        {reviews.length === 0 ? (
          <p className="text-[var(--text-secondary)] text-sm">
            Nenhuma avaliação ainda.
          </p>
        ) : (
          reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))
        )}
      </section>
    </div>
  );
};

export default Reviews;
