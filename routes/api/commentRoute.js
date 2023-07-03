const router = require('express').Router();
const { PatientDetails, Comment } = require('../../models');

router.post('/comments', async (req, res) => {
  try {
    const { comment_text, patientdetails_id } = req.body;

    const newComment = await Comment.create({
      comment_text,
      patientdetails_id,
    });

    const patientDetails = await PatientDetails.findByPk(req.params.id);
    patientDetails.comments.push(newComment);

    res.status(200).json({ success: true, message: 'Comment saved successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

module.exports = router;