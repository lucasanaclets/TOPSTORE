export interface Order {
  id: string;
  created_at: string;
  address: string;
  status: string;
  user: {
    name: string;
    email: string;
  };
  product: {
    model_name: string;
    value: number;
    product_model: {
      image_name: string;
    };
  };
}
