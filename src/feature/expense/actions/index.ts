import { AppDispatch } from "../../../store/typings";
import { ExpenseApi } from "../api";
import { setExpenseById, setExpenses } from "../slices";
import { Expense } from "../typings";

const fetchExpenses = () => async (dispatch: AppDispatch) => {
  try {
    const data = await ExpenseApi.fetchExpenses();
    dispatch(setExpenses(data));
  } catch (error) {
    console.error("Error fetching expenses:", error);
  }
};

const fetchExpenseById = (id: string) => async (dispatch: AppDispatch) => {
  try {
    const data = await ExpenseApi.fetchExpenseById(id);
    data && dispatch(setExpenseById({ id, expense: data }));
  } catch (error) {
    console.error("Error fetching expense by ID:", error);
  }
};

const addExpense = (data: Expense) => async (dispatch: AppDispatch) => {
  try {
    const createdExpense = await ExpenseApi.createExpense(data);
    dispatch(
      setExpenseById({ id: createdExpense._id, expense: createdExpense })
    );
  } catch (error) {
    console.error("Error adding expense:", error);
  }
};

const updateExpense =
  (id: string, data: Expense) => async (dispatch: AppDispatch) => {
    try {
      const updatedExpense = await ExpenseApi.updateExpense(id, data);
      dispatch(
        setExpenseById({ id: updatedExpense._id, expense: updatedExpense })
      );
    } catch (error) {
      console.error("Error updating expense:", error);
    }
  };

const deleteExpense = (id: string) => async (dispatch: AppDispatch) => {
  try {
    await ExpenseApi.deleteExpense(id);
    dispatch(deleteExpense(id));
  } catch (error) {
    console.error("Error deleting expense:", error);
  }
};

export {
  fetchExpenses,
  fetchExpenseById,
  addExpense,
  updateExpense,
  deleteExpense,
};
