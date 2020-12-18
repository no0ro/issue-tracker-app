export const deleteIssue = () => {
    return (dispatch) => {
        return fetch(`http://`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then()
    }
}