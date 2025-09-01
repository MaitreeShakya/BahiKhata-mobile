import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Expense } from "../typings";

interface ExpenseState {
  [x: string]: Expense;
}

const initialState: ExpenseState = {};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    setExpenses: (state, action: PayloadAction<Expense[]>) => {
      const expenses = action.payload || [];
      return Object.fromEntries(
        expenses.map((expense) => [expense._id, expense])
      );
    },

    setExpenseById: (
      state,
      action: PayloadAction<{ id: string; expense: Expense }>
    ) => {
      const { id, expense } = action.payload;
      state[id] = expense;
    },

    addExpense: (state, action: PayloadAction<Expense>) => {
      const expense = action.payload;
      state[expense._id] = expense;
    },

    updateExpense: (
      state,
      action: PayloadAction<{ id: string; expense: Expense }>
    ) => {
      const { id, expense } = action.payload;
      state[id] = expense;
    },

    deleteExpense: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
  },
});

export const {
  addExpense,
  deleteExpense,
  setExpenses,
  setExpenseById,
  updateExpense,
} = expenseSlice.actions;

export const expenseReducer = expenseSlice.reducer;
