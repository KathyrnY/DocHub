const router = require('express').Router();
const { PatientDetails, Comment } = require('../../models');

// creates comments for that visit
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
    res
      .status(500)
      .json({ message: 'Internal server error, cannot post comment' });
  }
});

//creates new appointment for the patient
router.put('/appt', async (req, res) => {
  try {
    const newAppt = await PatientDetails.update(
      {
        appt_date: req.body.date,
        appt_time: req.body.timeformatted,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );

    res.status(200).json(newAppt);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Internal server error, cannot update appointment' });
  }
});

module.exports = router;
