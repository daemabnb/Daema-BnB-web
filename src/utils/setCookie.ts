interface Cookie {
  name: string;
  value: string;
}

export const setCookie = (cookie: Cookie, days: number) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${cookie.name}=${cookie.value}${expires}; path=/`;
};
