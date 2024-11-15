'use client';
import { create } from "domain";
import { useRouter } from "next/navigation";
    
export default function UpdateButton( { note }: any ){
    const {id,title,content,created} = note || {};
    // const newNoteId = noteId

    const router = useRouter();
    const updateNote = async(e :any) => {

        e.preventDefault();
        try{
            await fetch(`http://127.0.0.1:8090/api/collections/notes_app/records/${id}`, {
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