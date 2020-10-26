export const userCheck = (e) => {
  if (e.login === "admin" && e.password === "admin") {
    return true;
  }
  return false;
};
