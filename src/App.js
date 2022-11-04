import React, { useEffect, useState } from 'react'
import './App.css'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header'

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setfeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {

    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setfeaturedData(chosenInfo);
    }

    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, []);

  return (
    <div className="page">

      <Header black={blackHeader}/>

      {featuredData && 
      <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>
        Direitos de imagem para <span>Netflix</span> <br></br>
        Dados pegos do site <a href='https://themoviedb.org'>Themoviedb.org</a>
      </footer>

      {movieList.length <= 0 &&
      <div className='loading'>
          <img src='https://www.metageek.com/img/buffering-800px.gif'  alt='Carregando'/>
      </div>
      } 
    </div>
  )
}
