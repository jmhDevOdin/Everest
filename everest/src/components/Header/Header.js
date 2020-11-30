import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className='header__wrapper'>
            {/* Logo */}
            <div className='header__logo'>
                <img src='https://i.imgur.com/UdiRzau.png' alt='Everest Logo' width={50}></img>
            </div>
            {/* Search */}
            <div className='header__search'>
                <div className='header__searchContainer'>
                    <SearchIcon />
                    <input placeholder='Search' type='text' />
                </div>
            </div>
            {/* Menu Items */}
            <div class='header__menuItems'>
                <a href='#'>Free Stocks</a>
                <a href='#'>Portfolio</a>
                <a href='#'>Cash</a>
                <a href='#'>Messages</a>
                <a href='#'>Account</a>
            </div>
        </div>
    )
}

export default Header;
