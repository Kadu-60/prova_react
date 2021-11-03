import React from 'react'
import './Header.css'

function Header(props) {

    return(
        <>
        <div className="header">
            <div className="row d-flex justify-content-end">
            <div class="search-box">
                <form action="#search-results.html" method="get">
                <input class="search-input" placeholder="Search Here..." type="search" id="search"></input>
                <button class="search-submit" value="">buscar</button>
                </form>
            </div>
            <div className="detalhesUser">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true"
                  aria-expanded="false">
                  <div class="profile_img">
                    <img src="assets/images/profileimg.jpg" class="rounded-circle" alt="" />
                    <div class="user-active">
                      <span></span>
                    </div>
                  </div>
                </a>
            </div>

            </div>
        </div>
        
        </>
    )
}

export default Header