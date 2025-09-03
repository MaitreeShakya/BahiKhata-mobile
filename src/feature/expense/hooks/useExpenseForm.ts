import { useAppSelector } from "../../../store/hooks";

export const useExpenseForm = () => {
  const data = useAppSelector((state) => state.expenses);
  return { data };
};
