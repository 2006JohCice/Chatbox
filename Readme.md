```bash
Luồng 
backend/
│
├── src/
│   ├── config/            # cấu hình
│   │   └── db.js
│   │
│   ├── controllers/*       # xử lý logic
│   │   ├── authController.js
│   │   └── messageController.js
│   │
│   ├── models/            # schema database
│   │   ├── User.js
│   │   └── Message.js
│   │
│   ├── router/*           # API routes
│   │   ├── authRoutes.js
│   │   └── messageRoutes.js
│   │
│   ├── sockets/           # realtime
│   │   └── socket.js
│   │
│   ├── middleware/        # middlewares
│   │   └── authMiddleware.js
│   │
│   ├── utils/             # helper
│   │   └── generateToken.js
│   │
│   ├── app.js             # config express
│   └── index.js          # chạy server
│
├── package.json
└── .env


frontend/
│
├── public/*
│   └── index.html
│
├── src/
│   ├── css/            # css
│   │
│   ├── components/        # component nhỏ
│   │   ├── ChatBox.jsx
│   │   ├── Message.jsx
│   │   ├── Input.jsx
│   │   └── Navbar.jsx
│   │
│   ├── pages/             # các trang
│   │   ├── Home.jsx
│   │   ├── Chat.jsx
│   │   └── Login
│   │
│   ├── socket/            # kết nối socket
│   │   └── socket.js
│   │
│   ├── services/          # gọi API
│   │   └── api.js
│   │
│   ├── hooks/             # custom hooks not 
│   │   └── useSocket.js
│   │
│   ├── context/           # global state not
│   │   └── ChatContext.js
│   │
│   ├── App.js
│   ├── index.js
│   └── App.css
│
├── package.json
└── .gitignore 
```
