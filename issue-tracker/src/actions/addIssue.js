export const addIssue = (issue, projectId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/projects/${projectId}/issues`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(issue)
        })
        .then(res => res.json())
        .then(project => {
            if (project.error) {
                alert(project.error)
            } else {
                dispatch({type: 'ADD_ISSUE', payload: project})
            }
        }
        )
    }

}