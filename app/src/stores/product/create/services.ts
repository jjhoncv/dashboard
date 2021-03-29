export const create = async (datap) => {
  const data = await fetch(
    process.env.API_PRODUCTS,
    {
      body: JSON.stringify(datap),
      method: "POST",
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