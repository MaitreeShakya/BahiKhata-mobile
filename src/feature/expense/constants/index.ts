import { Expense } from "../typings";

export const EXPENSE_DATA: Expense[] = [
  {
    _id: "1",
    description: "Groceries",
    amount: 50,
    date: "2023-01-01T00:00:00Z",
    receipt_url:
      "https://media.gettyimages.com/id/1285504723/vector/receipt-of-sale.jpg?s=612x612&w=0&k=20&c=vCAuQvhBTFQEIwThmXNNuCyd-mjaIeME62KaSpehOCw=",
  },
  {
    _id: "2",
    description: "Utilities",
    amount: 100,
    date: "2023-01-05T00:00:00Z",
  },
  {
    _id: "3",
    description: "Rent",
    amount: 1200,
    date: "2023-01-10T00:00:00Z",
    receipt_url:
      "https://media.gettyimages.com/id/1082996878/photo/close-up-of-grocery-receipt.jpg?s=612x612&w=0&k=20&c=22rtGosBeqS1MSS6dHhUyU7N8k51iwi99lFC2hTW5Jo=",
  },
];
