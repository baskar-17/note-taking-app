const react = require("react")

function Note () {
    const timestamp = new Date().getDate();
return(
    <div className="note">
        <h1>DevTown</h1>
        <p className="description" >This is the place where you can learn</p>
        <p className="timestamp">Created on: {timestamp}</p>
    </div>
)
}

export default Note