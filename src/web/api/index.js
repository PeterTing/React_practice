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
    deliveryList: '/deliveryList/box/list',
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
    const admin = localStorage.auth ? JSON.parse(localStorage.auth) : {}
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
                config['Authorization'] = jwtFactory.addOrderTime(admin.secretKey)
                config['apiKey'] = admin.apiKey
                return
            case HeaderType.JWT:
                config['Authorization'] = jwtFactory.standard(admin.secretKey)
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

function fetchContainerList() {
    const config = {
        headers: requestConfigHeaderWrapper(HeaderType.DEFAULT)
    }
    return axios.get(baseURL+uri.containerList, config)
        .then(res => res.data)
}

function fetchStoreList() {
    const config = {
        headers: requestConfigHeaderWrapper(HeaderType.DEFAULT)
    }
    return axios.get(baseURL+uri.storeList, config)
        .then(res => res.data)
}

function fetchDeliveryList() {
    const config = {
        headers: requestConfigHeaderWrapper(HeaderType.JWT)
    }
    return axios.get(baseURL+uri.deliveryList, config)
        .then(res => res.data)
}

function createDeliveryList(phone, storeId, dueDate, boxes) {
    const storeDict = JSON.parse(localStorage.stores)

    const config = {
        headers: requestConfigHeaderWrapper(HeaderType.JWT)
    }

    const body = {
        phone, 
        boxList: boxes.map(box=>({
            boxName: storeDict.find(({id})=>id === storeId).name,
            dueDate,
            boxOrderContent: box.containerTypes.map((set)=>({
                containerType: set.containerType, 
                amount: set.amount
            }))
        }))
    }
    return axios.post(baseURL+uri.createDeliveryList+`${storeId}`, body, config)
        .then(res => res.data)
}

const API = {
    login, fetchContainerList, fetchStoreList, fetchDeliveryList, createDeliveryList
}

export default API