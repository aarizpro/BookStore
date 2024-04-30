import React,{useState,useEffect} from 'react'
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";

const EditBook = () => {
const [title,setTitle] = useState('');
const [author,setAuthor]= useState('');
const [publishYear,setPublishYear]= useState('');
const [loading,setLoading]= useState(false);
const navigate = useNavigate();
const {id}= useParams();

useEffect(()=>{
  setLoading(true);
  axios.get(`http://localhost:5555/books/${id}`)
  .then((response)=>{
    setAuthor(response.data.author);
    setTitle(response.data.title);
    setPublishYear(response.data.publishYear);
    setLoading(false);
  })
  .catch((error)=>{
    setLoading(false);
    //alert("Its not a Correct Data");

    console.log(error);
  });
},[]);


const handleEditBook =()=>{

  const data={
    title,
    author,
    publishYear,
  };
  setLoading(true);
  axios.put(`http://localhost:5555/books/${id}`,data)
  .then(()=>{
    setLoading(false);
    navigate('/');
  })
  .catch((error)=>{
    setLoading(false);
    alert("An Error Occured Check Console");
    console.log(error);
  });
};
  return (
    <div className='p=4'>
      <Backbutton/>
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading?<Spinner/>:''}
      <div className='flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'> Title</label>
          <input 
          type="text" 
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div> 
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input 
          type="text" 
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div> 
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'> Publish Year</label>
          <input 
          type="text" 
          value={publishYear}
          onChange={(e)=>setPublishYear(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div> 
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>Edit</button>
      </div>
    </div>
  )
}

export default EditBook;