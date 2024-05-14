import React, { useState } from "react";
import './App.css';

const CreateNote = (props) => {

    const [note,setnote]=useState({
        title:"",
        content:""
    });

    const createnote=(evt)=>{
        const {value,name}=evt.target;

        setnote((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        })
        
    }

    const clkevent=()=>{
        props.passnote(note);
        setnote(({
            title:"",
            content:""
        }));
    }

    return (<>
        <div className="createnote">
            <div className="inrcreatenote">
                <input type="text" name="title" value={note.title} placeholder="Title" autoComplete="off" onChange={createnote} /><br/>
                <textarea rows='4' column='' name="content" value={note.content} placeholder="Write a note..." onChange={createnote}></textarea><br/>
                <button className="btnplus" onClick={clkevent}>+</button>
            </div>
        </div>
    </>);
}

export default CreateNote;