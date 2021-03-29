export const read = async (id = null) => {
  const data = await fetch(
    process.env.API_PRODUCTS + (id ? "/" + id : ""),
    {
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => data);

  if (data.status) {
    return data.data;
  } else {
    throw new Error(data.message);
  }
};