## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Commit

For having `semantic-release` to analyze the commit, we need to be consistant with the commit messages.

First install commitizen globally.

```bash
npm run -g commitizen
```

and then,

```bash
npm run commit
```

### Commitizen

Releases are based on the commit types: `feat` for the minor version, and `fix` for the patch release, and `fix` with `BREAKING CHANGES` creates a major upgrade.

Other types do not trigger version bump.
# Mod-Look
