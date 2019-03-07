export function authHeader() {
  // return authorization header with jwt token
  let authToken = localStorage.getItem('token');

  if (authToken !== null) {
    return {'Authorization': 'Bearer ' + authToken};
  } else {
    return {};
  }
}