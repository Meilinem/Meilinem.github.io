//const REST_ENDPOINT = 'http://localhost:8080'
const TOKEN = 'authToken'

/*export function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        try {
            let res = axios({
                url: `${REST_ENDPOINT}/connexion`,
                method: 'POST',
                data: {
                    username: username,
                    password: password,
                    grant_type: 'password'
                }
            })
            setAuthToken(res.data.token)
            console.log(TOKEN)
            resolve()
        }
        catch (err) {
            console.error('Error during login:', err)
            reject(err)
        }
    })
}*/

export function loginUser() {
    console.log("Connecting, ...")
    setAuthToken("HELLO WORLD !")
}

export function logoutUser() {
    clearAuthToken()
}

export function setAuthToken(token) {
    //axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    localStorage.setItem(TOKEN, token)
}

export function getAuthToken() {
    return localStorage.getItem(TOKEN)    
}

export function clearAuthToken() {
    //axios.defaults.headers.common['Authorization'] = ''
    localStorage.removeItem(TOKEN)
}

export function isLoggedIn() {
    let authToken = getAuthToken()
    return !!authToken
}

export function getUserInfo() {
    if (isLoggedIn()) {
        return getAuthToken()
    }
}