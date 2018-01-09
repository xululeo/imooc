import axios from 'axios';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const USER_DATA = 'USER_DATA';

const initStatus ={
    isAuth: false,
    user: '李云龙',
    age:20
}

export function auth(state = initStatus, action) {
    console.log(state,action)
    switch (action.type) {
        case LOGIN:
            return {...state, isAuth: true}
        case LOGOUT:
            return {...state, isAuth: false}
        case USER_DATA:
            return {...state, user:action.payload.user}
        default:
            return state;
    }

}

export function getUserData() {
    return dispatch => {
        console.log("2323232323323")
        axios.get('/data').then(res => {
            console.log("获取的数据"+res)
            dispatch(userData(res.data))
        })
    }
}

export function userData(data) {
    return {type: USER_DATA, payload: data}
}

export function login() {
    return {type: LOGIN}
}

export function logout() {
    return {type: LOGOUT}
}