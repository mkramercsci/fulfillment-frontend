import { Batch } from "./batch";
import { Department } from "./department";
import { Item } from "./item";
import { Order } from "./order";

export interface BatchDetail {
  batch: Batch;
  order: Order;
  item: Item;
  department: Department;

  quantity: number;
  picked: boolean;
}
