export default function projectReducer(state = {projects: []}, action) {
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
            // test
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
        case 'EDIT_PROJECT':
            let projectsThree = state.projects.map(project => {
                if (project.id === action.payload.id) {
                    return action.payload
                } else {
                    return project
                }
            })
            return {...state, projects: projectsThree}
        default:
            return state 
    }
}