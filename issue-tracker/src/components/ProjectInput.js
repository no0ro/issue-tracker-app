// form to make new Projects. bc form, needs state, so Class

import React from 'react'

class ProjectInput extends React.Component{

    render() {
        return (
            <div>   
                <form>
                    <label> Project Name: </label>
                    <input type='text' placeholder="Name"/> 
                    

                </form>
            </div>
        )

    }
}

export default ProjectInput