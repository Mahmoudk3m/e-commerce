export type ProductType = {
  categoryId: number;
  description: string;
  id: number;
  imageURL: string;
  name: string;
  price: number;
};

export type CartItemType = {
  id: number;
  product: ProductType;
  quantity: number;
};

export type FormState =
  | {
      errors?: {
        email?: string;
        password?: string;
      };
      message?: string;
    }
  | undefined;
