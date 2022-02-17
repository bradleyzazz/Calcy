import "./FiveMostRecent.css";

function FiveMostRecent({mostRecent}) {
    return (
        <div>
            <h2>5 Most Recent</h2>
            <div>
                {mostRecent.map( calc => (
                    <div>{calc}</div>
                ))}
            </div>
        </div>
    )
}

export default FiveMostRecent;