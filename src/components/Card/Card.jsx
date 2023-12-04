import PropTypes from 'prop-types';
import './Card.css'

function Card({ img, title, text, text2, href, className, ...props }) {
  return (
    <div {...props} className={(className || '') + ' card'}>
      <a href={href || '#'}>
        {img && <img className='card-image' src={img} alt=''/>}
        {title && <div className='card-title'>{title}</div>}
        {text && <div className='card-text'>{text}</div>}
        {text2 && <div className='card-text2'>{text2}</div>}
      </a>
    </div>
  );
}

export default Card;

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}