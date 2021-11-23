import {MenuItem} from "primeng/api";

export interface SuggetionMenuModel extends MenuItem {
  isMenu?: boolean;
  items?: SuggetionMenuModel[];
  command?: any;
  data?: string;
  type?: any;
}
