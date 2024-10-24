# Presence Management Application

This is a small application built with **Next.js**, **React**, and **TypeScript** that allows users to mark themselves as present or absent from a location. The application is designed to be displayed on a tablet in a reception area, enabling users to easily check in or out as they enter or leave the building.

## Features

- **User Presence Tracking**: Users can mark themselves as present or absent.
- **User List Display**: A page that displays all users and their current presence status.
- **Responsive Design**: The application is designed to be user-friendly and accessible.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install the dependencies:

   ```bash
   bun install
   ```

3. Run the development server:

   ```bash
   bun run dev
   ```

4. Run the Cypress tests:

   ```bash
   bun run cy:open
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Thought Process

In developing this application, I focused on the following key areas:

- **Component Composition**: The application is structured into reusable components, making it easy to manage and extend.
- **State Management**: I utilized React hooks to manage the application state effectively.
- **Type Safety**: TypeScript was used throughout the application to ensure type safety and reduce runtime errors.

## Suggestions for Improvement

While the current implementation meets the basic requirements, there are several enhancements I would suggest for a more robust application:

1. **Authentication**: Implementing user authentication would enhance security. Instead of using usernames, I would use email addresses for user identification, along with email verification to ensure that users are legitimate.

2. **Database Integration**: Instead of using a mock array or local storage for user storage, integrating a database (e.g., MongoDB, PostgreSQL) would allow for persistent data storage and better scalability.

3. **Automated Testing**: Adding automated tests (unit and integration tests) would ensure the reliability of the application and facilitate future development.

4. **Accessibility Improvements**: Ensuring that the application meets accessibility standards (e.g., ARIA roles, keyboard navigation) would make it usable for a wider audience.

5. **Styling Enhancements**: Improving the UI/UX with better styling and design would enhance the overall user experience.

## Conclusion

This project showcases my ability to compose a React application using Next.js and TypeScript, while also demonstrating my understanding of state management and routing. I hope to further enhance this application with the suggested improvements in the future.

Feel free to explore the code and provide feedback!
