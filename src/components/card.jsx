import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './card.css';

const Cards = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://6701aea0b52042b542d85885.mockapi.io/LIBROS01', {
          headers: {
            'Authorization': 'Bearer 6701aea0b52042b542d85885'
          }
        });
        setBooks(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="cards-container">
      {books.map((book) => (
        <div className="card" key={book.id}>
          <img src={book.image} alt={book.name} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{book.name}</h3>
            <p className="card-author">Author: {book.author}</p>
            <p className="card-price">Price: ${book.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;