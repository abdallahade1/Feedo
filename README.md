
# 🍔 Feedo - Food Delivery Platform

Welcome to **Feedo**, a dynamic and user-friendly food delivery platform built using modern web technologies. This project focuses on providing seamless food ordering, payment processing, and delivery tracking, with features tailored for both users and admins.

---

## 🚀 Features

### 🧑‍💻 **Admin Features**
1. ✅ **Add Items**: Admins can easily add new items to the menu.
2. ✅ **Remove Items**: Remove outdated or unavailable items.
3. ✅ **List Available Items**: View all available items in the menu.
4. ✅ **View Orders**: Display all orders along with their statuses.
5. ✅ **Update Order Status**: Modify the status of the orders.

### 🛍️ **User Features**
1. ✅ **User Registration**: Create an account to access features.
2. ✅ **Browsing Menus**: Explore the rich and customizable menu options.
3. ✅ **Cart Page View**: Users can view and manage items in their cart before placing an order.
4. ✅ **Order Placement**: Place orders 
5. ✅ **Secure Payment Options**: Integrated with **Stripe** for secure payments.
6. ✅ **Order Tracking**: Monitor the real-time status of your orders.
7. ✅ **Order History**: View past orders and their details.
8. ✅ **Interactive Interface**: Optimized for mobile devices and smaller screens.

### 🛠️ **Planned Features**
1. 🚧 **Usage of Promocodes**: Apply discount codes for exclusive offers.
2. 🚧 **Contact Information**: Add support/contact details.
3. 🚧 **Search Functionality**: Enable users to search for items quickly.
4. 🚧 **Chatbot for Customer Support**: AI-powered customer assistance.
5. 🚧 **Multilingual Support**: Support for multiple languages.
6. 🚧 **Themes**: Toggle between light and dark mode for better user experience.


---

## 🛠️ Tech Stack
- **Frontend**: React.js ⚛️
- **Backend**: Node.js with Express.js 🟢
- **Database**: MongoDB 🍃
- **Payment Gateway**: Stripe 💳

---

## 🔗 Repository Link
[Feedo GitHub Repository](https://github.com/abdallahade1/Feedo.git)

---

## 🎨 Installation and Setup

### Clone the Repository
```bash
git clone https://github.com/abdallahade1/Feedo.git
cd Feedo
cd food-delivery-platform
```

### Install Dependencies
```bash
cd frontend
npm install

cd admin
npm install

cd backend
npm install express mongoose jsonwebtoken bcrypt cors dotenv body-parser multer stripe validator nodemon
```

### Run the Development Server
```bash
cd backend
nodemon server.js

cd frontend
npm run dev

cd admin
npm run dev
```
### Stripe Configuration
1. **Create a [Stripe](https://stripe.com) Account** if you don't have one.
2. **Get Your API Keys**:
   - Log in to the [Stripe Dashboard](https://dashboard.stripe.com/).
   - Navigate to the **Developers** section and click on **API Keys**.
   - Copy the **Publishable key** and **Secret key**.
3. **Set Your Keys**:
Add the keys to your project's environment variables. For example, in backend/`.env`:
     ```
     STRIPE_SECRET_KEY=your_secret_key
     ```
---

## 👨‍💻 Developers
- **Abdallah Abdallah** - *Full Stack Developer*
- **Shahd Ammar** - *Full Stack Developer*
- **Yasmeen Sameh** - *Full Stack Developer*

Feel free to contribute by submitting a pull request!

---

## 📞 Contact
For questions, suggestions, or support:  
📧 Email: abdallah.abdallah@ejust.edu.eg




---

## 🎉 Thank You!
We hope you enjoy using Feedo! 😊
