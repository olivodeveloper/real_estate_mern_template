## Real Estate MERN Template

This is an open-source MERN stack template designed for developing a full-stack real estate website where users can list warehouses for rent and sale. The project is built using Vite, React, SCSS, Express, Prisma, and several other modern web technologies.

## Project Structure

```
depobroker-starter/
├── api/
│   ├── node_modules/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   ├── package.json
│   └── .env
├── client/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── routes/
│   │   └── App.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── .env
├── socket/
│   ├── node_modules/
│   ├── app.js
│   ├── package.json
│   └── .gitignore
└── README.md
```

## Technologies Used

### Client:
- **React**: Front-end library for building user interfaces.
- **Vite**: Next-generation front-end tooling.
- **Zustand**: State management.
- **React Router DOM**: Declarative routing.
- **React Quill**: Rich text editor.
- **Axios**: HTTP client.
- **Socket.IO Client**: WebSockets for real-time communication.
- **Leaflet & React Leaflet**: Interactive maps.
- **Sass**: CSS preprocessor.
- **ESLint**: Linting tool.

### API:
- **Express**: Web framework for Node.js.
- **Prisma**: ORM for database management.
- **JWT (JSON Web Token)**: Authentication.
- **bcrypt**: Password hashing.
- **CORS & Cookie-Parser**: Middleware for handling cross-origin requests and cookies.

### Socket:
- **Socket.IO**: Real-time event-based communication.

## Installation and Setup

### Prerequisites:
- Node.js and npm installed.

### Installation:
1. Clone the repository.
2. Navigate to the `api`, `client`, and `socket` directories and run:
   ```bash
   npm install
   ```
   
### Environment Variables:
- **Client (.env):**
  ```
  VITE_CLOUDINARY_CLOUD_NAME=
  VITE_CLOUDINARY_UPLOAD_PRESET=
  ```
- **API (.env):**
  ```
  DATABASE_URL=""
  JWT_SECRET_KEY=""
  CLIENT_URL=http://localhost:5173
  REACT_APP_C_CLOUDNAME=
  REACT_APP_C_UPLOADPRESET=
  ```

### Running the Application:
- **Start API and Socket Servers:**
  ```bash
  console-ninja node --watch app.js
  ```
- **Start Client (URL will be http://localhost:5173/):**
  ```bash
  npm run dev
  ```

## Usage

Once the setup is complete, navigate to the client URL (`http://localhost:5173/`) to use the application.

## Contribution Guidelines

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## Known Issues

- Implementing security measures and fixing bugs are planned for future updates.
- Certain functionalities may be modified as the project evolves.

## Future Improvements

- Adding security features.
- Bug fixes and performance improvements.
- Modifying and extending the project functions until a viable product is achieved.

## License

This project is totally open source.

## Contact Information

For any questions or support, please contact olivodeveloper@gmail.com.
