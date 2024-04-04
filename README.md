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


### Web App Overview

Users can easily manage tasks by creating, editing, viewing, and deleting them. Tasks can be organized in list or grid views. The app's requirements have been fulfilled. Now, I'm working on app improvements.

I decided to use Sveltekit when I noticed that the company's web app uses this technology. It appeared to be a great match for the company's tech stack. In retrospect, it was an excellent decision; I genuinely enjoy using Svelte.

#### Home Page

The Task List component is a central hub within the application designed to manage tasks. It offers a comprehensive set of features aimed at enhancing productivity and organization, catering to various user needs.
The component offers sorting, filtering, and pagination features, allowing users to conveniently manage and navigate through tasks. A search feature enables quick retrieval of specific tasks, while layout customization offers flexible viewing options. Detailed task information is accessible through the Task Details View, and a seamless link to the task author's profile facilitates easy collaboration and communication.

<img width="1440" alt="Screenshot 2024-04-04 at 2 07 46 AM" src="https://github.com/Emmanuel-Melon/tasky/assets/21015204/6bb3f0ad-a5eb-4fb1-95c8-030fe7d5bd28">

#### Create/ Edit Task View

<img width="1440" alt="Screenshot 2024-04-04 at 2 15 46 AM" src="https://github.com/Emmanuel-Melon/tasky/assets/21015204/5bb7ad90-9b67-4961-9499-cf4b15f290b4">

#### Profile Settings Page

A settings page is available for users to manage their personal information and preferences. Users also have access to a profile page to track their activities and view statistics related to task management.

<img width="1440" alt="Screenshot 2024-04-04 at 2 17 12 AM" src="https://github.com/Emmanuel-Melon/tasky/assets/21015204/7689979b-c607-4d17-ab94-07df8ea8c469">

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
