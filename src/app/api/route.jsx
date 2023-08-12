// import { NextResponse } from "next/server";
// import { Octokit } from "@octokit/core";

// const octokit = new Octokit({
//   auth: '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'
//   // auth: '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'
// });
// export async function GET(owner, repo, res) {
//   // let commitCount = 0;
// // try {
//   const res = await octokit.request('GET /repos/{owner}/{repo}/commits', {
//     owner: `${owner}`,
//     repo: `${repo}`,
//     author: "jeromenixon95@gmail.com",
//     committer: "jeromenixon95@gmail.com",
//     per_page: 100,
//     // headers: {
//     //   'X-GitHub-Api-Version': '2022-11-28'
//     // }
//   });

//   const data = await res.json();
//   return NextResponse.json({ data });
// };

// console.log(data);


// export default getCommits;