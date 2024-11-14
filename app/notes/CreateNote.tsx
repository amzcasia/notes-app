'use client';

import { useState } from "react"
// import { useRouter } from "next/navigation";

export default function CreateNote(){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    // const router = useRouter();
    // const router = useRouter();

    const create = async() => {
        // await fetch('http://127.0.0.1:8090/api/collections/notes_app/records', {

        //     // api/collections/notes_app/records/
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     // body: JSON.stringify({
        //     //     title,
        //     //     content,
        //     // }),
        //     body: '{"title": "Sample Title", "content": "This is the content of the note."}',  // Hardcoded JSON string
        // });


        await fetch('http://127.0.0.1:8090/api/collections/notes_app/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: '{"title": "Sample Title", "content": "This is the content of the note."}',  // Hardcoded JSON string
        });

        setContent('');
        setTitle('');
        
        // router.refresh();
    }

    return(
        // <div className="w-96">
        //     <div>
        //         <p>Create a new Note</p>
        //     </div>
            <form className="flex flex-col space-y-2 justify-center text-black" onSubmit={create}>
                <input
                    className="px-2"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}>
                </input>
                <textarea
                    className="px-2 py-1"
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}>
                </textarea>
                <button className="bg-yellow-400 border text-black" type="submit">
                    Create note
                </button>
            </form>
        // </div>
    );
}