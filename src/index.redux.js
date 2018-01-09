

const ADD_GUN ='加机关枪';
const REMOVE_GUN ='减机关枪';

//根据老的status 和 action生成新的status
export function counter(status=0,action){
    switch(action.type){
        case ADD_GUN:
            return status +1;
        case REMOVE_GUN:
            return status -1;
        default :
            return  10;
    }
}

export function addGun(){
    return {type:ADD_GUN}
}

export function removeGun() {
    return {type:REMOVE_GUN}
}


export function addGunAsync(){
    return dispatch=>{
        setTimeout(()=>{
           dispatch(addGun())
        },2000)
    }
}