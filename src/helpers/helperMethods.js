export const isPathRegisterLogin = (pathname) => {
  return pathname === "/auth/login" || pathname === "/auth/register"
    ? true
    : false;
};
