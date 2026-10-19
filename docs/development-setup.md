# Stephworld Delights — Development Environment

## 1. Node.js Configuration

This project uses Node.js 24 LTS for development stability.

### Check installed versions

```bash
node -v
npm -v
brew list --versions node@24
```

### Install Node.js 24

On macOS with Homebrew:

```bash
brew install node@24
```

### Manual activation

```bash
export PATH="/opt/homebrew/opt/node@24/bin:$PATH"
```

Verify:

```bash
node -v
```

Expected version: `v24.x.x`

## 2. VS Code Configuration

### Global terminal profile

Open:

`Cmd + Shift + P → Preferences: Open User Settings (JSON)`

Add the following configuration:

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
  }
}
```

### Project-specific configuration

File: `.vscode/settings.json`

```json
{
  "terminal.integrated.defaultProfile.osx": "Node 24",
  "terminal.integrated.enablePersistentSessions": false
}
```

The workspace selects the Node 24 terminal profile.

## 3. Node.js Version Declaration

File: `.nvmrc`

```text
24
```

This file declares the preferred Node.js version for compatible version managers.

It does not automatically activate Node.js.

## 4. Verification

Open a new VS Code terminal and execute:

```bash
node -v
which node
```

Expected output:

```text
v24.x.x
/opt/homebrew/opt/node@24/bin/node
```

## 5. Platform Compatibility

The current terminal configuration is specific to macOS with Homebrew installed under `/opt/homebrew`.

Windows and Linux developers must configure their Node.js environments separately.

A Node.js version manager such as fnm can provide cross-platform version management.

## 6. Installation of Next.js

- Install Next.js and React:
```bash
npm install next react react-dom
```

- Install TypeScript and ESLint:
```bash
npm install -D typescript @types/node @types/react @types/react-dom eslint eslint-config-next
```

- Install Tailwind CSS:
```bash
npm install -D tailwindcss @tailwindcss/postcss postcss
```

- Verify:
```bash
npm list next react react-dom typescript tailwindcss
```
## Important: 

* Using:
```bash
npm run dev
```
ist for development. 

* Using:
```bash
npm run start
```
is intended for running a production build.

## Verification

* Verify TypeScript:
```bash
npx tsc --noEmit
```

* Check code quality: 
```bash
npm run lint
```

* Test production build:
```bash
npm run build
```
