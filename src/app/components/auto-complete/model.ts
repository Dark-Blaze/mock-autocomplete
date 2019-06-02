export interface Model {
  id: string;
  name: string;
  items: Array<string>;
  address: string;
  pincode: string;
}


export interface ListMessageModel {
  e: any;
  from: string;
  select: boolean;
  index?: number;
  item: Model;
}
