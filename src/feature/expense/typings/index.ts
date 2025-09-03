export interface Expense {
  _id?: string;
  description: string;
  amount: number;
  date: string;
  receipt_url?: string;
  addedOn?: string;
}
