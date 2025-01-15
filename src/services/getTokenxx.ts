// export const currentToken = {
//   get access_token() { return localStorage.getItem('access_token') || null },
//   get refresh_token() { return localStorage.getItem('refresh_token') || null },

//   save: function (response: { access_token: string, refresh_token?: string }) {
//     const { access_token, refresh_token } = response
//     localStorage.setItem('access_token', access_token)
//     if (refresh_token) localStorage.setItem('refresh_token', refresh_token)
//   }
// }