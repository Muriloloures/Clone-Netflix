import React from "react";
import './FeaturedMovie.css'
import logoMain from '../img/netflix-symbol-blackk.png'

export default ({item}) => {
  return (
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="featured--horizontal">
        <div className="logo--main">
           <img src={logoMain} alt="Netflix"/>
           <span>Série</span>
        </div>
        <div className="featured--name">{item.original_name}</div>
        <div className="featured--info">
          <div className="featured--description">{item.overview}</div>
        </div>
        <div className="featured--buttons">
            <a href="" className="featured--watchbutton">▶ Assistir</a>
            <a href="" className="featured--mylistbutton">ⓘ Mais informações</a>
        </div>
      </div>
    </section>
  )
}