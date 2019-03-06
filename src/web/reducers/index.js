function visibilityFilter(state = "", action) {
    switch (action.type) {
        case "":
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter