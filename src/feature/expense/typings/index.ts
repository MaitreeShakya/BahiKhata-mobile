export interface Expense {
  _id?: string;
  description: string;
  amount: number;
  date: string;
  category: string[];
  receipt_url?: string;
  addedOn?: string;
}
