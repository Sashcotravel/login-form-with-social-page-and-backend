import React from 'react';
import s from './Navbar.module.css'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../reducer/redux";
const image = require('./../../Image/images.png')

export type userType = {
    displayName: string
    id: number
    photos: [{
        value: string
    }]
}
export type propsType = {
    user?: userType
}

export const Navbar: React.FC<propsType> = () => {

    const user: userType | null = useSelector((state: AppStateType) => state.usersPage.user)

    const logout = () => {
        window.open('http://localhost:5000/auth/logout', '_self')
    }

    return (
        <div className={s.navbar}>
            <span className={s.logo}><Link className={s.navLink} to='/'>logo</Link></span>
            {user ? (
                <ul className={s.list}>
                    <li className={s.listItem}>
                        <img src={user.photos !== undefined ?
                            user.photos[0].value : image} className={s.avatar}/>
                    </li>
                    <li className={s.listItem}>{user.displayName}</li>
                    <li className={s.listItem} onClick={logout}>Logout</li>
                </ul>
            ) : (<Link to='/login' className={s.navLink}>Login</Link>)
            }
        </div>
    );
}

