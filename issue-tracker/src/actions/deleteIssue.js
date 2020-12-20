export const deleteIssue = (issueId, projectId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/projects/${projectId}/issues/${issueId}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(project => dispatch({type: 'DELETE_ISSUE', payload: project}))
    }
}


// try turning anonymous fn into named fn?
// export function deleteIssue(issueId, projectId) {
//     return (dispatch) => {
//        return fetch(`http://localhost:3000/api/v1/projects/${projectId}/issues/${issueId}`, {
//             method: 'DELETE'
//         })
//         .then(res => res.json())
//         .then(project => dispatch({type: 'DELETE_ISSUE', payload: project}))
//     }
// }