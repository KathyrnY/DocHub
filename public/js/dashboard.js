const getAllpatient = async () => {
  const response = await fetch('/dashboard/all', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/dashboard/all');
  } else {
    alert('Failed to get all patients.');
  }
};
const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
};

document.querySelector('#allpatient').addEventListener('click', getAllpatient);
document.querySelector('#logout').addEventListener('click', logout);
