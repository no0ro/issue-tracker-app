import React from 'react'

const Items = (props) => {
    console.log(props.items)

    return (
        <div>
            {props.items && props.items.map(item => 
                <li key={item.id}>{item.description}</li>
            )}
        </div>
    )
}

export default Items