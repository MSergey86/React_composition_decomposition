import PropTypes from 'prop-types';
import InlineCard from '../InlineCard/InlineCard';
import './News.css'


function News({newsSections, news, currencies, }) {
  return (
    <div className='news'> 
      <div className='news-header'>
        {newsSections.map((o, index) =>
          <a className={`h3 ${o.faded && 'faded'}`} href={o.href || '#'} key={index}>{o.text}</a>
        )}
        <div className='header-date'>13 июля, среда 02:23</div>
      </div>
      <div className='news-body'>
        {news.map((o, index) => <InlineCard {...o} key={index}/>)}
      </div>
      <div className='news-footer'>
        {currencies.map((o, index) => <InlineCard {...o} key={index}/>)}
      </div>
    </div>
  )
}

News.propTypes = {
  newsSections: PropTypes.string.isRequired,
  news: PropTypes.string.isRequired,
  currencies: PropTypes.string.isRequired,
}


export default News