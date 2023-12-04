import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import SearchForm from './components/SearchForm/SearchForm';
import WeatherCard from './components/WeatherCard/WeatherCard';
import News from './components/News/News';

const newsSections = [
  { text: 'Сейчас в СМИ', faded: false },
  { text: 'в Германии', faded: true },
  { text: 'Рекомендуем', faded: true },
];

const news = [
  { img: './img/Ria.png', text: 'Путин упростил получение автомобильных номеров'},
  { img: './img/Ria.png', text: 'В команде Зеленского ракрыли план реформ на Украине'},
  { img: './img/Tur.png', text: '"Турпомощь" прокоментировала гибель десятков россиян в Анталье'},
  { img: './img/Znak.png', text: 'Суд закрыл дело Демпартии США против России'},
  { img: './img/Gazeta.png', text: 'На Украине призвали создать ракеты для удара по Москве'},
];

const currencies = [
  { title: 'USD MOEX 63,52', text2: '+0.09' },
  { title: 'EUR MOEX 70.86', text2: '+0.14' },
  { title: 'НЕФТЬ 64,90', text2: '+1,63%' },
  { text2: '...' },
];

const topRightCard = { 
  img: './img/Big.png',
  title: 'Работа над ошибками',
  text: 'Смотрите на Яндексе и запоминайте',
};

const products = [
  { text: 'Видео', href: '#' },
  { text: 'Картинки', href: '#' },
  { text: 'Новости', href: '#' },
  { text: 'Карты', href: '#' },
  { text: 'Маркет', href: '#' },
  { text: 'Переводчик', href: '#' },
  { text: 'Эфир', href: '#' },
  { text: 'еще', href: '#' },
];

function App() {
  const [value, setValue] = React.useState('');
  return (
    <div className="App">
      <div className='header'>
        <News {...{newsSections, news, currencies}}/>
        <Card {...topRightCard} style={{width: '15rem'}}/>
      </div>
      
      <div className='search'>
        <img className='Ya' src='./img/Ya.png' alt='Яндекс'/>
        <div className='search-body'>
          <div className='search-links'>
            {products.map((o, index) =>
              <a className={`h4 ${o.faded && 'faded'}`} href={o.href || '#'} key={index}>{o.text}</a>
            )}
          </div>
          <SearchForm className='form' value={value} onChange={(value) => setValue(value)} onSubmit={()=>{}}/>
          <div className='search-footer'>
            <span>{'Найдется всё. Например, '}</span>
            <span className='faded'>{'фаза луны сегодня'}</span>
          </div>
        </div>
      </div>

      <img className='banner' src='./img/Forsage.png' alt=''/>

      <div className='footer'>
        <WeatherCard/>
      </div>
    </div>
  );
}

export default App;