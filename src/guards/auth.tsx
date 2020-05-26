export default function isAuthenticated() {
    return new Promise((resolve, reject) => {
        console.log(localStorage.getItem('tokenMoney'))
        if (localStorage.getItem('tokenMoney') != null) {
            resolve({login: true});
        } else {
            reject(new Error('/login'));
        }
    })

}