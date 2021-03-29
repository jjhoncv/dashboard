export const remove = async (id) => {
  const data = await fetch(process.env.API_PRODUCTS + "/" + id, {
    method: "DELETE",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  })
    .then((res) => res.json())
    .then((data) => data);

  if (data.status) {
    return data.data;
  } else {
    throw new Error(data.message);
  }
};
