import { API_URL } from '../constants.js';

const action = 'auth/register';
const method = 'post';

export async function register(profile) {

  const registerURL = API_URL + action;

    const response = await fetch(registerURL, {
      headers: {
        'Content-Type': 'application/json',
      },
      method,
      body: JSON.stringify(profile),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const result = await response.json();
    return result;
}


