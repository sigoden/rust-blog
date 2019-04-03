workflow "Main" {
  on = "push"
  resolves = ["Deply to github pages"]
}

action "Deply to github pages" {
  uses = "./action-deploy"
  env = {
    RENDER_BRANCH = "render"
  }
  secrets = ["GITHUB_TOKEN"]
}
