import React from "react";
import s from "./Login.module.css"
import {Link} from "react-router-dom";

const Google = require('./../../Image/google.png')
const Facebook = require('./../../Image/facebook.png')
const Github = require('./../../Image/github-sign.png')


export const Login = () => {

    const google = () => {
        window.open('http://localhost:5000/auth/google', '_self')
    }

    const github = () => {
        window.open('http://localhost:5000/auth/github', '_self')
    }

    const facebook = () => {
        window.open('http://localhost:5000/auth/facebook', '_self')
    }


    return <div className={s.login}>
        <h1 className={s.loginTitle}>Choose a Login Method</h1>
        <div className={s.wrapper}>
            <div className={s.left}>
                <div className={s.loginBut + ' ' + s.google} onClick={google}>
                    <img src={Google} className={s.imgSize}/>
                    GOOGLE
                </div>
                <div className={s.loginBut + ' ' + s.facebook} onClick={facebook}>
                    <img src={Facebook} className={s.imgSize}/>
                    FACEBOOK
                </div>
                <div className={s.loginBut + ' ' + s.github} onClick={github}>
                    <img src={Github} className={s.imgSize}/>
                    GITHUB
                </div>
            </div>
            <div className={s.center}>
                <div className={s.line}/>
                <div className={s.or}>or</div>
            </div>
            <div className={s.right}>
                <input type="text" placeholder={'Username'}/>
                <input type="password" placeholder={'Password'}/>
                <button className={s.submit}><Link to={'/login'}>Login</Link></button>
            </div>
        </div>
    </div>
}