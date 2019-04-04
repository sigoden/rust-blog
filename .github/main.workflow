workflow "Deploy" {
  resolves = [
    "Deploy for render changes"
  ]
  on = "push"
}

action "Deploy for render changes" {
  uses = "./.github/action-deploy"
  env = {
    RENDER_BRANCH = "render"
  }
  secrets = ["GIT_DEPLOY_KEY"]
}
