export const setTokenSessionStorage = (token: string) => {
  sessionStorage.setItem('token', token);
}

export const removeTokenSession = () => {
  sessionStorage.removeItem('token');
}