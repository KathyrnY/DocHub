const { Comment } = require('../models');

const seedComments = async () => {
  try {
    const commentsData = [
      {
        comment_text: 'Test for patient 1',
        patient_id: 1,
      },
      {
        comment_text: 'Test for patient 2',
        patient_id: 2, 
      },
    ];

    await Comment.bulkCreate(commentsData);

    console.log('Comments seeded successful');
  } catch (err) {
    console.log('seeding comments error', err);
  }
};

module.exports = seedComments;