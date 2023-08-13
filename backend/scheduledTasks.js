const cron = require('node-cron');
const Note = require('./models/Note');

// Run the task every day at midnight
cron.schedule('0 0 * * *', async () => {
  try {
    // Get notes marked for deletion more than 30 days ago
    const deletionThreshold = new Date();
    deletionThreshold.setDate(deletionThreshold.getDate() - 30);
    const notesToDelete = await Note.find({ deletedAt: { $lte: deletionThreshold } });

    // Delete the notes permanently
    for (const note of notesToDelete) {
      await Note.findByIdAndDelete(note._id);
    }
    
    console.log(`${notesToDelete.length} notes have been permanently deleted.`);
  } catch (error) {
    console.error('Scheduled task error:', error);
  }
});
