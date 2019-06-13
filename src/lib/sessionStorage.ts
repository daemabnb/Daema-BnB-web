export const setSessionStorage = (name: string, value: string) => {
  sessionStorage.setItem(name, value);
};

export const getSessionStorage = (name: string) => sessionStorage.getItem(name);
