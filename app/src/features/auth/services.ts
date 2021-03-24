export const login = async (username, password) => {
  const data = await fetch(process.env.API_LOGIN, {
    body: JSON.stringify({ username, password }),
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  })
    .then((res) => res.json())
    .then((data) => data);

  if (data.status) {
    const { user, token } = data.data;
    return { user, token };
  } else {
    throw new Error(data.message);
  }
};
