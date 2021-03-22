export const login = async (username, password) => {
  return await fetch(process.env.API_LOGIN, {
    body: JSON.stringify({ username, password }),
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  }).then((res) => res.json());
};
