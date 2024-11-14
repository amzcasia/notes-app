import Link from 'next/link';
import CreateNote from './CreateNote';

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
        <div>
            <h1>Notes</h1>
            <div className='grid w-96'>
                {notes?.map((note)=>{
                    return <Note key={note.id} note={note} />
                })}
            </div>
            <CreateNote />
        </div>
    )
}


function Note({ note }: any){
    const {id,title,content,created} = note || {};

    return (
        <Link  href={`/notes/${id}`}>
            <div className="border border-white m-2 p-2 bg-yellow-500 text-black rounded-md">
                <h2 className='font-bold text-lg'>{title}</h2>
                <h5>{content}</h5>
                <p>{created}</p>
            </div>
        </Link>
    )
}