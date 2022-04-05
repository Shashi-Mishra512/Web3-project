import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitch from '../assets/header/theme-switch.png'


const Header = () => {
  return (
    <div className='header'>
        <div className='logoContainer'>
            <img src={punkLogo} className='punkLogo' alt='punkLogo' />
        </div>

       <div className='searchBarContainer'>
           <div className='searchIconContainer'>
               <img src={searchIcon} />
           </div>
              <input className= 'searchInput' type='text' placeholder='Search Collecttions Items, Users ....' />
        </div>
        
        <div className='HeaderItems'>
            <p>Drops</p>
            <p>MarketPlace</p>
            <p>Create</p>
            </div>

        <div className='headerActions'>
                 <div className='themeSwitchContainer'>
                     <img src={themeSwitch} />
                     </div>

         </div>

         <div className='loginButton'><p>GET IN</p>
         </div>

        </div>
  )
}

export default Header