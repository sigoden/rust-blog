#!/bin/bash

STAGE_DIR=${GITHUB_WORKSPACE}/stage
GHPAGES_BRANCH=gh-pages
TARGET_REPO_URL="https://${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"

if [ -z "$RENDER_BRANCH" ]; then
    echo "Set the RENDER_BRANCH env variable."
    exit 1
fi

git config user.name "${GITHUB_ACTOR}"
git config user.email "${GITHUB_ACTOR}@users.noreply.github.com"

git clone --recurse-submodules -b $RENDER_BRANCH $TARGET_REPO_URL $STAGE_DIR

cd $STAGE_DIR

gatsby build

mv public $GITHUB_WORKSPACE

cd $GITHUB_WORKSPACE/public

git init
git remote add deploy $TARGET_REPO_URL
git checkout --orphan $GHPAGES_BRANCH 
git add .
git commit -m "Automated deployment to GitHub Pages"
git push deploy $GHPAGES_BRANCH --force

echo 'Complete'