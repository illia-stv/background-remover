## Background Remover - Next.js

### Overview

Background Remover is a high-quality, client-side tool for removing backgrounds from images directly in the browser. This Next.js project utilizes the @imgly/background-removal library to execute AI models on the client machine, ensuring user privacy and eliminating server-side processing costs.

### Features

- **Client-Side AI Processing:** Processes images directly in the user's browser using AI models, ensuring privacy and quick results.
- **High-Quality Background Removal:** Maintains the integrity of the foreground while accurately removing the background.
- **Responsive and User-Friendly:** Designed with a clean, intuitive interface that works efficiently across all devices and browsers.
- **Cross-Platform Support:** Works on any device with a modern browser.

## Installation

To set up this project locally, follow these steps:

Clone the Repository:

```bash
git clone https://github.com/illia-stv/background-remover.git
cd background-remover
```

Install Dependencies:

Make sure you have Node.js and npm installed. Then run:

```bash
npm install
```

Run the Development Server:
Start the Next.js development server:

```bash
npm run dev
```
Open your browser and go to http://localhost:3000 to see the application in action.

### Usage
- Upload an Image: Click on the "Upload Image" button to select an image from your device.
- Remove Background: Once the image is uploaded, the background will be removed automatically using the AI model.
- Download the Result: After processing, you can download the image with the background removed.

## License
This project is licensed under the MIT License.
