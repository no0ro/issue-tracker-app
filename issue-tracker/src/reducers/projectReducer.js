export default function projectReducer(state = {projects: []}, action) {
    switch (action.type){
        case 'FETCH_PROJECTS':
            return {projects: action.payload}
        default:
            return state
            // always want to return SOME version of our state
    }

}