import axios from "axios";
import { register, logout, signin } from "./auth";
import { info } from "./user";
import { createUser, getAllEmployees, getEmployee } from "./employees";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const auth = {
  register: register(client),
  signin: signin(client),
  logout: logout(client),
};

const user = {
  info: info(client),
};

const employees = {
  create: createUser(client),
  getAll: getAllEmployees(client),
  getEmployee: getEmployee(client),
};

export { auth, user, employees };
