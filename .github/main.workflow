workflow "Deploy" {
  resolves = [
    "Deploy for master changes"
  ]
  on = "push"
}

action "Deploy for master changes" {
  uses = "./.github/action-deploy"
  env = {
    RENDER_BRANCH = "render"
  }
  secrets = ["GIT_DEPLOY_KEY"]
}
