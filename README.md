# iNotes - Note Taking Web App

iNotes is a simple note-taking web application built using Node.js, React, and MongoDB Atlas. It offers users the ability to register, log in, and manage their notes efficiently.

## Features

- **User Authentication:** The app allows users to sign up and log in using basic authentication.

- **Note Management:** Users can create, edit, and delete their notes. Deleted notes are moved to the trash bin for potential restoration.

- **Trash Bin:** Deleted notes are stored in the trash bin for easy recovery if needed. Users can also choose to permanently delete notes from the trash bin.

- **Note Restoration:** Users can restore notes from the trash bin to bring them back to their original state.

- **Tags:** The app provides the ability to tag notes, making it easy to organize and categorize them.

- **Logout:** Users can securely log out of their accounts.

## Technology Stack

- **Frontend:** React, HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas

## Getting Started

1. Clone the repository: `git clone https://github.com/your-username/iNotes.git`
2. Install dependencies for both the frontend and backend using `npm install`.
3. Set up your MongoDB Atlas database and replace the connection string in the backend with your database credentials.
4. Start the backend server using `npm start` in the `backend` directory.
5. Start the frontend development server using `npm start` in the `frontend` directory.
6. Access the web app by opening `http://localhost:3000` in your browser.

## Usage

1. Register or log in to your account.
2. Create new notes, edit existing ones, and apply tags.
3. Deleted notes are moved to the trash bin, where they can be restored or permanently deleted.
4. Log out of your account when done.

## Deployment

The app can be accessed using the following URLs:
- [https://inotesss.netlify.app/](https://inotesss.netlify.app/)
- [https://inotebook-neeraj-2525.vercel.app/](https://inotebook-neeraj-2525.vercel.app/)

The frontend can be deployed on Vercel, and the backend can be deployed on platforms like Heroku. Set up environment variables as needed.

## Contributions

Contributions are welcome! Feel free to fork the repository, make improvements, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
