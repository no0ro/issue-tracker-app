export function fetchProjects() {
    // console.log('inside fetch projects')

    // Thunk Closure! 
    return (dispatch) => {
    // dispatch as arg so can use it as action creator and dispatch the responce from our fetch frequests. Thanks Thunk
        
    // 5. action that fetches data from backend --> projectReducer.js
        fetch('http://localhost:3000/api/v1/projects')
        .then(res => res.json())
        .then(projectsData => dispatch({
            // MUST have 'type' key
            type: 'FETCH_PROJECTS',
            payload: projectsData
        })) // to update Redux Store, return action object
        // dispatching to reducer with a type of FETCH_PROJECTS and value projData
        // .then(data => console.log(data))

    }
}