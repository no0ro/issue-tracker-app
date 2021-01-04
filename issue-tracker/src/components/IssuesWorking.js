import React from 'react'


const IssuesWorking = (props) => {

    const onChange = () => {
        alert("clicked")
        // let changeColor = props.working === true ? ""
    }

const issue = props.issue

    return ( 
        <div>
                <h3>In Profress: {issue}</h3>   
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
