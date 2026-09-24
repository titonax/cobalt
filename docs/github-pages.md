# GitHub Pages test deployment

This fork can build the SvelteKit frontend as a GitHub Pages project site.

Expected URL after Pages is enabled and the workflow is deployed:

```
https://titonax.github.io/cobalt/
```

## Workflow behavior

The `Build and deploy web to Pages` workflow follows the same pattern used by the UEFI Editor project:

- every pull request targeting `main` builds and validates the frontend;
- pull requests do not deploy;
- running the workflow manually from `main` builds and deploys the current production branch to GitHub Pages.

## One-time GitHub setting

GitHub Pages must be enabled once in the repository:

`Settings -> Pages -> Build and deployment -> Source -> GitHub Actions`

GitHub requires this repository-level setting before `deploy-pages` can publish.

## API configuration

GitHub Pages only hosts the static frontend. cobalt's Node/Express/FFmpeg API must run elsewhere.

The Pages workflow reads an optional repository variable named:

```
WEB_DEFAULT_API
```

Set it to the public URL of a self-hosted cobalt API for end-to-end tests.

If the variable is not set, the build uses the reserved non-routable URL:

```
https://api.example.invalid/
```

This keeps UI builds independent from the upstream hosted API. The frontend already supports entering a custom processing instance from its settings.

## Project-path support

GitHub Pages serves this repository below `/cobalt/`, not at the domain root. The fork therefore:

- sets SvelteKit's base path from `WEB_BASE_PATH`;
- resolves libav assets below that base path;
- uses relative PWA manifest URLs.

Normal root-domain deployments continue to work because `WEB_BASE_PATH` defaults to an empty string.
