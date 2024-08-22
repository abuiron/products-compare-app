import React from 'react';
import { Table, Button, Modal, Rate } from 'antd';

const CompareProducts = ({ compareList, onRemoveProduct }) => {
  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Brand', dataIndex: 'brand', key: 'brand' },
    { title: 'Price', dataIndex: 'price', key: 'price', render: price => `$${price}` },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      render: rating => (
        <div>
          <Rate disabled value={rating} allowHalf /> {/* Displays the rating as stars */}
          <span style={{ marginLeft: 8 }}>{rating.toFixed(1)}/5</span> {/* Displays the numeric rating */}
        </div>
      ),
    },
    {
      title: 'Reviews',
      key: 'reviews',
      render: (_, record) => (
        <Button
          onClick={() => showModal(record.reviews)}
          type="link"
        >
          View Reviews
        </Button>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button onClick={() => onRemoveProduct(record.id)}>Remove</Button>
      ),
    },
  ];

  const showModal = (reviews) => {
    Modal.info({
      title: 'Product Reviews',
      content: (
        <div>
          {reviews.map((review, index) => (
            <div key={index} style={{ marginBottom: '16px' }}>
              <Rate disabled value={review.rating} />
              <p><strong>{review.reviewerName}</strong>: {review.comment}</p>
              <small>{new Date(review.date).toLocaleDateString()}</small>
            </div>
          ))}
        </div>
      ),
      onOk() {},
    });
  };


  return (
    <div className="compare-products">
      <Table dataSource={compareList} columns={columns} rowKey="id" pagination={false} />
    </div>
  );
};

export default CompareProducts;
