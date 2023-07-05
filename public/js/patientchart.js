const saveChanges = document.querySelector('#saveBtn');
const backBtn = document.querySelector('#backBtn');
const calendarbtn = document.querySelector('#newappt');
const createAppt = document.querySelector('#Apptsubmit');

const saveCommentHandler = async () => {
  const commentsInput = document.querySelector('input[name="comments"]');
  const commentText = commentsInput.value.trim();

  if (commentText) {
    const chartId = window.location.pathname.split('/').pop();
    const response = await fetch(`/api/chart/comments/${chartId}`, {
      method: 'POST',
      body: JSON.stringify({ comment_text: commentText }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/chart/${chartId}`);
    } else {
      alert('Failed to post comment');
    }
  }
};
const backToDashboard = () => {
  document.location.replace('/dashboard');
};

const calendarfn = async (event) => {
  event.preventDefault();
  const date = document.querySelector('#date').value;
  const time = document.querySelector('#time').value;
  const timeformatted = `${time}:00`;
  const id = window.location.pathname.split('/').pop();
  console.log(date, timeformatted);

  const response = await fetch('/api/chart/appt', {
    method: 'PUT',
    body: JSON.stringify({
      date,
      timeformatted,
      id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    alert('Appointment Created!!!');
  } else {
    alert('Failed to create Patientdetails');
  }
};

saveChanges.addEventListener('click', saveCommentHandler);
backBtn.addEventListener('click', backToDashboard);
createAppt.addEventListener('click', calendarfn);
