import React from 'react'

function Menu({ title, MenuObject, className }) {
  return (
    <div className='MenuContainer'>
      <p className="title">{title}</p>
      <ul>
        {
          MenuObject && MenuObject.map((menu) => {
            return <li>
              {" "}
              <a className={className} href="#">
                <i>{menu.icon}</i>
                <span>{menu.name}</span>
              </a>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export { Menu } 