import DeleteNoteButton from "@/app/components/DeleteNoteButton";
import TestButton from "@/app/components/TestButton";
import Link from "next/link";

async function getNote(noteId: string) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/notes_app/records/${noteId}`, { next: {revalidate: 10}});
    
    const data = await res.json();
    return data;
}

export default async function Note({params} : any){
    // try{
        const note = await getNote(params.id)
    // }catch (error) {
        // console.error('Failed to get note data:', error);
    // }
    return (
        <div className="border border-white w-96 p-2 grid gap-y-2">
            <div className="flex relative gap-x-2">
                <div className="left-2 top-2">
                    <DeleteNoteButton noteId={note.id}/>
                    <Link href={"/notes"}>
                        Back
                    </Link>
                </div>
                
                
                {/* <TestButton/> */}
            </div>
            <h3 className="text-lg font-bold">{note.title}</h3>
            <h5>{note.content}</h5>
            <p className="text-sm text-gray-500">{note.created}</p>
        </div>
    )
}