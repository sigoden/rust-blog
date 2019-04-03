FROM node:10-alpine

LABEL "com.github.actions.name"="deploy-gatsby-to-github-pages"
LABEL "com.github.actions.description"="Use gatsby js to build sites and deploy it to github pages"
LABEL "com.github.actions.icon"="mic"
LABEL "com.github.actions.color"="purple"

LABEL "repository"="https://github.com/sigoden/why-rust-has"
LABEL "homepage"="https://github.com/sigoden/why-rust-has/tree/deploy-action"
LABEL "maintainer"="sigoden <sigoden@github.com>"

RUN set -x \
  && apk add --no-cache \
  g++ \
  git \
  make \
  python2 \
  binutils \
  openssh-client

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
