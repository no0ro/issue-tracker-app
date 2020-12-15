export function fetchProjects() {
    
    fetch('http://localhost:3000/api/v1/projects')
    .then(res => res.json())
    .then(data => console.log(data))
    
}