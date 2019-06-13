export const deleteCookie = (name: string) => {
  const date = new Date();
  document.cookie = `${name}=; expires=${date.toUTCString()}; path=/`;
};
