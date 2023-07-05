const router = require('express').Router();
const { PatientDetails, Comment } = require('../../models');
const { DateTime } = require('luxon');

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

router.put('/appt', async (req, res) => {
  console.log(req.body);
  try {
    // const todayDate = DateTime.now().toFormat('yyyy-MM-dd');
    // if (req.body.date >= todayDate) {
    //   console.log('yes greater!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    // }
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
