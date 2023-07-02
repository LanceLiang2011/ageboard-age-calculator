# Frontend Mentor - Age Calculator

## Welcome! 👋

This is an implementation of the Age Calculator coding challenge.

## Challenge

This app calculates and displays the age of a user based on the birth date they input. The age is displayed in years, months, and days.

## How to use

The main interface of the application consists of an input form and an AgeBoard component that displays the calculated age.

To use this app:

1. Enter your birth date into the input form.
2. Click the "Calculate" button.
3. The app will calculate your age and display it on the AgeBoard.

## Built with

- React.js
- JavaScript (ES6+)
- Styled-Components for styling
- Frontend Mentor for the challenge

## Implementation details

The main functionality of the application is contained in the `MainCard` and `AgeBoard` components.

In the `MainCard` component, the user's birth date is managed by the `birth` state variable, and the calculated age is stored in the `age` state variable. The `valid` state variable is used to handle form validation and display error messages.

The `MainCard` component also contains a `handleSubmit` function that is triggered when the form is submitted. This function validates the user's input, calculates the age if the input is valid, and updates the `age` and `valid` state variables accordingly.

The `AgeBoard` component takes the `age` object as a prop and displays the age in years, months, and days.

The helper functions and constants used in the application are defined in the `util.js` file.

## Project setup

You need to have Node.js and npm installed to run this project.

1. Clone this repo
2. Install all dependencies using 'npm install'
3. Start the development server using 'npm start'
