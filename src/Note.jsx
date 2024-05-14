    import React from "react";

    const Note=(props)=>{

        const deleteNote=()=>{
            props.deleteitem(props.id);
        }

        return(<>
            <div className="note">
                <div className="innernote">
                    <h1>{props.title}</h1>
                    <p>{props.content}</p>
                    <button className="btndel" onClick={deleteNote}>Delete</button>
                </div>
            </div>
        </>);
    }

    export default Note;