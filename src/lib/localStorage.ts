export const setLocalStorageItem = (name: string, value: string) => {
  localStorage.setItem(name, value);
};

export const getLocalStorageItem = (name: string) => localStorage.getItem(name);
