import Link from 'next/link';
import CreateNote from './CreateNote';
import DeleteNoteButton from '../components/DeleteNoteButton';

async function getNotes() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/notes_app/records?page=1&perPage=30', { cache: 'no-store' });
    
    const data = await res.json();

    const resToTxt = JSON.stringify(data, null, 2);

    const fs = require('fs'); 

    fs.writeFile('response.txt', resToTxt, (err : any) => {
        if (err) {
          console.error('Error writing to file', err);
        } else {
          console.log('Response saved to response.txt');
        }
      });

    return data?.items as any[];
}

export default async function Notes(){
    const notes = await getNotes();

    return(
        <div className='flex flex-col items-center w-[40vw]'>
            <h1>Notes</h1>
            <div className='grid w-full'>
                {notes?.map((note)=>{
                    return <NoteList key={note.id} note={note} />
                })}
            </div>
            <CreateNote />
        </div>
    )
}


function NoteList({ note }: any){
    const {id,title,content,created} = note || {};

    return (
        <div  className="border border-yellow-700 m-1 p-2 bg-yellow-500 text-black rounded-md relative">
            <div className='flex justify-end'>
                <DeleteNoteButton noteId={id}/>
            </div>
            <Link  href={`/notes/${id}`}>
                <div>
                    <h2 className='font-bold text-lg'>{title}</h2>
                    <h5>{content}</h5>
                    <p className='text-xs text-gray-700'>{created}</p>
                </div>
            </Link>
        </div>
    )
}