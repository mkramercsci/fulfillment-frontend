export interface BatchDetail {
  batch_id: number;
  order_id: number;
  item_id: number;
  dept_id: number;

  quantity: number;
  picked: boolean;
}
