// const router = require('express').Router();
// const { PatientDetails, HealthDetailsEXT, TestResults, HealthDetails } = require('../../models');

// router.post('/chart', async (req, res) => {
//   try {
//     const { patientId } = req.body;

//     const patientChart = await PatientDetails.findByPk(patientId, {
//       include: [
//         {
//           model: HealthDetails,
//         },
//         {
//           model: HealthDetailsEXT,
//         },
//         {
//           model: TestResults,
//         },
//       ],
//     });

//     res.render('chart', { patientChart });
//   } catch (error) {
//     console.error('Error fetching patient data for chart', error);
//     res.status(500).send('Chart post route issue');
//   }
// });

// router.post('/', async (req, res) => {
//     console.log('req.body:', req.body)
//   try {
//     const { comment_text } = req.body;
//     // const patient_id = req.body.patient_id;
  
//     // const patient = await PatientDetails.findByPk(patient_id);
  
//     // if (!patient) {
//     //   return res.status(400).json({ message: 'Invalid patient_id' });
//     // }
  
//     const newComment = await Comment.create({
//       comment_text,
//       patient_id: 2,
//     });
  
//     res.status(200).json(newComment);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
//   });
// module.exports = router;