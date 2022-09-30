import React from 'react';
import s from './Card.module.css'
import {Link} from "react-router-dom";

export type PostsType = {
    post: {
        id: number
        title: string
        img: string
        desc: string
        longDesc: string
    }
}

export const Card: React.FC<PostsType> = ({post}) => {
    return (
        <div className={s.card}>
            <Link className={s.navLink} to={`/post/${post.id}`}>
                <span className={s.title}>{post.title}</span>
                <img src={post.img} className={s.img}/>
                <p className={s.desc}>{post.desc}</p>
                <button className={s.cardBut}>Read more</button>
            </Link>
        </div>
    );
}
