function makeActionCreator(type, ...argNames) {
    return function (...args) {
        const action = { type }
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        })
        return action
    }
}


export const CHANGE_PAGE = 'CHANGE_PAGE'

export const changePage = makeActionCreator(CHANGE_PAGE, 'page')