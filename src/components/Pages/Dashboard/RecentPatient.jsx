function RecentPatient(props){
    return(
        <div>
            <h4>{props.id}</h4>
            <h4>{props.name}</h4>
            <h4>{props.gender}</h4>
            <h4>{props.blood}</h4>
            <h4>{props.status}</h4>
        </div>
    )
}