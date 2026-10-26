
# 🛒 Bazar-Dor — বাজার দর

### প্রয়োজনীয় পণ্যের দাম এক নজরে

**Bazar-Dor** is a Bengali market price tracking web application designed to help people in Bangladesh explore daily prices of essential products, compare market rates, and understand price changes.

বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের দাম সহজে দেখা, বিভিন্ন বাজারের দাম তুলনা করা এবং দাম বৃদ্ধি ও হ্রাস সম্পর্কে জানার জন্য তৈরি একটি ওয়েব অ্যাপ্লিকেশন।

## 🌐 Live Website

🔗 **Live Demo:** https://bazar-dor-ecru-psi.vercel.app/

Visit the live website to explore product prices, browse categories, and discover market information.

## 📌 Project Overview

Bazar-Dor makes everyday market price information accessible through a simple, responsive, and Bengali-friendly interface.

Users can explore essential commodities such as rice, lentils, cooking oil, vegetables, fish, meat, eggs, and other grocery products.

The application presents product information and price changes in an organized format to make everyday shopping decisions easier.

## ✨ Key Features

- 📊 **Daily Price Overview** — View the listed prices of essential products.
- 📈 **Price Change Indicators** — Identify products with increasing or decreasing prices.
- 🔥 **Top Price Risers** — Explore products with notable price increases.
- 📉 **Top Price Fallers** — Explore products with notable price decreases.
- 🗂️ **Product Categories** — Browse products by category.
- 🛍️ **Product Details** — View detailed information about individual products.
- 🏪 **Market Price Comparison** — Compare minimum, maximum, and average prices across available markets.
- 🔐 **Authentication** — Sign up, sign in, and access account features.
- 👤 **User Profile** — View and manage profile information.
- 📱 **Responsive Design** — Use the application on mobile, tablet, and desktop.
- 🇧🇩 **Bengali Interface** — Read product information and prices in Bangla.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Next.js | React framework for routing and application rendering |
| React | Building reusable UI components |
| TypeScript | Type safety and maintainable code |
| Tailwind CSS | Responsive styling and UI design |
| Better Auth | Authentication and session management |
| MongoDB | Database for authentication and application data |
| Programming Hero API | Retrieving product and market price information |
| Vercel | Hosting and deployment |

## 🧰 Development Tools

- Visual Studio Code
- Node.js
- npm
- Git
- GitHub

## 🏗️ Application Structure

The application is organized into reusable components and route-based pages.

```text
Bazar-Dor/
├── public/
│   └── assets/
├── src/
│   ├── app/
│   │   ├── api/
│   │   ├── category/
│   │   ├── products/
│   │   ├── profile/
│   │   ├── signin/
│   │   └── signup/
│   ├── components/
│   ├── lib/
│   └── proxy.ts
├── .env.local
├── package.json
└── README.md
```

*Note: The folder structure above is illustrative and may differ slightly from the current codebase.*

## 🔌 API Integration

Bazar-Dor uses the Programming Hero Bazar-Dor API to retrieve product information.

**Products endpoint:**

https://openapi.programming-hero.com/api/bazardor/products

The API provides product information used by the application to display prices and product details.

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/riyad-devx/Bazar-Dor.git
```

### 2. Navigate to the project directory

```bash
cd Bazar-Dor
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the project root.

Add the environment variables required by your application, for example:

```env
MONGODB_URL=your_mongodb_connection_string
```

Configure any additional Better Auth, Google OAuth, or GitHub OAuth variables used by your project.

**Security:** Never commit `.env.local`, database passwords, API secrets, or OAuth client secrets to GitHub.

### 5. Start the development server

```bash
npm run dev
```

Open the following URL in your browser:

http://localhost:3000

## 🔐 Authentication

The application uses Better Auth for authentication.

Depending on the configured environment variables and enabled providers, supported functionality may include:

- User registration
- User sign-in
- Session management
- Profile access
- Google and GitHub sign-in

OAuth providers require the appropriate credentials and callback URLs to be configured.

## 📱 Responsive User Interface

Bazar-Dor uses a clean interface designed to make market information easy to understand.

- Responsive product cards
- Organized category navigation
- Clear price indicators
- Market comparison tables
- Mobile-friendly layouts
- Bengali product labels and pricing

## ☁️ Deployment

The live application is deployed on Vercel.

**Production URL:** https://bazar-dor-ecru-psi.vercel.app/

To deploy your own version:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure all required environment variables.
4. Deploy the application.
5. Test authentication, API requests, and product pages.

## 🎯 Project Goals

The main goal of Bazar-Dor is to make market price information easier to access and compare.

The project also demonstrates practical skills in modern web development, API integration, authentication, responsive design, and full-stack application deployment.

## 🔮 Future Improvements

- 📍 Location-based market discovery
- 📅 Historical price charts
- 🔔 Price change notifications
- 🔎 Advanced product search and filtering
- ⭐ Favorite products and watchlists
- 📊 More detailed price trend analysis

## 👨‍💻 Developer

**Riyad Mia**
Aspiring Full-Stack Developer

- GitHub: https://github.com/riyad-devx
- Live Project: https://bazar-dor-ecru-psi.vercel.app/

## 📄 License

This project is intended for learning and portfolio purposes. Add a formal open-source license if you want others to reuse, modify, and distribute the code under defined terms.

---

**Made with ❤️ in Bangladesh 🇧🇩**

*বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।*
