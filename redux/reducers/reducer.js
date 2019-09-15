const initialState = {
    startup: false,
    developer: false,
    ml: false,
    twitter: false,
    contact: false,
    kgp: false,
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_STARTUP':
            return Object.assign({}, state, {
                startup: !state.startup,
            })
        case 'TOGGLE_DEVELOPER':
            return Object.assign({}, state, {
                developer: !state.developer,
            })
        case 'TOGGLE_ML':
            return Object.assign({}, state, {
                ml: !state.ml,
            })
        case 'TOGGLE_TWITTER':
            return Object.assign({}, state, {
                twitter: !state.twitter,
            })
        case 'TOGGLE_CONTACT':
            return Object.assign({}, state, {
                contact: !state.contact,
            })
        case 'TOGGLE_KGP':
            return Object.assign({}, state, {
                kgp: !state.kgp,
            })
        default:
            return state
    }
}


export default reducer