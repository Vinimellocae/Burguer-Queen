// contexts/ReviewsContext.tsx
import type { Review } from "@/types/Review";
import { createContext, useContext, useState, type ReactNode } from "react";
import { reviews as initialReviews } from "@/data/reviews";

interface ReviewsContextType {
  reviews: Review[];
  addReview: (userName: string, rating: number, comment?: string) => void;
}

const ReviewsContext = createContext<ReviewsContextType | undefined>(undefined);

export const ReviewsProvider = ({ children }: { children: ReactNode }) => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);

  const addReview = (userName: string, rating: number, comment?: string) => {
    const newReview: Review = {
      id: `review-${Date.now()}`,
      userName,
      rating,
      comment,
      date: new Date().toLocaleDateString("pt-BR"),
    };
    setReviews((prev) => [newReview, ...prev]);
  };

  return (
    <ReviewsContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewsContext.Provider>
  );
};

export const useReviews = () => {
  const context = useContext(ReviewsContext);
  if (!context)
    throw new Error("useReviews deve ser usado dentro de ReviewsProvider");
  return context;
};
