export const userService = {
  login,
  logout,
};

function login(token) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      grant_type: 'convert_token',
      token: token,
      backend: 'google-oauth2',
      client_id: 'AgZl2fEgQWDSz5Kn9VcW7WgIjqhoLkMu06JoYDyF',
    }),
  };

  return fetch(
    `http://localhost:8000/api/v1/users/auth/convert-token/`,
    requestOptions
  )
    .then(handleResponse)
    .then((user) => {
      let data = {...user, image: localStorage.getItem('user')}
      localStorage.setItem('user', JSON.stringify(data));
      return data;
    });
}

function logout() {
  localStorage.removeItem('user');
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        document.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
