🛒 Clothing Brand E-Commerce Web App (MERN Stack)

A fully functional e-commerce web application built using the MERN stack.
This project allows users to browse clothing items, apply filters, manage their cart, place mock orders, and receive an order confirmation email.

This assignment focuses on backend quality, API design, authentication, and smooth full-stack integration.


---

🚀 Features

🔐 User Authentication

Register & login with secure password hashing (bcrypt)

JWT authentication using HTTP-only cookies

Protected routes for cart & orders


👕 Product Management

MongoDB product catalog (20+ seeded items)

Product details: name, description, category, sizes, price, image, stock

Product detail page API


🔍 Search, Filters & Pagination

Search by name/description

Filters:

Category (Men/Women/Kids)

Size (S/M/L/XL)

Price range


Pagination support (?page=1&limit=10)

Filters work together smoothly


🛒 Shopping Cart

Add, update quantity, remove items

Cart persists per user

Guest cart saved in localStorage

Cart sync after login


🧾 Checkout & Orders

Mock checkout (no real payment)

Order stored in MongoDB:

Purchased items

Selected sizes & quantities

Total price

Order date


Cart auto-clears after order


📧 Order Confirmation Email

Nodemailer integration

Email includes:

Order ID

Date

Product summary

Total amount

Thank-you message




---

🛠 Tech Stack

Frontend

React.js (CRA or Vite)

React Router v6

Context API for Auth + Cart

Axios for API calls


Backend

Node.js + Express.js

MongoDB + Mongoose

JWT, bcrypt, cookie-parser

Nodemailer for sending emails


Tools

Postman / Thunder Client

MongoDB Compass

Cloudinary / Unsplash Images



---

📂 Folder Structure

clothing-ecommerce/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── seedProducts.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── index.css
│   └── package.json
│
└── README.md


---

⚙ Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/your-username/clothing-ecommerce.git
cd clothing-ecommerce


---

🗄 Backend Setup

cd backend
npm install

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password


---

Run Backend

npm run dev


---

Seed Database with Products

node seedProducts.js


---

🎨 Frontend Setup

cd frontend
npm install
npm start


---

📌 API Endpoints Summary

🔐 Auth

Method	Endpoint	Description

POST	/api/auth/register	Create new user
POST	/api/auth/login	Login & set JWT cookie
POST	/api/auth/logout	Clear cookie



---

🛍 Products

Method	Endpoint	Description

GET	/api/products	Fetch all products (search + filters + pagination)
GET	/api/products/:id	Product detail



---

🛒 Cart

Method	Endpoint	Description

GET	/api/cart	Get user cart
POST	/api/cart/add	Add item
PUT	/api/cart/update	Update quantity
DELETE	/api/cart/remove	Remove from cart



---

📦 Orders

Method	Endpoint	Description

POST	/api/orders	Place order
GET	/api/orders/:id	Order detail



---

✉ Email Format (Example)

After placing an order, the user receives an email:

Order Confirmation - #ORDER_ID

Thank you for shopping with us!

Order Details:
- Product List (name, size, qty, price)
- Total Amount
- Order Date

We appreciate your purchase ❤


---

🧪 Testing Checklist

[ ] Register → Login → Access protected routes

[ ] Add products → Update → Remove from cart

[ ] Apply filters + search together

[ ] Pagination works correctly

[ ] Checkout creates MongoDB order

[ ] Confirmation email received

[ ] Guest cart → login → syncs properly



---

🌐 Deployment (Optional but Good to Add)

Backend

Deploy on:

Render

Railway

Cyclic


Frontend

Deploy on:

Vercel

Netlify


Update axios base URL accordingly.


---

📘 Notes

Minimum 20 products added using seeding script

Focus on backend clean code, middleware, and error handling

Frontend should be simple and functional, not fancy



---

🤝 Acknowledgement

This project is built as part of the Pasovit Backend Developer Assignment.
Created to demonstrate backend architecture, authentication flow, and API quality in a MERN environment.
