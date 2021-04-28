import React from "react"

function Note(props){
    const {username,handleLogout} = props;
    return(
        <section className="hero">
            <nav>
                <h2>Hello {username}</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}
export default Note;