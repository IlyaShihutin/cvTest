export const officeService = {
    getOffice,
  };
  
  function getOffice(id) {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
  
    return fetch(
      `http://localhost:8000/api/v1/offices/${id}/`,
      requestOptions
    )
      .then(handleResponse)
      .then((office) => office);
  }
  
  function handleResponse(response) {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if (response.status === 401) {
          document.location.reload(true);
        }
  
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
  
      return data;
    });
  }
  