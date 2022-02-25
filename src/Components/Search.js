import React from 'react'
import '../Styles/search.css'
import Categories from './Categories'
import { categoriesList } from './categoriesList'

function Search() {
  return (
    <div>
      <div className="search__header">
        <div className='search__header-left'>
          <div className='arrow'>
            <svg fill="currentColor" role="img" height="24" width="24" class="Svg-sc-1bi12j5-0 hDgDGI IYDlXmBmmUKHveMzIPCF" viewBox="0 0 24 24"><path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path></svg>
          </div>
          <div className='arrow'>
            <svg fill="currentColor" role="img" height="24" width="24" class="Svg-sc-1bi12j5-0 hDgDGI IYDlXmBmmUKHveMzIPCF" viewBox="0 0 24 24"><path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path></svg>
          </div>
          <div className="searchBox">
            <input type="text" placeholder='Artists, songs, or podcasts' id="" />
            <svg className='searchIcon' fill="currentColor" role="img" height="24" width="24" viewBox="0 0 24 24"><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path></svg>

          </div>
        </div>
        <div className="search__header-right">
          <div className="profile">
            <div className="profile__pic">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg" data-testid="user-icon"><path d="M15.216 13.717L12 11.869C11.823 11.768 11.772 11.607 11.757 11.521C11.742 11.435 11.737 11.267 11.869 11.111L13.18 9.57401C14.031 8.58001 14.5 7.31101 14.5 6.00001V5.50001C14.5 3.98501 13.866 2.52301 12.761 1.48601C11.64 0.435011 10.173 -0.0879888 8.636 0.0110112C5.756 0.198011 3.501 2.68401 3.501 5.67101V6.00001C3.501 7.31101 3.97 8.58001 4.82 9.57401L6.131 11.111C6.264 11.266 6.258 11.434 6.243 11.521C6.228 11.607 6.177 11.768 5.999 11.869L2.786 13.716C1.067 14.692 0 16.526 0 18.501V20H1V18.501C1 16.885 1.874 15.385 3.283 14.584L6.498 12.736C6.886 12.513 7.152 12.132 7.228 11.691C7.304 11.251 7.182 10.802 6.891 10.462L5.579 8.92501C4.883 8.11101 4.499 7.07201 4.499 6.00001V5.67101C4.499 3.21001 6.344 1.16201 8.699 1.00901C9.961 0.928011 11.159 1.35601 12.076 2.21501C12.994 3.07601 13.5 4.24301 13.5 5.50001V6.00001C13.5 7.07201 13.117 8.11101 12.42 8.92501L11.109 10.462C10.819 10.803 10.696 11.251 10.772 11.691C10.849 12.132 11.115 12.513 11.503 12.736L14.721 14.585C16.127 15.384 17.001 16.884 17.001 18.501V20H18.001V18.501C18 16.526 16.932 14.692 15.216 13.717Z"></path></svg>
            </div>
            <div className="profile__name">
              mahannajafi
            </div>
            <svg fill="currentColor" className='profile__more' role="img" height="16" width="16" viewBox="0 0 16 16"><path d="M14 6l-6 6-6-6h12z"></path></svg>          </div>
        </div>
      </div>
      <div className="smallCategories__title">Your top genres</div>

      <div className="smallCategories__title">Browse all</div>
      <div className='smallCategories'>
        <Categories name={categoriesList[0].name} pic={categoriesList[0].icon} />
        <Categories name={categoriesList[1].name} pic={categoriesList[1].icon} />
        <Categories name={categoriesList[2].name} pic={categoriesList[2].icon} />
        <Categories name={categoriesList[3].name} pic={categoriesList[3].icon} />
        <Categories name={categoriesList[4].name} pic={categoriesList[4].icon} />
        <Categories name={categoriesList[5].name} pic={categoriesList[5].icon} />
        <Categories name={categoriesList[6].name} pic={categoriesList[6].icon} />
        <Categories name={categoriesList[7].name} pic={categoriesList[7].icon} />
        <Categories name={categoriesList[8].name} pic={categoriesList[8].icon} />
        <Categories name={categoriesList[9].name} pic={categoriesList[9].icon} />
        <Categories name={categoriesList[10].name} pic={categoriesList[10].icon} />
        <Categories name={categoriesList[11].name} pic={categoriesList[11].icon} />
        <Categories name={categoriesList[12].name} pic={categoriesList[12].icon} />
        <Categories name={categoriesList[13].name} pic={categoriesList[13].icon} />
        <Categories name={categoriesList[15].name} pic={categoriesList[15].icon} />
        <Categories name={categoriesList[16].name} pic={categoriesList[16].icon} />
        <Categories name={categoriesList[17].name} pic={categoriesList[17].icon} />
        <Categories name={categoriesList[18].name} pic={categoriesList[18].icon} />
        <Categories name={categoriesList[19].name} pic={categoriesList[19].icon} />
        <Categories name={categoriesList[20].name} pic={categoriesList[20].icon} />
        <Categories name={categoriesList[21].name} pic={categoriesList[21].icon} />
        {/* <Categories name={categoriesList[22].name}  pic={categoriesList[22].icon}/> */}


      </div>

      <div className="diva"></div>
    </div>
  )
}

export default Search