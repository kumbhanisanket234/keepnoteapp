import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import './App.css';


function App() {

  const [additem,setadditem]=useState([]);

  const getcontent=(note)=>{
     //alert('clicked!');
    
     setadditem((prevData)=>{
      return [...prevData,note];
     });
     
     console.log(note);
  }


  const ondelete=(id)=>{
      setadditem((olddata)=>
        olddata.filter((currdata,indx)=>{
          return indx!==id;
      })
      )
  }

  return ( 
    <>
      <Header/>
      <CreateNote passnote={getcontent}/>
      
      {
        additem.map((val,index)=>{
          return <div className='returnnotediv'> <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteitem={ondelete}  
          />
          </div>
        })
      }
      <Footer/>
    </>
  );
}

export default App;
