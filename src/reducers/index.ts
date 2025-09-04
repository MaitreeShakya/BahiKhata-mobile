import { expenseFormReducer } from "../feature/expense/slices/ExpenseFormSlice";
import { expenseReducer } from "../feature/expense/slices/ExpenseSlice";

const reducers = {
  expenses: expenseReducer,
  expenseForm: expenseFormReducer,
};

export default reducers;
