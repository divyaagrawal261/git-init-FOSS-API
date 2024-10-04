import { projects } from "../models/projectsModel.js";
import { pullRequestsId } from "../models/pullRequestModel.js";
import student from "../models/studentModel.js";

export const updateScore = async (req, res) => {
  try {
    const allProjects = await projects.find();
    
    for (const { maintainer, project } of allProjects) {
      const PR_Details = await fetch(
        `https://api.github.com/repos/${maintainer}/${project}/pulls?state=closed`
      ).then((res) => res.json());

      for (const PR of PR_Details) {
        const PR_userId = PR.user.login;
        const registeredUser = await student.findOne({ githubUsername: PR_userId });

        const isPRProcessed = await pullRequestsId.findOne({ prId: PR.id });
        if (isPRProcessed) {
          continue; 
        }
        
        let easy = 0, medium = 0, hard = 0, score = 0;

        if (registeredUser && new Date(PR.merged_at) >= new Date("2024-10-05T00:00:00Z") &&
            new Date(PR.merged_at) <= new Date("2024-10-31T23:59:59Z")) {
          
          if (PR.labels.length === 0) {
            easy++;
            score += 10;
          } else {
            let isMedium = false, isHard = false;
            for (const label of PR.labels) {
              if (label.name.toLowerCase() === "medium" || label.name.toLowerCase() === "intermediate") {
                isMedium = true;
              } else if (label.name.toLowerCase() === "hard") {
                isHard = true;
              }
            }
            if (isHard) {
              score += 30;
              hard++;
            } else if (isMedium) {
              score += 20;
              medium++;
            } else {
              score += 10;
              easy++;
            }
          }

          await student.findOneAndUpdate(
            { githubUsername: PR_userId },
            { $inc: { score, easy, medium, hard } }
          );

          await pullRequestsId.create({
            prId: PR.id,
            githubUsername: PR_userId
          });
        }
      }
    }

    res.status(200).json({ message: "Score has been updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while updating the scores" });
  }
};
