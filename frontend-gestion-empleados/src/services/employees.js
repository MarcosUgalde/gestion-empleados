export const createUser = (client) => async (params) => {
  try {
    const { data } = await client.post("/employees/new", params);
    console.info("create employee data: ", data);
    return data;
  } catch (error) {
    console.info("creat3e employee error: ", error.message);
  }
};

export const getAllEmployees = (client) => async () => {
  const { data: content } = await client.get("/employees/all");
  console.log("content: ", content);
  return content;
};

export const getEmployee = (client) => async (id) => {
  try {
    const { data: response } = await client.get(`employees/${id}`);
    console.log("service response: ", response);
    return response;
  } catch (error) {
    console.info("Employee info error: ", error.message);
    return null;
  }
};

export const updateEmployee = (client) => async (params) => {
  try {
    const { data } = await client.put(`/employee/update/${params.id}`);
    console.info("Employee edition completed: ", data);
    return data;
  } catch (error) {
    console.info("Update employee service error: ", error.message);
    return { success: false };
  }
};
