import { Review } from "../review/Review";

export type Product = {
  createdAt: Date;
  id: string;
  productDescription: string | null;
  productName: string | null;
  productPrice: number | null;
  reviews?: Array<Review>;
  updatedAt: Date;
};
