export const createUser = (client) => async (params) => {
  try {
    const { data } = await client.post("/employees/new", params);
    console.info("create employee data: ", data);
  } catch (error) {
    console.info("creat3e employee error: ", error.message);
  }
};
