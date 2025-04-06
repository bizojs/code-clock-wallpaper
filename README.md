# Wallpaper Engine - Code Clock Wallpaper

A custom wallpaper clock made to look like code for Wallpaper Engine.
Built using [Svelte](https://svelte.dev/) and [Vite](https://vite.dev/).

![preview](/public/preview.png)

## Project Setup

### Prerequisites

- Node.js (v16 or above)
- Package Manager

If you don't have **pnpm** installed, you can install it via npm:

```bash
npm install -g pnpm
```

### Installation
1. Clone the repository:
    ```bash
    git clone <your-repo-url>
    cd <your-project-directory>
    ```
2. Install the dependencies:
    ```bash
    pnpm install
    ```
3. Run the dev server:
    ```bash
    pnpm dev
    ```
    then navigate to [localhost:5173](http://localhost:5173) in your browser


### Building the Project
To build the project for Wallpaper Engine, follow these steps:

1. Run the following command to build the project:
    ```bash
    pnpm build
    ```
2. The built files will be located in the `/dist` directory. This directory will contain the necessary files (`index.html` and other assets) for the wallpaper.

### Wallpaper Testing in Wallpaper Engine
Once you've built the project, you can import and test it in Wallpaper Engine.

**Importing Your Wallpaper:**
1. Open Wallpaper Engine.

2. Open the the **Wallpaper Editor** window, drag the `index.html` file located in the `/dist` folder into the **Create Wallpaper** file dropzone. This will import all files from the `/dist` directory, including the necessary assets and configuration files.

**Testing Your Wallpaper:**
1. Once imported, you should see the wallpaper in the editor.

2. To test the wallpaper, navigate to `File > Apply Wallpaper` within the Wallpaper Engine editor. This will apply the wallpaper to the current wallpaper environment and allow you to see how it behaves.

## Contribution Guidelines
We welcome contributions! If you'd like to contribute to the project, here are some guidelines to follow:

###  Reporting Issues
If you encounter any bugs or have suggestions for improvements, please open an issue on the GitHub Issues page. Be sure to include the following:

- A clear description of the issue or feature request
- Steps to reproduce the bug (if applicable)
- Any relevant error messages or logs

### Contributing Code
If you'd like to contribute code to this project, please follow these steps:

- Fork the repository to your own GitHub account.
- Create a new branch for your feature or bug fix:
    ```bash
    git checkout -b feature/your-feature-name
    ```
- Make your changes to the code.
- Commit your changes with a descriptive commit message:
    ```bash
    git commit -m "Add feature or fix issue"
    ```
- Push your changes to your forked repository:
    ```bash
    git push origin feature/your-feature-name
    ```
- Open a Pull Request (PR) to merge your changes into the main repository.

### Code Style and Best Practices
- Follow the existing code style in the project (e.g. indentation, variable naming).
- Write meaningful commit messages that describe the changes made.
- Test your changes locally before submitting a pull request.

### Adding New Features
When adding new features, make sure to:

- Add any relevant configuration or property options to the `ApplyUserProperties` type located in `src/lib/types.ts`
- Implement changes using best practices (e.g. separating concerns, modularization).
- Test the feature within the Wallpaper Engine editor.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.