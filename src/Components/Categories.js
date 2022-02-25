import React from 'react'
import '../Styles/categories.css'

function Categories({name,pic}) {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);

  return (
    <div>
      <div style={{backgroundColor: '#'+  randomColor}} className="category">
        <div className="category__name">{name}</div>
        <img className='category__pic' src={pic} alt="" />
      </div>
    </div>
  )
}

export default Categories