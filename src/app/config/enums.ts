import { z } from "zod";

export const modelsEnum = z.enum([
  "Iphone 16 Pro Max",
  "Iphone 16 Pro",
  "Iphone 16",
  "Iphone 15 Pro Max",
  "Iphone 15 Pro",
  "Iphone 15",
  "Iphone 14 Pro Max",
  "Iphone 14 Pro",
  "Iphone 14",
  "Iphone 13 Pro Max",
  "Iphone 13 Pro",
  "Iphone 13",
  "Iphone 12 Pro Max",
  "Iphone 12 Pro",
  "Iphone 12",
  "Iphone 11 Pro Max",
  "Iphone 11 Pro",
  "Iphone 11",
]);

export const storagesEnum = z.enum(["128", "256", "512", "1000"]);

export const colorsEnum = z.enum([
  "Branco",
  "Preto",
  "Cinza",
  "Azul",
  "Dourado",
]);

export const guaranteeTimesEnum = z.enum([
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
]);
