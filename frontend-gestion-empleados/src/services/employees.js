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
