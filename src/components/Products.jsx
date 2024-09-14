import React from 'react'
import Card from './Card'
const Products = ({posts}) => {
  console.log(posts);
  return (
    posts.length <= 0? <div className='grow flex items-center justify-center'>No Posts Found</div> :
    <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto space-x-5 space-y-10 mb-10 place-items-center'>
        {
        posts.hits.map((post)=>(
          <Card post={post} key={post.id}/>
        ))
        }
    </div>
  )
}

export default Products
