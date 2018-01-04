
export const LOGIN_SUCCESS='LOGIN_SUCCESS';
export const LOGIN_ERROR='LOGIN_ERROR';
export const LOGOUT_SUCCESS='LOGOUT_SUCCESS';

export function login(userCredentails)
{
    if (userCredentails.username==='7696249559' && userCredentails.password==='123') {
        return{
            type:LOGIN_SUCCESS
        }
    }else{
        return{
            type:LOGIN_ERROR
        }
    }
}

export function logOut(userCredentails)
{
    return{
        type:LOGOUT_SUCCESS
    }

}