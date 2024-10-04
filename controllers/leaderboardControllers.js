import student from "../models/studentModel.js";

export const displayLeaderboard = async (req, res) => {
    try {
        const students = await student.find({});
    
        const leaderboardResults = students.map(student => ({
          [student.githubUsername]: {
            name: student.name,
            rollNo: student.rollNo,
            score: student.score,
            easy: student.easy,
            medium: student.medium,
            hard: student.hard
          }
        }));
    
        res.status(200).json(leaderboardResults);
    
      } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
      }
}
