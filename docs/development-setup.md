# Stephworld Delights — Development Setup & Command Guide

This guide explains the local environment, daily development commands, and the Git workflow used for this project. Commands are examples to run when the described step applies; they are not a single script to paste from beginning to end.

## Contents

1. [Folders and command conventions](#1-folders-and-command-conventions)
2. [Node.js and terminal setup](#2-nodejs-and-terminal-setup)
3. [Install dependencies and run the website](#3-install-dependencies-and-run-the-website)
4. [Validate changes](#4-validate-changes)
5. [Understand the Git workflow](#5-understand-the-git-workflow)
6. [Inspect branches and changes](#6-inspect-branches-and-changes)
7. [Stage the changes you want to commit](#7-stage-the-changes-you-want-to-commit)
8. [Commit and push a feature](#8-commit-and-push-a-feature)
9. [Merge a finished feature into develop](#9-merge-a-finished-feature-into-develop)
10. [Finish a merge message in Vim](#10-finish-a-merge-message-in-vim)
11. [Start the next feature branch](#11-start-the-next-feature-branch)
12. [Resolve conflicts and recover from mistakes](#12-resolve-conflicts-and-recover-from-mistakes)
13. [Find and update website text](#13-find-and-update-website-text)
14. [Daily reference](#14-daily-reference)

## 1. Folders and command conventions

There are two useful working directories:

| Directory | What you do there |
|---|---|
| Repository root: `Stephworld_Delights/` | Git commands, documentation, switching branches |
| Web application: `Stephworld_Delights/application/web/` | npm commands, running Next.js, TypeScript and ESLint checks |

Find your current directory and the repository root:

```bash
pwd
git rev-parse --show-toplevel
```

From anywhere inside the repository, return to its root:

```bash
cd "$(git rev-parse --show-toplevel)"
```

From the repository root, enter the web application:

```bash
cd application/web
```

From `application/web`, return to the repository root:

```bash
cd ../..
```

Use one terminal for the running development server and another for Git or checks. Stop the server before switching branches or running a production build against the same checkout.

### Paths in this project

```text
Stephworld_Delights/
├── .nvmrc
├── application/web/
│   ├── package.json
│   ├── package-lock.json
│   ├── messages/{en,fr,de}.json
│   └── src/
│       ├── app/[locale]/
│       ├── components/
│       ├── config/
│       └── i18n/
└── docs/
    ├── requirements.md
    ├── dev_steps.md
    ├── development-setup.md
    └── architecture.md
```

The requirements file is **`docs/requirements.md`**, not `requirements.md` at the repository root.

From `application/web`, its relative path is `../../docs/requirements.md`. The same applies to `../../docs/architecture.md`; `../docs/architecture.md` points to the nonexistent `application/docs` directory.

### Reading command examples

Do not type a terminal prompt such as `nlpjordan@Mac web %`. Text in quotes after `git commit -m` is the commit message and can be changed.

A trailing `\` joins the next line to the same shell command. Do not put it after independent commands such as `git status`, `git commit`, and `git push`. Every command in this guide is on its own line unless explicitly explained otherwise.

## 2. Node.js and terminal setup

The project's `package.json` requires **Node.js 24** (`>=24 <25`), and the repository's `.nvmrc` contains `24`.

Check the active tools:

```bash
node -v
npm -v
which node
git --version
```

Expected Node version: `v24.x.x`. `.nvmrc` declares a version; it does not activate that version by itself.

### macOS with Homebrew

Install Node 24 if it is missing:

```bash
brew install node@24
brew list --versions node@24
```

Activate it for the current terminal:

```bash
export PATH="$(brew --prefix node@24)/bin:$PATH"
node -v
which node
```

On this Apple Silicon Mac, the Node path is normally `/opt/homebrew/opt/node@24/bin/node`. The `brew --prefix` form also accommodates a different Homebrew installation location.

For new zsh terminals, add that `export PATH` line once to `~/.zshrc`, then open a new terminal. Alternatively, select Node 24 through an installed version manager. For example, **if nvm is already installed**, run `nvm install` and `nvm use` from the repository root so it reads `.nvmrc`. Use one approach consistently.

### Optional VS Code terminal profile

Open **Cmd + Shift + P → Preferences: Open User Settings (JSON)**. Merge this profile into your existing settings rather than replacing the entire file:

```json
{
  "terminal.integrated.profiles.osx": {
    "Node 24": {
      "path": "/bin/zsh",
      "args": ["-i"],
      "env": {
        "PATH": "/opt/homebrew/opt/node@24/bin:${env:PATH}"
      }
    }
  },
  "terminal.integrated.defaultProfile.osx": "Node 24"
}
```

This example uses the Apple Silicon Homebrew path. Reopen the terminal and check `node -v`. A workspace `.vscode/settings.json` can select the profile instead, but it is optional and is not currently supplied by this repository. Windows/Linux users should activate Node 24 using their own platform's tools.

## 3. Install dependencies and run the website

**Working directory: `application/web`.**

### Install an existing checkout

```bash
npm ci
```

This installs the versions recorded in `package-lock.json` and replaces any existing `node_modules`. Use it after cloning or when switching to a branch with different dependencies. If the lockfile does not match `package.json`, it fails instead of rewriting the lockfile. See the [npm ci documentation](https://docs.npmjs.com/cli/v11/commands/npm-ci/).

Do not reinstall Next.js, React, TypeScript, and Tailwind individually when setting up this existing project; they are already declared in `package.json`.

When intentionally adding a dependency, use `npm install package-name` instead. Review and commit both `package.json` and `package-lock.json` when they change. Do not commit `node_modules` or generated `.next` output.

### Development server

```bash
npm run dev
```

Open the local URL printed in the terminal, normally `http://localhost:3000`. Locale pages include `/en/home`, `/fr/home`, and `/de/home`. The root URL redirects to the appropriate homepage.

The server watches source changes. Press **Ctrl + C** in its terminal to stop it.

Use another port if needed:

```bash
npm run dev -- --port 3001
```

The `--` forwards the following options to Next.js. A port conflict means another process is already using the chosen port; stop that server or choose another port.

### Local production preview

Stop the development server first, then run:

```bash
npm run build
npm run start
```

Run `start` only after a successful build. It serves the compiled application without development hot reload. Rebuild after source changes when testing this way.

These commands run the website locally. Publishing depends on the hosting service and deployment configuration; a local build does not publish the site or configure its domain.

## 4. Validate changes

**Working directory: `application/web`.**

Run these before merging a code feature:

```bash
npx tsc --noEmit
npm run lint
npm run check:i18n
npm run build
```

| Command | Purpose | Successful result |
|---|---|---|
| `npx tsc --noEmit` | Type-check TypeScript without emitting JavaScript | Usually no output; exit code 0 |
| `npm run lint` | Check source against ESLint rules | No errors; review any warnings |
| `npm run check:i18n` | Check matching translation keys, nonempty values, and ICU messages | Reports valid messages for each locale |
| `npm run build` | Compile and validate a production build | Build completes and prints the route summary |

Run each command to completion and resolve failures before continuing. A successful build is not a substitute for trying the UI in a browser.

### Routing and build troubleshooting

After moving routes, generated route types can temporarily refer to old files. Stop the server and regenerate them:

```bash
npx next typegen
npx tsc --noEmit
```

Restart the development server if an old `.next/dev/types` validator still refers to removed routes. Generated `.next` files should not be edited as source code.

In the agent's restricted environment, Turbopack has sometimes failed because its CSS worker cannot bind a local port. To check the production code with the alternate bundler:

```bash
npm run build -- --webpack
```

Record which build passed. A webpack success does not mean the default Turbopack build passed; inspect other build errors rather than assuming they have the same cause.

### Browser checks for this project

Test English, French, and German at desktop, tablet, and phone widths. Include Safari/WebKit and Chromium when changing navigation: the language dropdown previously exposed a Safari-specific focus bug.

Verify language switching, active language/page highlights, locale-aware links, refresh persistence, and sidebar behavior while resizing. Current sidebar boundaries are desktop ≥1024px, tablet 768–1023px, and phone <768px. Account/cart controls remain disabled until their feature flags are enabled.

## 5. Understand the Git workflow

Changes move through these stages:

```text
Edit files → Stage selected changes → Commit locally → Push to remote
```

| Term | Meaning |
|---|---|
| Working tree | The files you are editing |
| Staging area / index | The exact changes prepared for the next commit |
| Commit | A saved local snapshot of staged changes |
| Branch | A named line of commits, such as `feature/i18n` |
| `HEAD` | Usually the latest commit on your current branch |
| `origin` | The conventional name of the configured remote repository |
| Upstream | The remote branch your local branch tracks |
| `develop` | The integration branch used by this project's workflow |
| `main` | The release branch; promotion/deployment is a separate step |

`git add` prepares a commit, `git commit` saves it locally, and `git push` uploads commits. A commit includes staged content; saving more edits afterward does not automatically add them to that commit.

## 6. Inspect branches and changes

**Working directory for Git examples: repository root.**

| Command | What it shows |
|---|---|
| `git branch --show-current` | Current branch name |
| `git branch` | Local branches; `*` marks the current one |
| `git branch -a` | Local branches and remote-tracking branches |
| `git status` | Staged, unstaged, untracked files and merge state |
| `git status -sb` | Compact status with branch/tracking information |
| `git diff` | Unstaged changes in tracked files |
| `git diff --stat` | Summary of unstaged tracked-file changes |
| `git diff --cached` | The actual staged patch for the next commit |
| `git diff --cached --stat` | Staged change totals |
| `git diff --cached --name-status` | Staged paths marked added, modified, deleted, or renamed |
| `git diff --check` | Whitespace problems/conflict markers in unstaged changes |
| `git diff --cached --check` | The same check for staged changes |
| `git log --oneline --graph --decorate -15` | Recent history and branch/merge relationships |
| `git remote -v` | Configured fetch/push destinations |

`git diff` and `git diff --stat` do not show the contents of new untracked files. Use `git status` to find them and open them in the editor; after staging, `git diff --cached` includes their contents.

In short status, the two columns describe index and working-tree changes. `M ` means staged modification, ` M` means unstaged modification, `MM` means both, and `??` means untracked. “Working tree clean” means there are no pending file changes; it does not by itself prove that every commit has been pushed.

To refresh your view of remote branches without merging:

```bash
git fetch origin
git status -sb
```

## 7. Stage the changes you want to commit

Choose **one** staging approach for the work you intend to include, then review the staged diff.

### Selected project paths

From the repository root:

```bash
git add application/web docs/requirements.md docs/dev_steps.md
```

This stages changes in the web application and those two documentation files. Include other edited documents explicitly when they belong in the same commit:

```bash
git add docs/development-setup.md docs/architecture.md
```

For the architecture file alone, from `application/web`:

```bash
git add ../../docs/architecture.md
```

### All changes, or part of a file

| Command | Scope |
|---|---|
| `git add -A` | All additions, modifications, and deletions across the repository, even from a subdirectory |
| `git add -A :/` | Explicitly selects the repository root and stages all its changes |
| `git add -A .` | Only the current directory and its descendants |
| `git add -p` | Interactively choose portions of tracked-file changes |

Use either `git add -A` **or** `git add -A :/`; do not type the word `or` into the command. Broad staging can include unrelated edits. See the [git add reference](https://git-scm.com/docs/git-add).

Review what will enter the commit:

```bash
git diff --cached --stat
git diff --cached --name-status
git diff --cached
git status
```

A route migration can legitimately show deleted old paths and added locale paths. Review the actual content; Git may display them as renames when their content is sufficiently similar.

### Unstage without discarding edits

```bash
git restore --staged docs/requirements.md
```

This removes that path from the next commit but keeps your file edits. To unstage everything across the repository, use `git restore --staged :/`. [git restore documentation](https://git-scm.com/docs/git-restore)

## 8. Commit and push a feature

Check the branch before committing. This example is for the i18n feature:

```bash
git branch --show-current
git status
git diff --stat
```

If you are on a different branch, do not blindly create the i18n commit there. Review where the changes belong first.

After validation and staging:

```bash
git diff --cached --stat
git diff --cached
git commit -m "feat(i18n): add multilingual support for EN FR DE"
git push -u origin feature/i18n
```

`-m` supplies the commit message without opening an editor. `-u` establishes the upstream branch; later pushes from that branch can normally use `git push`. The explicit branch in the first push must match the feature you mean to publish. See the [git push reference](https://git-scm.com/docs/git-push).

Example messages for different changes:

```text
feat(navigation): implement responsive sidebar modes
feat(navigation): finalize responsive sidebar and reserve account/cart controls
fix(i18n): preserve Safari language selection clicks
docs: clarify development setup and Git workflow
```

Choose the message matching the changes you staged. These examples are not instructions to create all four commits.

If Git reports “nothing to commit,” inspect `git status`; the changes may already be committed or nothing may be staged. If an earlier command failed, resolve it before attempting the push.

## 9. Merge a finished feature into develop

First commit and push the feature, run its checks, and make sure `git status` is clean. A merge brings the named branch **into your current branch**.

For a repository that permits direct merges, an i18n example is:

```bash
git switch develop
git pull --ff-only origin develop
git merge --no-ff feature/i18n
```

- `switch develop` selects the receiving branch.
- `pull --ff-only` fetches and updates `develop` only when it can advance without creating a merge. If histories diverged, stop and inspect them. [git pull reference](https://git-scm.com/docs/git-pull)
- `merge --no-ff` records a merge commit even when a fast-forward would be possible. It merges the **local** `feature/i18n` branch; ensure it contains the intended work. It normally opens a message editor unless the branch is already integrated. [git merge reference](https://git-scm.com/docs/git-merge)

Finish the editor or resolve conflicts as described below. Then validate the combined result from `application/web` using Section 4. Return to the root and publish only after the checks pass:

```bash
git status
git log --oneline --graph --decorate -8
git push origin develop
```

For the navigation feature, substitute `feature/global-navigation` in the merge command. If the hosting service requires pull requests or protects `develop`, push the feature and open a pull request targeting `develop` instead of bypassing that process. This guide does not define an automatic deployment or release to `main`.

To supply the merge message directly and avoid opening Vim, use this **instead of** the earlier merge command:

```bash
git merge --no-ff feature/i18n -m "Merge feature/i18n into develop"
```

## 10. Finish a merge message in Vim

Seeing a merge message editor is normal. Lines beginning with `#` are comments, not part of the saved commit message.

### Save the message and complete the commit

1. If editing the message, press `i` to enter INSERT mode and type your text. Keeping Git's suggested message is also fine.
2. Press **Esc** to leave INSERT mode.
3. Type **`:wq`**.
4. Press **Enter**.

`:wq` writes the message and quits. Git can then create the merge commit. Run `git status` afterward before pushing.

### Cancel the editor step

Press **Esc**, type **`:cq`**, and press **Enter**. This exits Vim with an error so Git does not complete the commit. Inspect `git status` afterward; the merge may still be in progress. Use `git merge --abort` if you want to abandon that in-progress merge.

Do not rely on `:q!` to cancel a Git commit: it discards editor changes but exits successfully, so Git may still use the existing message.

### Optional: use VS Code as the Git editor

From the repository root, configure only this repository:

```bash
git config core.editor "code --wait"
```

The `code` command must be available in your terminal. In VS Code, the Command Palette's **Shell Command: Install 'code' command in PATH** can set it up. `--wait` tells Git to wait until you close the message file's editor tab. Save the message, then close that tab to continue the commit.

## 11. Start the next feature branch

Start a new feature from clean, updated `develop`, after the preceding work has been integrated:

```bash
git switch develop
git pull --ff-only origin develop
git switch -c feature/global-footer
git push -u origin feature/global-footer
```

`switch -c` creates and selects the new branch from the current commit. The first push publishes the branch and sets its upstream, even if you have not made a new feature commit yet.

If the branch already exists locally, use `git switch feature/global-footer` instead of `-c`. Confirm with `git branch --show-current` and `git status` before editing.

## 12. Resolve conflicts and recover from mistakes

### Merge conflicts

If a merge stops with conflicts:

1. Run `git status` to list conflicted paths.
2. Open each file and reconcile both changes. Remove conflict markers such as `<<<<<<<`, `=======`, and `>>>>>>>`; keep the intended combined content.
3. Stage only the resolved paths. For example, if this file conflicted:

   ```bash
   git add docs/requirements.md
   ```

4. Run the relevant checks and inspect `git diff --cached`.
5. Finish the merge:

   ```bash
   git merge --continue
   ```

6. Complete the message editor, check `git status`, then push when ready.

To abandon an **unfinished** merge, use `git merge --abort`. Starting with a clean working tree helps Git restore the pre-merge state; preexisting uncommitted changes can make recovery harder. This command does not undo a completed merge. See the [merge conflict and abort guidance](https://git-scm.com/docs/git-merge).

### Temporarily save unfinished work

When you need a clean tree without creating a commit:

```bash
git stash push -u -m "WIP before switching branches"
git stash list
```

`-u` includes untracked files; ignored files are excluded. Later, switch back to the branch where the work belongs and run:

```bash
git stash apply
git status
```

`apply` restores the most recent stash and keeps its saved entry. Resolve any conflicts and verify the restored work before removing the entry with `git stash drop`. Stashes are local and are not uploaded by a normal push. [git stash documentation](https://git-scm.com/docs/git-stash)

### Discarding file edits is different from unstaging

`git restore --staged path` keeps your edits. In contrast, **`git restore -- path` discards unstaged edits to a tracked file**, replacing them with its staged version (or the last commit when nothing is staged). Review `git diff -- path` before choosing to discard work. It does not delete untracked files.

Avoid using `git reset --hard`, `git clean -fd`, or force-push commands as routine troubleshooting; they can remove work or rewrite shared history. For a committed mistake, inspect `git show` and the history first; `git revert` can create a new undo commit, but reverting a merge needs extra care and is not the same as aborting it.

### A push is rejected

A rejection can mean remote history changed, authentication failed, or the branch is protected. Read the error. Start by inspecting:

```bash
git fetch origin
git status -sb
git log --oneline --graph --decorate --all -15
```

Fetching does not merge anything. Resolve the actual cause rather than force-pushing or repeating unrelated commands.

## 13. Find and update website text

| File or directory | Responsibility |
|---|---|
| `application/web/messages/en.json` | English text |
| `application/web/messages/fr.json` | French text |
| `application/web/messages/de.json` | German text |
| `application/web/src/app/[locale]/` | Pages and layouts for each supported locale |
| `application/web/src/components/` | Reusable UI that reads translation keys |
| `application/web/src/i18n/` | Locale routing, navigation helpers, and message loading |
| `application/web/src/config/features.ts` | Account/cart activation flags |
| `application/web/src/config/theme-default.ts` | Centralized design tokens |

Change a translation **value** to change displayed text. Add keys in all three languages and reference them in a component before expecting new text to appear. Remove a key only after removing its uses. The page folders inside `[locale]` remain necessary; old empty folders outside `[locale]` do not provide routes.

Use VS Code search (**Cmd + Shift + F**) to find a word or a key. With ripgrep installed, from the repository root:

```bash
rg -n 'Hero|title' application/web/messages application/web/src
```

After translation edits, run `npm run check:i18n` from `application/web` and preview all affected languages.

## 14. Daily reference

Use the appropriate directory before running each group. Stop if a command fails; review the error before continuing.

| Task | Command(s) |
|---|---|
| Confirm location and branch | `pwd`, `git branch --show-current` |
| Start development, in `application/web` | `npm run dev` |
| Inspect pending work, from repository root | `git status`, `git diff --stat`, `git diff` |
| Stage chosen work | `git add application/web docs/requirements.md docs/dev_steps.md` |
| Review the next commit | `git diff --cached --stat`, `git diff --cached` |
| Save locally | `git commit -m "describe the change"` |
| Upload after upstream is set | `git push` |
| Update clean `develop` | `git switch develop`, then `git pull --ff-only origin develop` |
| Integrate a finished feature | `git merge --no-ff feature/i18n`, finish message, validate, then `git push origin develop` |
| Begin the next feature | From updated `develop`: `git switch -c feature/global-footer` |
| Get detailed command help | `git help add`, `git help merge`, `npm help ci` |

The commands in a table cell are separate steps, not a comma-separated shell command. Use the full sections above when you need the prerequisites, explanations, or recovery steps.
