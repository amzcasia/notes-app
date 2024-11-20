'use client';
import { create } from "domain";
import { useRouter } from "next/navigation";

const NEXT_PUBLIC_DATABASE_URL = process.env.NEXT_PUBLIC_DATABASE_URL;

export default function UpdateButton( { note }: any ){
    const {id,title,content,created} = note || {};
    // const newNoteId = noteId

    const router = useRouter();
    const updateNote = async(e :any) => {

        e.preventDefault();
        try{
            
            // await fetch(`https://zgecxo.pockethost.io/api/collections/notes_app/records/${id}`, {
            await fetch(`${NEXT_PUBLIC_DATABASE_URL}/api/collections/notes_app/records/${id}`, {

                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    content,
                }),
            });
            router.push('/notes');
        } catch (error) {
            console.error('Failed to update note:', error);
        }
    }

    return(
            <button className='text-md text-yellow-800 font-semibold hover:text-yellow-600' onClick={updateNote}>
                Save
            </button>
    )
}