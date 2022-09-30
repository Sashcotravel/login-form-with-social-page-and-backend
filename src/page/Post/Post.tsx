import React from "react"
import s from './Post.module.css'
import { posts } from '../../components/Data'
import {useLocation} from "react-router-dom";

type postType = {
    id: number
    title: string
    img: string
    desc: string
    longDesc: string
}

export const Post = () => {

    const location = useLocation()
    const path = location.pathname.split('/')[2]

    const post: postType | undefined = posts.find((p) => p.id.toString() === path)

    return <div className={s.post}>
        <img src={post?.img} className={s.postImg}/>
        <h1 className={s.postTitle}>{post?.title}</h1>
        <p className={s.postDesc}>{post?.desc}</p>
        <p className={s.postLongDesc}>{post?.longDesc}</p>
    </div>
}