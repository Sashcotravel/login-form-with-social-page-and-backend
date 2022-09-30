import React, {useEffect} from "react";
import './App.css';
import {Routes, Route, Navigate, BrowserRouter} from "react-router-dom";
import {Login} from "./page/login/Login";
import {Post} from "./page/Post/Post";
import {Home} from "./page/home/Home";
import {Navbar, userType} from "./components/navbar/Navbar";
import {actions} from "./reducer/login-reducer";
import {Provider, useDispatch, useSelector} from "react-redux";
import store, {AppStateType} from "./reducer/redux";
import {instance} from "./api/authAPI";


export const App = () => {

    const user: userType | null = useSelector((state: AppStateType) => state.usersPage.user)
    const dispatch = useDispatch()

    useEffect(() => {

            const getUser1 = () => {
                instance.get('/login/success')
                    .then(res => {
                        if (res.status === 200) return res.data
                        throw new Error('Authentication has been failed')
                    })
                    .then(res => dispatch(actions.addUser(res.user)))
                    .catch(error => {
                        console.log(error)
                    })
            }

            getUser1()

        }, []
    )


    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Routes>
                    <Route path='/post/:id' element={user ? <Post/> : <Navigate to='/login'/>}/>
                    <Route path='/welcome' element={user ? <Home/> : <Login/>}/>
                    <Route path='/login' element={user ? <Navigate to='/'/> : <Login/>}/>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}


const App2: React.FC = () => {
    return <Provider store={store}>
        <App/>
    </Provider>
}

export default App2

// const getUser = () => {
//     fetch('http://localhost:5000/auth/login/success', {
//         method: 'GET',
//         credentials: 'include',
//         // @ts-ignore
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Credentials': true,
//         }
//     }).then((res) => {
//         if (res.status === 200) return res.json()
//         throw new Error('Authentication has been failed')
//     })
//         .then((resObj) => {
//             dispatch(actions.addUser(resObj?.user))
//             //setUser(resObj.user)
//         })
//         .catch(error => {
//             console.log(error)
//         })
// }
//
// getUser()