
const saveChanges = document.querySelector('#saveBtn');
const backBtn = document.querySelector('#backBtn');

const saveCommentHandler = async () => {
  const commentsInput = document.querySelector('input[name="comments"]');
  const commentText = commentsInput.value.trim();

  if (commentText) {
    const chartId = window.location.pathname.split('/').pop();
    const response = await fetch(`/api/chart/comments/${chartId}`, {
      method: 'POST',
      body: JSON.stringify({ comment_text: commentText }),
      headers: {
        'Content-Type': 'application/json'
      }
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

saveChanges.addEventListener('click',saveCommentHandler);
backBtn.addEventListener('click', backToDashboard);