'use client';
import { useState,useEffect } from "react"

// interface EditNoteProps {
//     note: any;
//     onNoteUpdate: (updatedNote: any) => void;
// }

export default function EditNote( {note,onNoteUpdate}: any){
    // const initTitle = noteTitle
    // const initTitle = noteTitle
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    // useEffect(() => {
    //     setTitle(note.title);
    //     setContent(note.content);
    // }, []);

    useEffect(() => {
        onNoteUpdate({...note, title, content});
        console.log("note updated")
    }, [title,content]);

    return(
        <div className="grid space-y-2">
            <input 
                className="text-lg font-bold cursor-text border border-yellow-700 px-2 bg-yellow-500"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}>
            </input>
            {/* <textarea className=" cursor-text border border-yellow-700 px-2 bg-yellow-500">
                Content
            </textarea> */}

            <textarea
                    className="cursor-text border border-yellow-700 px-2 bg-yellow-500"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}>
                </textarea>
            <p className="text-xs cursor-default text-gray-500">{note.created}</p>
        </div>
    )
}