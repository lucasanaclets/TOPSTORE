export interface Product {
  id: string;
  model_name:
    | "Iphone 16 Pro Max"
    | "Iphone 16 Pro"
    | "Iphone 16"
    | "Iphone 15 Pro Max"
    | "Iphone 15 Pro"
    | "Iphone 15"
    | "Iphone 14 Pro Max"
    | "Iphone 14 Pro"
    | "Iphone 14"
    | "Iphone 13 Pro Max"
    | "Iphone 13 Pro"
    | "Iphone 13"
    | "Iphone 12 Pro Max"
    | "Iphone 12 Pro"
    | "Iphone 12"
    | "Iphone 11 Pro Max"
    | "Iphone 11 Pro"
    | "Iphone 11";
  storage: "128" | "256" | "512" | "1000";
  color: "Branco" | "Preto" | "Cinza" | "Azul" | "Dourado";
  battery_percentage: number;
  guarantee_time:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";
  use_marks: "Sim" | "Não";
  box_exists: "Sim" | "Não";
  value: number;
  product_model: {
    image_name: string;
  };
}
