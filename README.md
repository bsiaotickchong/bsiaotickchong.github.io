# bsiaotickchong.github.io
Personal website (WIP)

## Local development

Run `npm run dev` to start up a webpack dev server hosting the React app at localhost:9000

## Building and deploying

### Deploying manually

Run `npm run deploy` which webpacks the app into the `build` folder and then publishes those files to the `gh-pages` branch.
After a few minutes the updated files should be available at [bsiaotickchong.github.io](https://bsiaotickchong.github.io).

### Deploying via CI

The "CD" workflow at `.github/workflows/cd.yml` is responsible for building and deploying upon merging a PR to `main`. Simply create a PR with a branch and merge it into `main` to trigger the workflow.
