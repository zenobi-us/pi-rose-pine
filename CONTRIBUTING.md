# Contributing to pi-rose-pine

Thank you for your interest in contributing to pi-rose-pine! This document provides guidelines and instructions for contributing to the project.

## Prerequisites

This project uses [mise](https://mise.jdx.dev/) for tool version management and task automation. Make sure you have mise installed:

```bash
# Install mise (if not already installed)
curl https://mise.run | sh

# Or via package manager
# macOS: brew install mise
# Linux: See https://mise.jdx.dev/getting-started.html
```

## Getting Started

### 1. Fork and Clone

```bash
# Fork the repository on GitHub, then clone your fork
git clone git@github.com:YOUR_USERNAME/pi-rose-pine.git
cd pi-rose-pine
```

### 2. Setup Development Environment

```bash
# Install tools and dependencies
mise run setup
```

This will:
- Install required tools (Bun, Node.js, etc.) via mise
- Install git hooks via `hk` (if not in a git worktree)
- Install Node dependencies via `bun install`

### 3. Verify Your Setup

```bash
# Run all verification checks
mise run check
```

This runs:
- `mise run setup` - Ensures environment is properly configured
- `mise run lint` - Lints code with ESLint
- `mise run test` - Runs test suite with Vitest
- `mise run build` - Builds the project

All checks must pass before submitting a pull request.

## Development Workflow

### Available Tasks

View all available tasks:
```bash
mise tasks ls
```

Common tasks:

```bash
# Development
mise run dev          # Build with watch mode and sourcemaps
mise run watch        # Watch mode for development

# Code Quality
mise run lint         # Run ESLint
mise run lint:fix     # Run ESLint with auto-fix
mise run format       # Format code with Prettier
mise run typecheck    # Type check without emitting files

# Testing
mise run test         # Run tests

# Building
mise run build        # Build the project

# Pre-publish
mise run check        # Run all verification checks
mise run prepare      # Prepare for publishing
```

### Code Style

This project follows strict code style guidelines:

- **TypeScript**: Strict mode enabled
- **Formatting**: Prettier with single quotes, 100 char line width
- **Linting**: ESLint with TypeScript rules
- **Naming Conventions**:
  - Classes: PascalCase
  - Methods/properties: camelCase
  - Avoid deeply nested structures (NeverNesters principle)

See [AGENTS.md](AGENTS.md) for complete code style guidelines.

### Making Changes

1. **Create a feature branch**:
   ```bash
   git checkout -b feat/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes**:
   - Write clean, maintainable code
   - Follow existing code style
   - Add tests for new functionality
   - Update documentation as needed

3. **Test your changes**:
   ```bash
   mise run check
   ```

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add new theme variant"
   ```

   Follow [Conventional Commits](https://www.conventionalcommits.org/) format:
   - `feat:` - New features
   - `fix:` - Bug fixes
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `refactor:` - Code refactoring
   - `test:` - Test additions or updates
   - `chore:` - Maintenance tasks

5. **Push and create a Pull Request**:
   ```bash
   git push origin feat/your-feature-name
   ```

   Then create a Pull Request on GitHub.

## Theme Development

When contributing new theme variants or modifications:

1. **Theme Structure**: Themes are defined in `src/themes/` directory
2. **Color Palette**: Follow [Rose Pine style guide](https://rosepinetheme.com/palette)
3. **Variants**: Ensure consistency across Main, Moon, and Dawn variants
4. **Testing**: Test themes in various lighting conditions and with different content types

## Pull Request Guidelines

- **One feature per PR**: Keep changes focused and atomic
- **Pass all checks**: Ensure `mise run check` passes
- **Update documentation**: Include relevant documentation updates
- **Add tests**: Include tests for new functionality
- **Descriptive title**: Use conventional commit format
- **Clear description**: Explain what changes and why

## Getting Help

- **Issues**: Check [existing issues](https://github.com/zenobi-us/pi-rose-pine/issues) or create a new one
- **Discussions**: Use GitHub Discussions for questions and ideas
- **Documentation**: See [README.md](README.md) for project overview

## Code Review Process

1. All PRs require review before merging
2. CI checks must pass (lint, test, build)
3. At least one approval required
4. Maintainers may request changes or clarification
5. Once approved, maintainers will merge your PR

## License

By contributing to pi-rose-pine, you agree that your contributions will be licensed under the MIT License.

## Thank You!

Your contributions help make pi-rose-pine better for everyone. We appreciate your time and effort! 🌹✨
