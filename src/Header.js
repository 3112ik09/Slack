import React from 'react';
import './Header.css';
import {Avatar} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useStateValue } from './StateProvider';
function Header() {
    const [{user}] = useStateValue() ;
  return (

    <div>
        <div className='header'>
            <div className='header__left'>
                {/* avatar  */}
                <Avatar className='header__avatar'
                alt={user?.displayName}
                src={user?.photoURL}
                />
                <AccessTimeIcon/>
            </div>

            <div class="header__search">
                <SearchIcon />
                <input placeholder='enter'  ></input>
            </div>

            <div className='header__right'>
                <HelpOutlineIcon/>
            </div>

        </div>
    </div>
  )
}

export default Header