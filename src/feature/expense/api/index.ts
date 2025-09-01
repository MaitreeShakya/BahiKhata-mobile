import { Expense } from "../typings";
import { Api } from "../../../api/Api";
import { EXPENSE_DATA } from "../constants";

export class ExpenseApi {
  static fetchExpenses = async (): Promise<Expense[]> => {
    // const { data } = await Api.get("/expenses");
    const data = EXPENSE_DATA;
    return data;
  };

  static fetchExpenseById = async (
    id: string
  ): Promise<Expense | undefined> => {
    //const { data } = await Api.get(`/expenses/${id}`);
    const data = EXPENSE_DATA.find((expense) => expense._id === id);
    return data;
  };

  static createExpense = async (data: Expense): Promise<Expense> => {
    //const { data: createdExpense } = await Api.post("/expenses", data);

    const createdExpense = { ...data, _id: Math.random().toString() };
    return createdExpense;
  };

  static updateExpense = async (
    id: string,
    data: Expense
  ): Promise<Expense> => {
    //const { data: updatedExpense } = await Api.put(`/expenses/${id}`, data);
    const updatedExpense = { ...data, _id: id };
    return updatedExpense;
  };

  static deleteExpense = async (id: string): Promise<void> => {
    //const { data } = await Api.delete(`/expenses/${id}`);
    return;
  };
}
