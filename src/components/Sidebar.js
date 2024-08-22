import React from 'react';
import { Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons'; // Import the left arrow icon
import { Menu } from 'antd';  // Import the Menu component


import './Sidebar.css';

const Sidebar = ({ visible, onClose }) => {
  return (
    <Drawer
      title="Menu"
      placement="left"
      closable={false}
      onClose={onClose}
      open={visible}
      className="sidebar-drawer"
    >
      <Button
        type="text"
        icon={<LeftOutlined />} // Add a back arrow icon to close the sidebar
        onClick={onClose}
        className="close-menu"
      >
        Back
      </Button>
      <Menu mode="inline" defaultSelectedKeys={['1']} className="sidebar">
        <Menu.Item key="1">
          <Link to="/" onClick={onClose}>Product Details</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/compare" onClick={onClose}>Compare Products</Link>
        </Menu.Item>
      </Menu>
    </Drawer>
  );
};

export default Sidebar;
