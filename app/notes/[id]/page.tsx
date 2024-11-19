
'use client';

import DeleteNoteButton from "@/app/components/DeleteNoteButton";
import EditNote from "./EditNote";
// import UpdateButton from "./UpdateButton";
import { useState,useEffect, use } from "react";
import UpdateButton from "./UpdateButton";
import Link from 'next/link';



// async function getNote(noteId: string) {
//     const res = await fetch(`http://127.0.0.1:8090/api/collections/notes_app/records/${noteId}`, { next: {revalidate: 10}});
//     const data = await res.json();
//     console.log('fetchingggssgassgasg')
//     return data;
// }



// export default async function Note({params} : any){
export default function Note({params} : any){

    // try{
    // const note = await getNote(params.id)
    const [note, setNote] = useState<any>(null);

    useEffect(()=>{
        const fetchNote = async () =>{
            const res = await fetch(`https://zgecxo.pockethost.io/api/collections/notes_app/records/${params.id}`, { next: {revalidate: 10}});
            const data = await res.json();
            setNote(data);
        }
        fetchNote();
    }, []);

    if (!note) return <div>Loading...</div>;

    // const [newNote, setNewNote] = useState(note);

    // useEffect(() => {
    //     setNewNote(newNote);
    // }, []);
    const handleNoteUpdate = (updatedNote: any) => {
        setNote(updatedNote)
    }

    // 
    // }catch (error) {
        // console.error('Failed to get note data:', error);
    // }
    return (
        <div className="border border-yellow-700 w-[40vw] p-2 grid gap-y-2 bg-yellow-500 text-black rounded-md">
            <div className="flex justify-between">
                <div>
                    <Link href={"/notes"}>
                        <button className="text-md text-yellow-800 font-semibold hover:text-yellow-600">Back</button>
                    </Link>
                </div>
                <div className="relative">
                    <DeleteNoteButton noteId={note.id}/>
                </div>
            </div>
            <div>
                <EditNote note={note} onNoteUpdate={handleNoteUpdate}/>
            </div>
            <div>
                <UpdateButton note={note}/>
            </div>
        </div>
    )
}