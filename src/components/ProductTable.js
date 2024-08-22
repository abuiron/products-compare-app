import React, { useState, useEffect } from 'react';
import { Table, Button, Image } from 'antd';
import axios from 'axios';

const ProductTable = ({ onCompare }) => {
  const [products, setProducts] = useState([]);
  const [compareList, setCompareList] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
      });
  }, []);

  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    { title: 'Price', dataIndex: 'price', key: 'price', render: price => `$${price}` },
    { title: 'Discount', dataIndex: 'discountPercentage', key: 'discountPercentage', render: discount => `${discount}%` },
    { title: 'Brand', dataIndex: 'brand', key: 'brand' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Image', dataIndex: 'thumbnail', key: 'thumbnail', render: img => <Image width={50} src={img} /> },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button 
          onClick={() => onCompare(record)}
          disabled={compareList.includes(record.id)}
        >
          Compare
        </Button>
      ),
    },
  ];
  console.log(setCompareList);

  return <Table dataSource={products} columns={columns} rowKey="id" pagination={{ pageSize: 5 }} />;
};

export default ProductTable;
