import React from "react"
import s from './Home.module.css'
import {posts} from '../../components/Data'
import {Card} from "../../components/card/Card";
import Image from "./../../components/prelouder/Prelouder";
import {AppStateType} from "../../reducer/redux";
import {useSelector} from "react-redux";



export const Home: React.FC = () => {

    const user = useSelector((state: AppStateType) => state.usersPage.user)

    return <div className={s.home}>
        {
            !user
                ? <Image />
                :
            posts.map(post => <Card key={post.id} post={post}/>)
        }
    </div>
}