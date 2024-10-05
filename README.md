# kiodash

## Getting Started.

To get started with kiodash, follow these steps:

Clone the repository:

```bash
git clone git@github.com:2k4sm/kiodash.git
```

1. Navigate to the project directory:
	```bash
	cd ./kiodash
	```

2. Install the dependencies:
	```bash
	npm install
	```

3. Start the development server:
	```bash
	npm run dev
	```

4. Open your browser and navigate to `http://localhost:5173/` to access kiodash.

## Kiosks Admin Dashboard Overview

### Directory Structure
- Overview of the project structure

```bash

    src
    |-- App.css
    |-- App.jsx
    |-- assets
    |   `-- react.svg
    |-- components
    |   |-- common
    |   |   |-- CreateModal.jsx
    |   |   |-- DeleteModal.jsx
    |   |   |-- Modal.jsx
    |   |   `-- UpdateModel.jsx
    |   |-- home
    |   |   `-- Home.jsx
    |   |-- machine
    |   |   |-- Machine.jsx
    |   |   |-- MachineContainer.jsx
    |   |   `-- ViewMachine.jsx
    |   |-- sidebar
    |   |   `-- Sidebar.jsx
    |   `-- topbar
    |       `-- Topbar.jsx
    |-- index.css
    |-- main.jsx
    `-- store
        `-- store.js

```

### Features
- Machine Monitoring
    - List of machines
    - Machine status and details of dispensers.(for now mocked using a dummy websocket echo api and random number.)
- Dispenser Management
    - Add and delete dispensers to machines.
    - incrementing or decrementing item quantity in the dispenser.
- Recipe Management
    - List and manage recipes of each machine(creating and deleting.)
- Modularity
    - To enhance usability and streamline development, React has been employed as the primary framework, complemented by Tailwind CSS for efficient and rapid styling.
    - useState is utilized for managing local state in components, providing a simple and effective way to handle individual component data.
    - For global state management, Zustand has been integrated, offering a lightweight and flexible solution for state sharing across the application.
    - Components from daisy ui have been used to have a uniform design language.
    - Code reusability has been done by creating custom react components.

### Tech Stack
- [React.js](https://react.dev/)
- [JavaScript](https://javascript.info/)
- [TailwindCSS](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)
- [zustand](https://zustand-demo.pmnd.rs/)
- [Vite](https://vite.dev/)
### Contact
Shrinibas Mahanta -> [shrinibasmahanta2004@gmail.com](shrinibasmahanta2004@gmail.com)


