# Tasky

Tasky is a web-based application designed to help users manage their tasks efficiently. Built with a focus on usability and performance, Tasky allows users to create, view, and edit tasks with ease. This project showcases the power of SvelteKit and Turborepo in creating a modern, full-stack application.

## Getting Started

To get started with Tasky, clone the repository and follow the setup instructions provided in the README files within each application and package directory.

## Project Overview

- Task and Task Group Creation: Users can create individual tasks and organize them into task groups or labels for better organization.

- Collaboration: Invite friends to collaborate on tasks, fostering teamwork and productivity.

- Advanced Task Management: Add filtering and sorting options for the task list based on various criteria, such as deadline, to manage tasks more efficiently.

- Search Functionality: Implement a search functionality to quickly find tasks based on the title or description, enhancing the user experience.

- User Registration/Authentication: Secure user accounts with registration and authentication features, ensuring personalized and secure task management.

### Turborepo

I've utilized Turborepo to manage our codebase efficiently. It allows me to organize and maintain our code repositories in a streamlined manner, ensuring smooth development and collaboration. By leveraging Turborepo, I can effectively manage our project's multiple client-side and server-side applications, promoting a unified development environment.

#### Client-Side Applications

All client-side applications are built using SvelteKit, a versatile and efficient framework for building modern web applications. SvelteKit's capabilities enable me to create fast, responsive, and highly interactive user interfaces.

Tasky consists of two client-side applications, each serving a specific purpose:

- Web: Designed for creating and managing tasks.
- Docs: Acts as documentation for the project.

#### Server-Side Applications

In addition to our client-side applications, I have a server-side application that play a crucial role in supporting Tasky's functionality:

- API: A custom backend server built using Express.js. It acts as a middle layer between the client-side applications and the database, providing additional functionalities such as data validation, security checks, and background tasks.

#### Internal Packages

To ensure consistency and code reuse across our applications, I have developed internal packages named @tasky/lib. These packages contain UI components, shared logic, and utilities that are utilized across our various applications. By encapsulating common functionalities and UI elements within these internal packages, I promote code reusability, maintainability, and a consistent user experience throughout our platform.

### Contributing

I welcome contributions from the community. Please read my contributing guidelines before submitting any pull requests.

### License

Tasky is open-source software licensed under the MIT License.

### Contact

For any questions or support, please reach out to me via [email](emmanuelgatwech@gmail.com)
