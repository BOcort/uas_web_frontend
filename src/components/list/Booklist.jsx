import { useState, useEffect } from 'react';
import axios from 'axios';
import Bookcard from '../card/Bookcard';
import './Booklist.css';

export default function Booklist() {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/book');
        console.log('Response:', response.data);
        if (Array.isArray(response.data.data)) {
          setBookList(response.data.data);
        } else {
          console.error('Data received is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // Set loading to false once data is fetched or an error occurs
        setLoading(false);
      }
    };

    fetchData();
  }, [bookList]); // Add bookList to the dependency array

  return (
    <div id="list-card">
      {loading ? (
        <p>Loading...</p>
      ) : bookList.length === 0 ? (
        <p>No books available</p>
      ) : (
        bookList.map((book) => (
          <Bookcard key={book.id} id={book.id} title={book.title} stock={book.stock} />
        ))
      )}
    </div>
  );
}
