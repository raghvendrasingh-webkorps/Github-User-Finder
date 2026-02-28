const button = document.getElementById('btn');
const userEl = document.querySelector('.user');
const input = document.getElementById('username');

const usersEndpoint = 'https://api.github.com/users';

async function displayUser(username) {
  try {
    userEl.textContent = 'Loading...';

    const response = await fetch(`${usersEndpoint}/${username}`);

    if (!response.ok) {
      throw new Error('User not found');
    }

    const data = await response.json();

    userEl.textContent = `
      Name: ${data.name}
      Bio: ${data.bio}
      Public Repos: ${data.public_repos}
    `;
  } catch (error) {
    userEl.textContent = 'Something went wrong, Please Enter Correct Username!';
    console.error(error);
  }
}

button.addEventListener('click', function () {
  const username = input.value.trim();
  if (username) {
    displayUser(username);
  }
});

