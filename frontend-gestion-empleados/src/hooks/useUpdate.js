import { useMutation } from "react-query";
import { useLocation } from "wouter";
import { employees } from "../services";

export const useUpdate = () => {
  const [, setLocation] = useLocation();

  const { mutate: updateEmployee } = useMutation({
    mutationFn: employees.updateEmployee,
    onSuccess: (data) => {
      if (data.success) setLocation("/");
      console.info("Employee edition completed: ", data);
    },
  });
  return updateEmployee;
};
