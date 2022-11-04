import React from 'react'
import './Header.css'
import logoHeader from '../img/netflix-logoo.png'

export default ({black}) => {

  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img
            src={logoHeader}
            alt="Netflix"
          ></img>
        </a>
        <div className='menu'>
          <a className="menu--item">Início</a>
          <a className="menu--item">Séries</a>
          <a className="menu--item">Filmes</a>
          <a className="menu--item">Bombando</a>
          <a className="menu--item">Minha lista</a>
          <a className="menu--item">Navegar por idiomas</a>
        </div>

        
          
        
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Usuário"
          ></img>
        </a>
      </div>
    </header>
  )
}
