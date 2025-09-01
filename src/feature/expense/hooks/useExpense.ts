import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { DateUtility } from "../../../utilities";
import { fetchExpenseById } from "../actions";

export const useExpense = (id: string) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.expenses[id]) || {};

  const formattedData = {
    ...data,
    date: DateUtility.formatDate(data.date),
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await dispatch(fetchExpenseById(id));
    setRefreshing(false);
  };

  return { data: formattedData, onRefresh, refreshing };
};
