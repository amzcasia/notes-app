'use client';

import { useState } from "react"
import { useRouter } from "next/navigation";

// const DATABASE_URL = process.env.DATABASE_URL;

export default function CreateNote(){
    const NEXT_PUBLIC_DATABASE_URL = process.env.NEXT_PUBLIC_DATABASE_URL;
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();
    // const router = useRouter();

    const create = async(e:any) => {
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
        
        e.preventDefault();
        
        // await fetch('https://zgecxo.pockethost.io/api/collections/notes_app/records', {
        await fetch(`${NEXT_PUBLIC_DATABASE_URL}/api/collections/notes_app/records`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'datatype': "json",
            },
            // body: '{"title": "Sample Title", "content": "This is the content of the note."}',  // Hardcoded JSON string
            body: JSON.stringify({
                title,
                content,
            }),
        });

        // return false;

        setContent('');
        setTitle('');
        
        router.refresh();
    }

    return(
        <div className="w-full mt-2">
            <div>
                <p>Create a new Note</p>
            </div>
            <form className="flex flex-col space-y-2 items-center text-black" onSubmit={create}>
                <input
                    className="px-2 rounded-md w-full"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}>
                </input>
                <textarea
                    className="px-2 py-1 rounded-md w-full"
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}>
                </textarea>
                <button className="bg-yellow-400 border text-black rounded-md px-4 py-1" type="submit">
                    Save
                </button>
            </form>
        </div>
    );
}