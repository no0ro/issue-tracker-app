import React from 'react'

const Issues = (props) => {
    console.log(props.issues)

    return (
        <div>
            {props.issues && props.issues.map(issue => 
                <li key={issue.id}>{issue.description}</li>
            )}
        </div>
    )
}

export default Issues