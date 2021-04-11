import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <div class='header'>
            <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='amazon logo'/>
            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className='header__nav'>
                <div className='header__menu'>
                    <span className='header__optionLineOne'>
                        Hello
                    </span>
                    <span className='header__optionLineTwo'>
                        Sign in
                    </span>
                </div>
                <div className='header__menu'>
                    <span className='header__optionLineOne'>
                        Returns
                    </span>
                    <span className='header__optionLineTwo'>
                        & Orders
                    </span>
                </div>
                <div className='header__menu'>
                    <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLineTwo'>
                        Prime
                    </span>
                </div>
                <div className='header__navcart'>
                    <span className='header__cart'>
                    <span className='header__count '>0</span>
                    <ShoppingCartIcon className='header__cartIcon'/>
                    </span>
                    <span className='header__cartOption'>Cart</span>
                </div>
            </div>
        </div>
    )
}

export default Header
