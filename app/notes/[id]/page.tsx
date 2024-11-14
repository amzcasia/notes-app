

async function getNote(noteId: string) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/notes_app/records/${noteId}`, { next: {revalidate: 10}});
    
    const data = await res.json();
    return data;
}

export default async function Note({params} : any){
    const note = await getNote(params.id)
    return (
        <div className="border border-white w-96 p-2 grid gap-y-2">
            <div className="flex justify-end gap-x-2">
                <button>
                    Edit
                </button>
                <button>
                    Delete
                </button>
            </div>
            <h3 className="text-lg font-bold">{note.title}</h3>
            <h5>{note.content}</h5>
            <p className="text-sm text-gray-500">{note.created}</p>
        </div>
    )
}