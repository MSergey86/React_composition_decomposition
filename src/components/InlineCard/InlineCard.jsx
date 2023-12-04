import Card from '../Card/Card';
import './InlineCard.css';


function InlineCard(props) {
  return (
    <Card {...props} className='inline-card'/>
  );
}

export default InlineCard;