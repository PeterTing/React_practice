import axios from 'axios'
import JWT from 'jsonwebtoken'

const baseURL = 'https://app.goodtogo.tw/dev'

const HeaderType = Object.freeze({
    DEFAULT: 'DEFAULT',
    USER_API_KEY: 'USER_API_KEY',
    JWT_ADD_ORDER_TIME: 'JWT_ADD_ORDER_TIME',
    JWT: 'JWT',
    API_KEY: 'API_KEY',
    JSON_CONTENT: 'JSON_CONTENT',
    NO_CACHE: 'NO_CACHE'
})

const uri = Object.freeze({
    login: '/users/login',
    containerList: '/containers/get/list',
    storeList: '/stores/list',
    createDeliveryList: '/deliveryList/create/'
})

const jwtFactory = {
    standard: (secretKey) => 
        JWT.sign({
            jti: 'manager',
            iat: Date.now(),
            exp: new Date().setDate(new Date().getDate() + 3)
        }, secretKey),
    addOrderTime: secretKey =>
        JWT.sign({
            jti: 'manager',
            iat: Date.now(),
            exp: new Date().setDate(new Date().getDate() + 3),
            orderTime: Date.now()
        }, secretKey)
}

function requestConfigHeaderWrapper(...types) {
    let config = {}
    const admin = JSON.parse(localStorage.admin)
    types.forEach(type => {
        switch (type) {
            case HeaderType.DEFAULT:
                config['reqTime'] = String(new Date().getTime())
                config['reqID'] = 'manager'
                return
            case HeaderType.USER_API_KEY:
                config['userApiKey'] = ''
                return
            case HeaderType.JWT_ADD_ORDER_TIME:
                config['Authorization'] = jwtFactory.addOrderTime(localStorage.admin.secretKey)
                config['apiKey'] = admin.apiKey
                return
            case HeaderType.JWT:
                config['Authorization'] = jwtFactory.standard(localStorage.admin.secretKey)
            case HeaderType.API_KEY:
                config['apiKey'] = admin.apiKey
                return
            case HeaderType.JSON_CONTENT:
                config['Content-Type'] = 'application/json'
                return
            case HeaderType.NO_CACHE:
                config['Cache-Control'] = 'no-cache'
        }
    })
    return config
}

function login(phone, password) {
    const body = {
        phone, password
    }

    const config = {
        headers: requestConfigHeaderWrapper(HeaderType.DEFAULT, HeaderType.JSON_CONTENT)
    }

    return axios.post(baseURL+'/users/login', body, config)
        .then((response) => JWT.decode(response.headers.authorization))
}

function getContainerList() {
    const config = {
        headers: requestConfigHeaderWrapper(HeaderType.DEFAULT)
    }
    return axios.get(baseURL+uri.containerList, config)
        .then(res => res.data)
}

function getStoreList() {
    const config = {
        headers: requestConfigHeaderWrapper(HeaderType.DEFAULT)
    }
    return axios.get(baseURL+uri.storeList, config)
        .then(res => res.data)
}

function createDeliveryList(storeId, box) {
    const config = {
        headers: requestConfigHeaderWrapper(HeaderType.JWT)
    }
    return axios.get(baseURL+uri.storeList, config)
        .then(res => res.data)
}

const API = {
    login, getContainerList, getStoreList
}

export default API