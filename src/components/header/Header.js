import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom"
import { useStateValue } from '../../context/StateProvider';

function Header() {
    const [state,dispatch] = useStateValue();
    return (
        <div class='header'>
           <Link to="/">
           <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='amazon logo'/>
           </Link> 
            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className='header__nav'>
                <Link to='/signin'>
                <div className='header__menu'>
                    <span className='header__optionLineOne'>
                        Hello
                    </span>
                    <span className='header__optionLineTwo'>
                        Sign in
                    </span>
                </div>
                </Link>
                
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
                <Link to="/checkout">
                <div className='header__navcart'>
                    <span className='header__cart'>
                    <span className='header__count '>{state.basket?.length}</span>
                    <ShoppingCartIcon className='header__cartIcon'/>
                    </span>
                    <span className='header__cartOption'>Cart</span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
