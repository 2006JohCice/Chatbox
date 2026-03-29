Luồng 
backend/
│
├── src/
│   ├── config/            # cấu hình
│   │   └── db.js
│   │
│   ├── controllers/       # xử lý logic
│   │   ├── authController.js
│   │   └── messageController.js
│   │
│   ├── models/            # schema database
│   │   ├── User.js
│   │   └── Message.js
│   │
│   ├── router/            # API routes
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
│   └── server.js          # chạy server
│
├── package.json
└── .env


frontend/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/            # ảnh, icon
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
│   ├── hooks/             # custom hooks
│   │   └── useSocket.js
│   │
│   ├── context/           # global state
│   │   └── ChatContext.js
│   │
│   ├── App.js
│   ├── index.js
│   └── App.css
│
├── package.json
└── .gitignore