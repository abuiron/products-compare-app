import React from 'react';
import { Layout, Avatar, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons'; // Import the Menu icon
import './Navbar.css';

const { Header } = Layout;

const Navbar = ({ onOpenSidebar }) => {
  return (
    <Header className="navbar">
      <Button
        type="text"
        icon={<MenuOutlined />} // Add the Menu icon
        onClick={onOpenSidebar} // Trigger the function to open the sidebar
        className="burger-menu"
      />
      <div className="logo">AT products</div>
      <div className="profile">
        <Avatar src="im.jpg" />
      </div>
    </Header>
  );
};

export default Navbar;
