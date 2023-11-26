import { Link } from 'react-router-dom';
import budanovImage from '../9d540be-0c25df3-budanov690.jpg';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '10vh' }}>
      <h1>This page not found</h1>
      <img
        src={budanovImage}
        alt="Budanov"
        style={{ width: '100%', maxWidth: '900px', margin: '20px 0' }}
      />
      <h2>As they say, a three-letter word - "УВЫ"</h2>
      <b>
        Please use this <Link to="/">link</Link> to navigate to our Home page
      </b>
    </div>
  );
};

export default NotFound;
