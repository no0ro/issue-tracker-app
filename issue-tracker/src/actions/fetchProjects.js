export function fetchProjects() {
    
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/projects')
        .then(res => res.json())
        .then(projectsData => dispatch({
            type: 'FETCH_PROJECTS',
            payload: projectsData
        })) 
    }
}