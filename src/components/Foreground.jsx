// import React from 'react'
import { useRef } from 'react';
import Card from '../Card'


function Foreground() {
  // const data = [
  //   desc,color,filesize,closeOrDownload,tagdetails
  // ];

  const ref = useRef(null);

  const data = [
    { desc: "This is the background color of the Card that will be displayed.",
    filesize: ".9mb", 
    close: true, 
    tag: { isOpen: true ,tagTitle:"Download Now",tagColor:"bg-blue-600" } },

    { desc: "This is the background color of the Card that will be displayed.",
    filesize: ".9mb", 
    close: true, 
    tag: { isOpen: true ,tagTitle:"Download Now",tagColor:"bg-orange-600" } },

    { desc: "This is the background color of the Card that will be displayed.",
    filesize: ".9mb", 
    close: true, 
    tag: { isOpen: true ,tagTitle:"Upload",tagColor:"bg-yellow-600" } },

    { desc: "This is the background color of the Card that will be displayed.",
    filesize: ".9mb", 
    close: true, 
    tag: { isOpen: true ,tagTitle:"Upload",tagColor:"bg-green-600" } },

    { desc: "This is the background color of the Card that will be displayed.",
    filesize: ".9mb", 
    close: true, 
    tag: { isOpen: true ,tagTitle:"Upload",tagColor:"bg-pink-600" } },

    { desc: "This is the background color of the Card that will be displayed.",
    filesize: ".9mb", 
    close: true, 
    tag: { isOpen: true ,tagTitle:"Upload",tagColor:"bg-violet-800" } }
  ];



  return (
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-screen flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
          <Card data={item} reference={ref}/>
        ))}
      </div>
  )
}

export default Foreground