import { useQuery } from "react-query";
import { employees } from "../services";

export const useAllEmployees = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["all"],
    queryFn: employees.getAll,
  });
  console.log("hook response: ", data);
  return { data, isLoading };
};
