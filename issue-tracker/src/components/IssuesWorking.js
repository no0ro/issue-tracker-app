import React from 'react'


const IssuesWorking = (props) => {

    const onChange = () => {
        alert("clicked")
        // let changeColor = props.working === true ? ""
    }

    return ( 

    <div>
            <h3>Working: </h3>
        {props.issues && props.issues.map( (issue) => 
                <li key={issue.id} onClick={() => onChange()}>
                        {issue.description} -  {issue.kind} - {issue.working}  
                        {/* <Button variant="dark" size="sm" onClick={() => handleDelete(issue)}> x </Button> */}
                    </li>
                    
                )}
        
            </div>
        );
}

export default IssuesWorking

// pass issues components into this  to render



// return ( 
//     <div onClick={() => onChange()}>
//                 {props.issues && props.issues.map( (issue) => 
//                     <li key={issue.id}>
//                         {issue.description} -  {issue.kind} - {issue.working}  
//                         <Button variant="dark" size="sm" onClick={() => handleDelete(issue)}> x </Button>
//                     </li>
                    
//                 )}
//                 <IssuesWorking issues={props.issues}/>
        
//             </div>
//         );