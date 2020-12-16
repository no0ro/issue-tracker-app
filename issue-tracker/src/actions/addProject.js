// passed in the setState formData from ProjectInput Form

export const addProject = (formData) => {
    // must pass in dispatch so we can import it into the input file and then connect it to the action

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
            // we want to Dispatch this new project that we just created. goes straight to reducer
            type: 'ADD_PROJECT',
            payload: projectData
        })) 
    }
}