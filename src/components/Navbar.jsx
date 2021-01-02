import React,{useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import logo from "../assets/logo.png";
import "./css/Navbar.css";
import FaceIcon from '@material-ui/icons/Face';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import {useStateValue} from "../StateContext";
function Navbar() {
    const [arrowButtonState, arrowButtonStateChanged] = useState(false)
    const [{user}, dispatch] = useStateValue()
    return (
        <div className="navbar">
            <div className="navbar__titles">
                <img className="navbar__image" src={logo} alt="primevide"/>
                <p className="navbar__titles__title navbar__titles__title--active">Home</p>
                <p className="navbar__titles__title">TV Shows</p>
                <p className="navbar__titles__title">Movies</p>
                <p className="navbar__titles__title">Kids</p>
            </div>
            
            <div className="navbar__user">
                <div className="navbar__search">
                    <SearchIcon />
                    <form className="navbar__search__form" action="#">
                        <input type="text" placeholder="Search..."/>
                    </form>
                </div>
                <Avatar className="navbar__avatar" src={user.photoURL} />
                <div className="navbar__user__dropdown">
                    <p>{user.displayName}</p>
                    
                    <Button className="navbar__dropdown__menu" onClick={() => { arrowButtonStateChanged(!arrowButtonState) }}><ArrowDropDownIcon style={{transition : "0.3s ease-in-out",transform : arrowButtonState ? "rotate(180deg)" : "rotate(0deg)"}} /></Button>
                    <div className="navbar__user__overlay" style={{display : arrowButtonState ? "block" : "none"}}>
                        <div className="navbar__user__dropdown__menu" style={{display : arrowButtonState ? "flex" : "none"}}>
                            <ul className="navbar__user__dropdown__menu__left">
                                <li>Your Watchlist</li>
                                <li>Account Settings</li>
                                <li>Watch Anywhere</li>
                                <li>Help</li>
                                <li>Not {user.displayName}? Sign Out</li>
                            </ul>
                                
                            <ul className="navbar__user__dropdown__menu__right">
                                <li className="navbar__user__dropdown__menu__right__kids"><FaceIcon /><p>Kids</p></li>
                                <li className="navbar__user__dropdown__menu__right__new" ><Button className="navbar__dropdown__menu"><AddCircleIcon /></Button><p>Add New</p></li>
                                <li>Manage Profiles</li>
                                <li>Learn more</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
