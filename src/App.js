import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductDetails from './components/ProductDetails';
import CompareProducts from './components/CompareProducts';
import './App.css';

const { Content } = Layout;

function App() {
  const [compareList, setCompareList] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State to handle sidebar visibility

  const handleAddToCompare = (product) => {
    setCompareList([...compareList, product]);
  };

  const handleRemoveProduct = (productId) => {
    setCompareList(compareList.filter(product => product.id !== productId));
  };

  const handleOpenSidebar = () => {
    setIsSidebarVisible(true); // Open the sidebar
  };

  const handleCloseSidebar = () => {
    setIsSidebarVisible(false); // Close the sidebar
  };

  return (
    <Router>
      <Layout>
        <Navbar onOpenSidebar={handleOpenSidebar} /> {/* Pass function to Navbar */}
        <Sidebar visible={isSidebarVisible} onClose={handleCloseSidebar} /> {/* Pass state and function to Sidebar */}
        <Layout>
          <Content className="content">
            <Routes>
              <Route path="/" element={<ProductDetails onAddToCompare={handleAddToCompare} />} />
              <Route path="/compare" element={<CompareProducts compareList={compareList} onRemoveProduct={handleRemoveProduct} />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
