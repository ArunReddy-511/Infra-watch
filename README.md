# InfraWatch README

## Project Structure
The InfraWatch infrastructure monitoring application has the following project structure:

```
/infra-watch
├── /src            # Source files
│   ├── /components # React components
│   ├── /hooks      # Custom hooks
│   ├── /utils      # Utility functions
│   ├── /styles     # CSS stylesheets
│   └── index.js    # Main entry point
├── /public         # Static files
│   ├── index.html   # Main HTML file
���   └── favicon.ico  # Favicon
├── package.json     # Project metadata and dependencies
└── README.md        # Project documentation
```

## Components
- **Dashboard**: Displays the overall infrastructure status.
- **Metrics**: Shows detailed metrics of infrastructure components.
- **Alerts**: Handles alert notifications based on defined thresholds.

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/ArunReddy-511/Infra-watch.git
   cd Infra-watch
   ```
2. **Checkout to the branch**:
   ```bash
   git checkout refactor/structured-build
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Run the application**:
   ```bash
   npm start
   ```

## File Descriptions
- **index.js**: The main entry point for the application.
- **package.json**: Lists the project's dependencies, scripts, and metadata.
- **public/index.html**: The single HTML file where the React app is rendered.

## Contributing
Feel free to fork the repository and submit pull requests for any improvements or feature additions!