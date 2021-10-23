import React from 'react'
import Issues from './Issues'


const IssuesWorking = (props) => {

    const onChange = () => {
        alert("clicked")
        // let changeColor = props.working === true ? ""
        // tbd
    }

    return ( 
        <div>
                <h3>In Progress - Working: {props.issuesWorking}</h3>   
                
        </div>
    );
}

export default IssuesWorking










// pass issues components into this  to render





// {props.issues && props.issues.map( (issue) =>
//     <li key={issue.id} onClick={() => onChange()}>
//             {issue.description} -  {issue.kind} - {issue.working}  
//             {/* <Button variant="dark" size="sm" onClick={() => handleDelete(issue)}> x </Button> */}
//     </li>
    
// )} 







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

    // let filteredIssues = props.issues.filter( issue => issue.working === true)
