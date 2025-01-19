const fetchAllTodos = async (path, method, data) => {
  let result;
  try {
    const BASE_URI = `http://localhost:4000/api/todos/${path}`;
    
    
    const resp = (method !== 'GET') ? await fetch(BASE_URI, {
      method: method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }) : await fetch(BASE_URI);

    result = await resp.json();
  } catch (error) {
    console.log(
      `Error occured while performing fetch for ${path} due to : `,
      error
    );
  }

  return result;
};

export default fetchAllTodos;
