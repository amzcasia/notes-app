export default function Home(){

  // async function saveDataToTxt() {

  //   const res = await fetch('http://127.0.0.1:8090/api/collections/notes_app/records?page=1&perPage=30', { cache: 'no-store' });
    
  //   const data = await res.json();

  //   const resToTxt = JSON.stringify(data, null, 2);

  //   const fs = require('fs'); 

  //   fs.writeFile('response.txt', resToTxt, (err : any) => {
  //       if (err) {
  //         console.error('Error writing to file', err);
  //       } else {
  //         console.log('Response saved to response.txt');
  //       }
  //     });

  //   return 1;
  // }

  return (
    <div className="grid">
      <h1>This is the Home Page</h1>
      <p>
        Some content
      </p>
    </div>
  );
}