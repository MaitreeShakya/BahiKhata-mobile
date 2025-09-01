import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { DateUtility } from "../../../utilities";
import { fetchExpenses } from "../actions";

export const useExpenses = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.expenses) || {};

  const formattedData = Object.values(data).map((expense) => ({
    ...expense,
    date: DateUtility.formatDate(expense.date),
  }));

  const onRefresh = async () => {
    setRefreshing(true);
    await dispatch(fetchExpenses());
    setRefreshing(false);
  };

  return { data: formattedData, onRefresh, refreshing };
};
