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

### Fallback Pages

I've implemented error pages for unexpected issues, designed appealing and informative empty states for scenarios with no content, and created interactive guides and tutorials for effective app navigation. These features enhance the user experience, making it easy to recover from errors, understand empty states, and utilize the app effectively.

<img width="1440" alt="Screenshot 2024-04-04 at 2 35 14 AM" src="https://github.com/Emmanuel-Melon/tasky/assets/21015204/7585425f-89fc-42c3-8e4b-f9a249198f83">


## Getting Started

You can run the app to view the following methods:

### Docker (docker-compose)

To run the app using Docker and docker-compose, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone git@github.com:Emmanuel-Melon/tasky.git
   ```

2. Navigate to the project directory:
   ```bash
   cd tasky
   ```

3. Ensure you have Docker and docker-compose installed on your system.

4. Run the following command to start the application:
   ```bash
   docker-compose up
   ```

5. Once the containers are up and running, you can access the application in your web browser at [http://localhost:3000](http://localhost:3000).

### Node

To run the app using Node.js, follow these steps:

1. Ensure you have Node.js installed on your system. If not, you can install it using Node Version Manager (NVM). Follow the instructions [here](https://github.com/nvm-sh/nvm) to install NVM.

2. Switch to Node.js version 20 using NVM:
   ```bash
   nvm use 20
   ```

3. Install project dependencies:
   ```bash
   yarn
   ```

4. Set up a PostgreSQL database. You can use the PostgreSQL app on Mac [https://postgresapp.com/](https://postgresapp.com/) or a hosted instance such as Neon [https://neon.tech/](https://neon.tech/).

5. Navigate to the server directory:
   ```bash
   cd apps/server
   ```

6. Create a `.env` file by copying the contents of `.env.example`.

7. Initialize Prisma:
   ```bash
   yarn prisma-generate
   ```

8. Go back to the root directory and start the application:
    ```bash
    yarn dev
    ```

11. Access the application in your web browser at [http://localhost:3000](http://localhost:3000).

### Deployed Version (URLs)

The deployed version of the application can be accessed at the following URLs:

- Web App: [https://example.com](https://example.com)
- Documentation: [https://docs.example.com](https://docs.example.com)

## Possible Enhancements

Consider the following enhancements to further improve the application:

### Push Notifications

Implement push notifications to provide real-time updates and notifications to users. Notifications could include reminders for upcoming tasks, notifications for task assignments, and alerts for task updates.

### Collaboration

Enable collaboration features such as inviting friends or team members to collaborate on tasks or projects. Users should be able to share tasks or projects via links, collaborate on task assignments, and communicate within the application.

### Importing and Exporting Content

Implement features to import and export content, allowing users to easily migrate tasks, projects, or data to and from other applications or platforms. Support various file formats for import/export to enhance interoperability with different tools.

### File and Media Uploads

Enhance the application by enabling users to upload files and media directly related to tasks or projects. This could include uploading documents, images, videos, or other relevant files to provide additional context or resources for tasks. Implement features for file management, such as organizing attachments and linking them to tasks.

These enhancements will enrich the user experience, improve collaboration, and make the application more versatile and feature-rich.

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
