workflow "Build & Deploy" {
  resolves = ["Deply to github pages"]
  on = "push"
}

action "Deply to github pages" {
  uses = "./.github/action-deploy"
  env = {
    RENDER_BRANCH = "render"
  }
  secrets = ["GITHUB_TOKEN"]
}
