import { TodoItem } from "../../scenes/Home/viewModel";

export interface ItemList extends TodoItem {}

export interface CategoryModel {
  list: ItemList[];
}
