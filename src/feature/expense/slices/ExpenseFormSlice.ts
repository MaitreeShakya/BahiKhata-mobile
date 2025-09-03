import { createSlice } from "@reduxjs/toolkit";
import { Expense } from "../typings";

const initialState: Expense = {
  amount: 0,
  date: "",
  description: "",
};

export const ExpenseFormSlice = createSlice({
  name: "expenseForm",
  initialState,
  reducers: {
    setExpenseForm: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetExpenseForm: () => {
      return initialState;
    },
  },
});

export const { setExpenseForm, resetExpenseForm } = ExpenseFormSlice.actions;

export default ExpenseFormSlice.reducer;
