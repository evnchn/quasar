# Evidence assets for the uc/* fork-staging PRs

Not part of any fix. This orphan branch only carries review evidence so the PR
diffs stay minimal:

- `mre/<issue>.html` — single-file, paste-and-run minimal reproducible examples.
  Each loads Quasar 2.23.3 from the CDN and self-reports a pass/fail verdict on the
  page, so no eyeballing or measuring is required.
- `shots/<issue>-<base|fix>-<engine>.png` — before/after screenshots. `base` is the
  published 2.23.3 build, `fix` is the locally built patched dist served in its place.
