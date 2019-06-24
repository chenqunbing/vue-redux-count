const initState = {
    count: 0
}

export default (state = initState, actions) => {
    const { count }  = state
    switch(actions.type) {
        case "add": {
            return {
                count: count+1
            }
        }
        case 'reduce':
            return {
                count: count-1
            }
        default:
            return state
    }
}