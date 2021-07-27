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
                developer: false,
                ml: false,
                twitter: false,
                contact: false,
                kgp: false,
            })
        case 'TOGGLE_DEVELOPER':
            return Object.assign({}, state, {
                developer: !state.developer,
                startup: false,
                ml: false,
                twitter: false,
                contact: false,
                kgp: false,
            })
        case 'TOGGLE_ML':
            return Object.assign({}, state, {
                ml: !state.ml,
                startup: false,
                developer: false,
                twitter: false,
                contact: false,
                kgp: false,
            })
        case 'TOGGLE_TWITTER':
            return Object.assign({}, state, {
                twitter: !state.twitter,
                startup: false,
                developer: false,
                ml: false,
                contact: false,
                kgp: false,
            })
        case 'TOGGLE_CONTACT':
            return Object.assign({}, state, {
                contact: !state.contact,
                startup: false,
                developer: false,
                ml: false,
                twitter: false,
                kgp: false,
            })
        case 'TOGGLE_KGP':
            return Object.assign({}, state, {
                kgp: !state.kgp,
                startup: false,
                developer: false,
                ml: false,
                twitter: false,
                contact: false,
            })
        default:
            return state
    }
}


export default reducer