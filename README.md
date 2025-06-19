# 🛍️ Fashnior - E-commerce Web Application

**Fashnior** is a modern, fully-featured fashion e-commerce web application built using the **MERN** stack. It provides a seamless online shopping experience with features like user authentication, product browsing, dynamic cart updates, online payments, and admin product management.

🔗 **Live App**: [https://fashnior.vercel.app](https://fashnior.vercel.app)  
🔐 **Admin Panel**: [https://fashnior-admin-app.vercel.app](https://fashnior-admin-app.vercel.app)

---

## ✨ Features

### 👤 User Side
- Browse and filter fashion products by category
- User registration and login with JWT-based authentication
- Dynamic cart and quantity updates
- Place orders with **Cash on Delivery** or **Razorpay** payments
- View and manage order history

### 🛠️ Admin Side
- Secure admin login
- Dashboard to manage products, categories, users, and orders
- Add, update, and delete products
- Update order statuses

---

## 🧰 Tech Stack

| Area        | Tech Used                             |
|-------------|----------------------------------------|
| Frontend    | React.js, Redux Toolkit, Tailwind CSS |
| Backend     | Node.js, Express.js                   |
| Database    | MongoDB with Mongoose ODM             |
| Auth        | JWT (JSON Web Tokens)                 |
| Payments    | Razorpay                              |
| Deployment  | Vercel (Frontend), Render (Backend)   |

---

## 🗂️ Folder Structure

fashnior-ecommerce/
├─ client/                      - User-facing frontend (React)
│  ├─ public/                   - Static files
│  └─ src/
│     ├─ assets/                - Images, icons, etc.
│     ├─ components/            - Reusable UI components
│     ├─ pages/                 - Route-level pages (Home, Cart, Product)
│     ├─ redux/                 - Redux store and slices
│     ├─ services/              - Axios API handlers
│     ├─ utils/                 - Helper functions
│     ├─ App.js                 - Root App component
│     └─ main.jsx               - React entry point

├─ admin/                       - Admin panel frontend (React)
│  ├─ public/                   - Static admin files
│  └─ src/
│     ├─ components/            - Admin UI components
│     ├─ pages/                 - Dashboard, Orders, Products
│     ├─ redux/                 - Admin store setup
│     ├─ services/              - Admin API functions
│     ├─ utils/                 - Helpers
│     ├─ App.js                 - Admin App root
│     └─ main.jsx               - Entry file

├─ server/                      - Backend (Node + Express)
│  ├─ config/                   - DB & payment config
│  ├─ controllers/              - Route handlers
│  ├─ middleware/               - Auth, error middleware
│  ├─ models/                   - Mongoose models
│  ├─ routes/                   - API routes
│  ├─ utils/                    - JWT, validators
│  ├─ .env                      - Environment variables
│  └─ index.js                  - App entry point

├─ .gitignore                   - Git ignore rules
├─ README.md                    - Project documentation
└─ package.json                 - Project metadata






## 🚀 Getting Started Locally

### 1. Clone the repository


git clone https://github.com/yourusername/fashnior-ecommerce.git
cd fashnior-ecommerce


## 2. Setup Backend

cd server
npm install

Create a .env file and add the following:

MONGO_URI=your_mongo_uri

JWT_SECRET=your_secret

ADMIN_EMAIL=your_admin_email

ADMIN_PASS=your_admin_password

RAZORPAY_KEY=your_key

RAZORPAY_SECRET=your_secret

npm run dev

## 3. Setup Frontend
cd ../client
npm install
npm start

## ⚙️ Environment Variables
Make sure to configure the following variables in your .env file:

MONGO_URI=
JWT_SECRET=
ADMIN_EMAIL=
ADMIN_PASS=
RAZORPAY_KEY=
RAZORPAY_SECRET=

## Future Improvements
Product reviews and ratings

Wishlist feature

Email notifications

SEO and performance optimizations

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## 📄 License
This project is open-source and available under the MIT License.

## 📬 Contact
Built by Duvvuri Sainath
📧 Email: sainathduvvuri03@gmail.com
🔗 LinkedIn: [https://www.linkedin.com/in/sainath-duvvuri-46ab61292/](https://www.linkedin.com/in/sainath-duvvuri-46ab61292/)
