import React from 'react'

const BlogLayout = ({ children }) => {
  return (
    <div className='container mx-auto '>
      <div className='mt-4 w-full  '>
        <h1 className='  py-1 text-5xl font-bold  text-[#53c28b]'>Our Works</h1>
      </div>
      {children}
    </div>
  )
}

export default BlogLayout
