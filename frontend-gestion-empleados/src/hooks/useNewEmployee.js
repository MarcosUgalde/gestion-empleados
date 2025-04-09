import { useMutation } from "react-query";
import { useLocation } from "wouter";
import { employees } from "../services";

export const useNewEmployee = () => {
  const [, setLocation] = useLocation();

  const { mutate: createEmployee } = useMutation({
    mutationFn: employees.create,
    onSuccess: (data) => {
      if (data.success) setLocation("/");
      console.info("Encuesta insertada");
    },
  });

  return createEmployee;
};
