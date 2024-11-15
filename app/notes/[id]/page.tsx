// 'use client';

import DeleteNoteButton from "@/app/components/DeleteNoteButton";
import TestButton from "@/app/components/TestButton";
import Link from "next/link";
// import { useState } from "react"

async function getNote(noteId: string) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/notes_app/records/${noteId}`, { next: {revalidate: 10}});
    
    const data = await res.json();
    return data;



}

export default async function Note({params} : any){
    // try{
    const note = await getNote(params.id)
    // const [content, setContent] = useState('');
    // }catch (error) {
        // console.error('Failed to get note data:', error);
    // }
    return (
        <div className="border border-yellow-700 w-[40vw] p-2 grid gap-y-2 bg-yellow-500 text-black rounded-md">
            <div className="flex justify-between">
                <div>
                    <Link href={"/notes"}>
                        <p className="text-md text-yellow-800 font-semibold hover:text-yellow-600">Back</p>
                    </Link>
                </div>
                <div className="relative">
                    <DeleteNoteButton noteId={note.id}/>
                </div>
            </div>
            <div className="grid space-y-2">
                <p className="text-lg font-bold cursor-text border border-yellow-700 px-2">{note.title}</p>
                <p 
                    className=" cursor-text border border-yellow-700 px-2 bg-yellow-500" 
                    // onChange={(e) => setContent(e.target.value)}
                    // value={content}
                >
                    {note.content}
                </p>
                <p className="text-sm cursor-default text-gray-500">{note.created}</p>
            </div>
        </div>
    )
}