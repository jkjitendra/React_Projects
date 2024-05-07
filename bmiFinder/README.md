# BMI Calculator App

## Overview

The BMI Calculator App is a simple, user-friendly web application designed to help users determine their Body Mass Index (BMI). This tool provides immediate feedback on the user's health status based on their weight and height measurements, allowing for quick health assessments.

## Features

* **BMI Calculation:** Calculate BMI using standard formulas.
* **Unit Flexibility:** Allows users to select their preferred units (kg, lb, cm, m, foot) for weight and height.
* **Instant Feedback:** Displays BMI status (Underweight, Normal, Overweight, Obese) based on calculated BMI.
* **Responsive Design:** Ensures a seamless experience across different device sizes.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/bmicalculator.git
   ```
2. Install dependencies:
   ```
   cd bmiFinder
   npm install
   ```
3. Run the app:
   ```
   npm run dev
   ```

The app will be accessible at [http://localhost:5173](https://chatgpt.com/g/g-2fkFE8rbu-dall-e/c/537e24f8-4859-4ad0-ab42-c52bb17f93e0).

## Usage

1. Select the weight unit and enter your weight.
2. Select the height unit and enter your height.
3. Click the "Calculate" button to see your BMI and health status.
4. Use the "Clear" button to reset the inputs.

## Technologies Used

* React.js: A JavaScript library for building user interfaces.
* Vite: A build tool that aims to provide a faster and leaner development experience for modern web projects.

## Scripts

* `npm run dev`: Launches the development server with hot reloading enabled.
* `npm run build`: Compiles and minifies the project for production.
* `npm run lint`: Runs ESLint to catch syntax and style issues.
* `npm run preview`: Serves the built app for testing before deployment.

## Interface Preview

Below is a screenshot of the BMI Calculator App in action:


![BMI Calculator App Interface](./src/assets/image.png)

## Code Explanation

The `App.jsx` file contains the React component for the BMI Calculator App. It uses React hooks such as `useState` to manage state for weight, height, BMI, and messages. The application also handles unit conversions and provides conditional rendering based on the calculated BMI.

## Contact

For inquiries or support, please contact Jitendra Tiwari at [jitendrakumartiwarri849@gmail.com]().
