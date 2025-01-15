# Event Planner Assistant

A multi-page, responsive web application designed to simplify event management. Easily schedule events, track budgets, manage invitations, and more!


## Table of Contents

1. [Features](#features)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Project Structure](#project-structure)
6. [Changelog](#changelog)
7. [Contributing](#contributing)
8. [License](#license)


## Features

- **Multi-Page Layout**: Includes Home, About, and Login pages.
- **Event Management**: Add, view, and delete events dynamically.
- **Search & Sort**: Search for events by title; automatically sorted by date.
- **Local Storage**: Save events data so it persists between sessions.
- **Responsive UI**: Built with Bootstrap for a modern, mobile-friendly design.


## Technologies

- **HTML5, CSS3, JavaScript**
- **Bootstrap 5** for responsive design
- **Font Awesome** for icons
- **Local Storage** for client-side data persistence


## Installation

1. **Clone the repository** or [download the ZIP](../../archive/refs/heads/main.zip):
    ```bash
    git clone https://github.com/marwan-ahmed-23/Event-Planner-Assistant.git
    ```
2. Open `index.html` in your preferred browser.

No additional server is needed since this is a static application.


## Usage

1. **Home Page** (`index.html`):
- Learn about the features.
- View or add events.
2. **About Page** (`about.html`):
- Understand the purpose and future roadmap of the project.
3. **Login Page** (`login.html`):
- A demo login page (no actual authentication yet).

## Project Structure

```plaintext
Event-Planner-Assistant/
├── index.html
├── login.html
├── about.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── assets/
│   ├── hero-image.jpg
│   └── (other images)
├── README.md
└── LICENSE
```


## Changelog

**v2.0 (Major Update)**
- Added multiple pages (About, Login).
- Implemented localStorage to save event data.
- Introduced event searching and date-based sorting.
- Improved UI/UX with Bootstrap 5, including a new navbar and footer.
- Updated README with detailed instructions and new screenshots.

## Contributing

1. Fork the project.
2. **Create a feature branch** (`git checkout -b feature/YourFeature`).
3. **Commit your changes** (`git commit -m 'Add some feature'`).
4. **Push to your branch** (`git push origin feature/YourFeature`).
5. **Open a Pull Request** on GitHub.

## License
This project is licensed under the [MIT LICENSE](LICENSE). 
Feel free to modify and use the code as you like.