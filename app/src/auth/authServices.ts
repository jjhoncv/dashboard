export const serviceLogin = (id, username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id, username });
    }, 2000);
  });
};
