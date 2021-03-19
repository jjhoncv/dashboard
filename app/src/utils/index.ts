export const session = {
  getUser: () =>
    JSON.parse(window.sessionStorage.getItem("user")) || { id: null },
  setUser: (user) => {
    window.sessionStorage.setItem("user", JSON.stringify(user));
  },
};
