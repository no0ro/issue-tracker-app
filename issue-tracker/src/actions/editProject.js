export const addProject = (data) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/projects/${data.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(project => dispatch({
            type: 'EDIT_PROJECT',
            payload: project
        })) 
    }
}