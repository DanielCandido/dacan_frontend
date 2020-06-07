class TokenUtil {
    public async saveToken(token: string){
        localStorage.setItem('tokenMoney', token);

        return token;
    }

    public async getToken() {
        const token = localStorage.getItem('tokenMoney')

        return token
    }

    public removeToken(){
        localStorage.removeItem('tokenMoney');

        return true;
    }
}

export default new TokenUtil()