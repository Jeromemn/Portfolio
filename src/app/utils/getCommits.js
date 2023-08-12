//  access token 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

import { Octokit } from "@octokit/core";
import projectsData from "./projectsData";

// const project = projectsData.find(
//   (project) => project.name === params.singleProject
// );

const octokit = new Octokit({
  auth: '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'
  // auth: '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'
});

let commitCount = [];
const getCommits = async (owner, repo, res, req) => {
try {
 const result = octokit.request('GET /repos/{owner}/{repo}/commits', {
    owner: `${owner}`,
    repo: `${repo}`,
    // owner: "Jeromemn",
    // repo: "Modern-Pilgrim",
    author: "jeromenixon95@gmail.com",
    committer: "jeromenixon95@gmail.com",
    // per_page: 100,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
  }
  )
  // let result = await promise
  // console.log(await result)
  const data = await result;
  // commitCount.push(result?.data?.length);
  const refined = data.data.length;
  // console.log(refined);
  commitCount.push(refined);
  // const data = result.data.length;
  // console.log(data);
  // const total = result.data.length;  
  // console.log(total);
  return data;
} catch (error) {
  console.log(error);
}
}





// commitCount.slice(0, -1);
console.log(commitCount)
export { commitCount };


export default getCommits;