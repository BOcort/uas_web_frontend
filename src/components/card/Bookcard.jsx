import PropTypes from 'prop-types';
import { Auth } from '../../utils';
import axios from 'axios';
import './Bookcard.css';

export default function Bookcard(props) {
  const userId = Auth.authenticated();
  const checkCookies = Auth.isAuthenticated();
  const handleCardClick = async () => {
    if (checkCookies) {
      try {
        const dataUser = JSON.parse(userId);
        const response = await axios.post('http://localhost:3000/api/pinjam/tambah', {
          iduser: dataUser.id, // Assuming your user data structure has a userId property
          idbook: props.id,
        });

        console.log('Book borrowed successfully:', response.data);
        // Add any additional logic you want to perform after a successful borrow
      } catch (error) {
        console.error('Error borrowing book:', error.message);
        // Handle the error appropriately
      }
    } else {
      // User is not authenticated, handle this case (e.g., redirect to login)
      console.warn('User is not authenticated. Handle this case.');
    }
  };

  return (
    <div id="card" onClick={handleCardClick}>
      <div id="image-card">
        <img src={`/image/${props.title}.jpg`} alt="" />
      </div>
      <div id="text-card">
        <h2>{props.title}</h2>
      </div>
      <div id="status">
        <h3>Stock {props.stock}</h3>
      </div>
    </div>
  );
}

Bookcard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
};
