const { Octokit } = require('octokit');
const github = require('@actions/github');
const core = require('@actions/core');

async function run() {
    let org = process.env.ORG
    let repo = process.env.REPO
    let pull = process.env.PULL
    const octokit = new Octokit({
      auth: process.env.TOKEN,
    })
    const result1 = await octokit.request(`get /repos/${org}/${repo}/pulls/${pull}/requested_reviewers`);
    const teamSlug = result1.data?.teams[0].id;
    const teamName = result1.data?.teams[0].name;
    const result2 = await octokit.request(`get /orgs/${org}/team/${teamSlug}/members`);
    members = '';
    result2.data.forEach(el => {
      members += el.login + ' '
    })
    
    console.log(`::set-output name=team::${teamName}`);
    console.log(`::set-output name=members::${members}`)
}
run();
