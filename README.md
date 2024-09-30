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
### Task Overview

Create a beautiful, interactive, and simple admin dashboard for managing Epicure Kiosks. Focus on the frontend, ensuring the design is ready for future API integration.

### Primary Features
#### 1. Machine Monitoring
- **Display a list of machines** with the ability to view details of each machine.
- **Details for each machine**:
    - Sensor status (e.g., temperature, operational status)
    - Dispensers and their respective quantities
    - Ingredients and their respective quantities
#### 2. Dispenser Management
- **View and edit** the ingredients and quantities in each machine's dispenser.
- **CRUD operations** for ingredients assigned to dispensers:
    - Create
    - Read
    - Update
    - Delete
#### 3. Recipe Management
- **Display a list of recipes** for each machine.
- **CRUD operations** for recipes:
    - Create
    - Read
    - Update
    - Delete
- **Recipe composition**:
    - A list of ingredients with quantities
