import { create } from "./create";
import { getAll } from "./getAll";
import { getByUser } from "./getByUser";
import { remove } from "./remove";
import { update } from "./update";

export const ordersService = {
  create,
  remove,
  update,
  getByUser,
  getAll,
};
