export const addProject = (formData) => {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/projects', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(projectData => dispatch({
            type: 'ADD_PROJECT',
            payload: projectData
        })) 
    }
}