

export function getUserData(){
    const user = sessionStorage.getItem('user');
    if(user){
        return JSON.parse(user);
    }else{
        return undefined;
    }

}

export function setUserData(user){
   
    sessionStorage.setItem('user', JSON.stringify(user));
   
}

export function removeUserData(){
    sessionStorage.removeItem('user');
}

export const defaultPageSize = 6;

export function getPage(queryStringArr){
    let queryStringPageArr = queryStringArr[0];
    let queryStringPage = queryStringPageArr.split('=')[1];
    let page = Number(queryStringPage) || 1;
    return page;
}

export function getPageSize(queryStringArr){
    let queryStringPageSizeArr = queryStringArr[1];
    let queryStringPageSize = queryStringPageSizeArr ? queryStringPageSizeArr.split('=')[1] : defaultPageSize;
    let pageSize = Number(queryStringPageSize);
    return pageSize;
}