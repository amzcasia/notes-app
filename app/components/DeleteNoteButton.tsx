'use client';
import { useRouter } from "next/navigation";
    
export default function DeleteNoteButton( { noteId }: any ){

    // const newNoteId = noteId

    const router = useRouter();
    const deleteNote = async(e :any) => {

        e.preventDefault();
        try{
            await fetch(`https://zgecxo.pockethost.io/api/collections/notes_app/records/${noteId}`, {
                method: 'DELETE',
            });
            router.push('/notes');
        } catch (error) {
            console.error('Failed to delete note:', error);
        }
    }

    return(
            <button className='px-1 text-red-600 font-bold absolute right-1 top-1 hover:text-red-400' onClick={deleteNote}>
                Delete
            </button>
    )
}