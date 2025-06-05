import { useQuery } from "react-query";
import { employees } from "../services";

export const useEmployee = (props) => {
  const { data, isLoading } = useQuery(["employee", props?.employeeId], () =>
    employees.getEmployee(props?.employeeId)
  );
  console.log("hook response: ", data?.content);
  return { data, isLoading };
};
