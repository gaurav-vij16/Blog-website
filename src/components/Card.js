import React from 'react';

function Card({ post }) {
    return (
        <div className=' mb-12'>

        <div className="max-w-[650px] flex flex-col ">
            <h2 className='font-bold  mb-3 text-md'>{post.title}</h2>
            <p className=' mb-1'>By <span className='italic'>{post.author}</span> on <span className='underline font-bold'> {post.category} </span></p>
            <p className=' mb-4'>posted on <span>{post.date}</span></p>
            <p className=''>{post.content}</p>

   
            </div>

        <div className='flex flex-row gap-x-2'>

            {post.tags.map((tag, index) => (
                <p className='underline text-blue-700 font-bold' key={index}><span>#</span>{tag}</p>
            ))}
        </div>

        </div>

           
    );
}

export default Card;
