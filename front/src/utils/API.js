// 192.168.201.18
const BASE_URL = 'http://localhost:8080'; // Change this to your backend server URL

const handleResponse = async (response) => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch (error) {
    console.error('Failed to parse JSON response:', error);
    return text;
  }
};

const get = async (path, params = {}) => {
  const url = new URL(`${BASE_URL}${path}`);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  const response = await fetch(url.toString());
  return handleResponse(response);
};

const post = async (path, data) => {
  const url = `${BASE_URL}${path}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

const put = async (path, data) => {
  const url = `${BASE_URL}${path}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

const del = async (path) => {
  const url = `${BASE_URL}${path}`;
  const response = await fetch(url, {
    method: 'DELETE',
  });
  return handleResponse(response);
};

export { get, post, put, del };
