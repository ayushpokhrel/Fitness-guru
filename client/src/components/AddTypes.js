import React,{useState} from 'react';
import axios from 'axios';

const AddTypes = () => {
    const[name,setType]=useState('');
    const[description,setDes]=useState('');
    const[file,setFile]=useState(null);
  const[msg,setMsg]=useState('')

    const handleSubmit=(e)=>{
      e.preventDefault();
      // handleFileChange();

      /*Learning is fun just knew we can submit all data at once like this, 
      still i am following traditional method of sending that so i am commenting this
       {name,description,url,file}
*/
      const formData=new FormData();
      formData.append('file',file);
      formData.append('name',name);
      formData.append('description',description);
      axios.post('http://localhost:3005/gymtype', formData)
        .then(response=>console.log(response.data)).then(setMsg('type added'));
    }
    const handleFileChange=(e)=>{
      setFile(e.target.files[0]);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="New type" value={name} onChange={(e)=>setType(e.target.value)}/>
        <input type="text" placeholder="Description" value={description} onChange={(e)=>setDes(e.target.value)}/>
        <input type="file" onChange={handleFileChange} />
        <input type='submit' value="Send"/>
        {msg}
        </form>
        
    </div>
  )
}

export default AddTypes