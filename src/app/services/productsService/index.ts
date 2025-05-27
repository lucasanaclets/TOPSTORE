import { create } from "./create";
import { getAll } from "./getAll";
import { getById } from "./getById";
import { getSalesReport } from "./getSalesReport";
import { remove } from "./remove";
import { update } from "./update";

export const productsService = {
  getAll,
  getById,
  getSalesReport,
  create,
  update,
  remove,
};
