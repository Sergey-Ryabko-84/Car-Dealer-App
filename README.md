# Car Dealer App

This project is a web application that allows users to view car models based on the make and year. The application fetches data from a vehicle API and displays the list of models for a selected make and year. It uses Next.js, Tailwind CSS, and React for building a responsive and interactive UI.

## Live Demo 🌐

You can visit the live application at:  
[https://vehicle-models-app.netlify.app/](https://vehicle-models-app.netlify.app/)

## Features

- Display models based on selected make and year.
- Fetches data from an API using `fetch` and `generateStaticParams`.
- Supports light and dark themes using Tailwind CSS.
- Includes loading and error handling states.
- Responsive design for various screen sizes.
- Button for navigation back to the homepage.

## Tech Stack

- **Frontend:** React, Next.js, Tailwind CSS
- **API:** Fetch data from a vehicle API
- **Styling:** Tailwind CSS for responsive design
- **State Management:** React hooks
- **Routing:** Next.js dynamic routes
- **Data Fetching:** Next.js `fetch`, `generateStaticParams`

## Installation

Follow these steps to get your development environment set up:

1. Clone the repository:

   ```bash
   git clone https://github.com/Sergey-Ryabko-84/car-dealer-app
   cd car-dealer-app

   ```

2. Install the required dependencies:

   ```bash
   npm install

   ```

3. Set up your environment variables:

   Create a .env.local file at the root of the project.
   Add the following environment variable: API_URL=your_api_url_here

4. Run the application in development mode:

   ```bash
   npm run dev

   ```

   This will start the development server at http://localhost:3000.

5. To build the application for production:

   ```bash
   npm run build

   ```

   After building, you can start the application in production mode:

   ```bash
   npm run start

   ```

## Usage

### Dynamic Routes

The application supports dynamic routes for displaying vehicle models based on the make and year. The route pattern is:

/result/[makeId]/[year]
[makeId]: The unique identifier for the vehicle make.
[year]: The year of the vehicle model.
The app will fetch and display the models corresponding to the selected make and year.

### Static Paths

The generateStaticParams function is used to pre-render paths for all makes and years dynamically, allowing the application to statically generate pages for each combination of make and year.

### Light and Dark Theme

The application supports both light and dark themes. Tailwind CSS is configured to handle theme switching based on user preferences.
