workflow "Build & Deploy" {
  resolves = ["Deply to github pages"]
  on = "push"
}

workflow "Build & Deploy(Test)" {
  resolves = ["Deply to github pages"]
    on = "check_run"
}

action "Deply to github pages" {
  uses = "./action-deploy"
  env = {
    RENDER_BRANCH = "render"
  }
  secrets = ["GITHUB_TOKEN"]
}
