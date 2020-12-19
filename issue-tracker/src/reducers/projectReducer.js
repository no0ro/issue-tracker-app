// update Redux Store
export default function projectReducer(state = {projects: []}, action) {
    // 6. action dispatch to reducer and updates Redux store
    switch (action.type){
        case 'FETCH_PROJECTS':
            return {projects: action.payload}
        case 'ADD_PROJECT':
            return {...state, projects: [...state.projects, action.payload]}
        case 'ADD_ISSUE':
            let projects = state.projects.map(project => {
                if (project.id === action.payload.id){
                    return action.payload
                } else {
                    return project
                }
            })
            return {...state, projects: projects}
        case 'DELETE_ISSUE':
            let projectsTwo = state.projects.map(project => {
                if (project.id === action.payload.id) {
                    return action.payload
                } else {
                    return project
                }
            })
            return {...state, projects: projectsTwo}
        default:
            return state
            // always want to return SOME version of our state
    }

}