# Product Comparison App

This is a React-based application that allows users to compare various products. The app fetches product data from an external API and lets users select products to compare their details, including title, brand, price, category, and rating.

## Features

- **Product Listing**: Displays a list of products with details like title, description, price, discount, brand, and category.
- **Product Comparison**: Users can select products to compare. The comparison table includes columns for title, brand, price, category, and rating.
- **Responsive Design**: The application is designed to be fully responsive, adapting to various screen sizes.
- **Ant Design Components**: Utilizes Ant Design components for the user interface, ensuring a sleek and professional appearance.

## Live Demo

Check out the live demo of the project [https://atproductscompareapp.netlify.app] (AT Products). 

*Note: Replace the `#` with your actual live demo URL.*

## Installation

1. Clone the repository:
   ``bash
   git clone https://github.com/your-username/product-comparison-app.git
   cd product-comparison-app

2. Install dependencies:

   ``bash
   npm install
   
3. Start the development server:

   ``bash
   npm start

   The app will be available at http://localhost:3000.


## Usage
-  Navigate to the product listing page to browse available products.
- Click on the "Compare" button to add a product to the comparison list.
- View the comparison of selected products on the comparison page.
- Remove products from the comparison list using the "Remove" button.

## Technologies Used
- React.js: JavaScript library for building user interfaces.
- Ant Design: A UI library that provides high-quality React components.
- Axios: Promise-based HTTP client for the browser and Node.js.
- React Router: A library for routing in React applications.

## Project Structure

src/
│
├── components/
│   ├── Navbar.js
│   ├── Sidebar.js
│   ├── ProductDetails.js
│   ├── ProductTable.js
│   └── CompareProducts.js
│
├── App.js
├── App.css
└── index.js


## Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss your ideas.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.