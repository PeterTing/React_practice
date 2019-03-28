import axios from 'axios'

const baseURL = 'https://app.goodtogo.tw/manager'

function randomHex(length=10){
	let n = length, s = '';
	while(n--){
		s += (Math.random() * 16 | 0).toString(16)
	}
	return s
}

function login(phone, password) {
    const body = JSON.stringify({
        phone, password
    })

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'repTime': String(new Date().getTime()),
            'reqID': randomHex()
        }
    }

    return axios.post(baseURL+'/login', body, config)
}

const API = {
    login
}

export default API