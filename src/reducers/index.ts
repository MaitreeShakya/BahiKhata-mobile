import { authReducer } from "../feature/auth/slices";
import { expenseFormReducer } from "../feature/expense/slices/ExpenseFormSlice";
import { expenseReducer } from "../feature/expense/slices/ExpenseSlice";

const reducers = {
  auth: authReducer,
  expenses: expenseReducer,
  expenseForm: expenseFormReducer,
};

export default reducers;
