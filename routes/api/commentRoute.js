const router = require('express').Router();
const Comment = require('../../models/Comments');

router.post('/comments/:id', async (req, res) => {
try {
  const { comment_text } = req.body;

  const newComment = await Comment.create({
    comment_text,
    patient_id: req.params.id,
  });

  res.status(200).json(newComment);
} catch (error) {
  console.error(error);
  res.status(500).json({ message: 'Internal server error, cannot post comment' });
}
});

module.exports = router;
