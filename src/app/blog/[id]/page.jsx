import Image from 'next/image'
import React from 'react'

const BlogPost = () => {
  return (
    <div className='container '>
      <div className='grid grid-cols-2'>
        <div className='relative h-[300px] w-[500px] p-8'>
          <Image
            src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
            alt='Hero image'
            fill={true}
            className=' mx-auto object-contain '
          />
        </div>
        <div className='mt-4 p-24'>
          <p className='pb-24'>
            Turning your Idea into Reality. We bring together the teams from the
            global tech industry.
          </p>
        </div>
      </div>
      <div className='flex h-24 w-full flex-row items-center ps-2'>
        <h4 className='p-2'>John Doe</h4>
        <div className='relative h-[30px] w-[30px]  p-8'>
          <Image
            src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
            alt='Hero image'
            fill={true}
            className=' mx-auto rounded-full object-cover'
          />
        </div>
      </div>

      <div className='mt-4'>
        <p>
          Lorem ipsum dolor sit amet. Quo quia distinctio sed exercitationem
          adipisci aut eaque omnis. Ea tempora animi est recusandae minima qui
          numquam quia ea pariatur voluptas At nesciunt placeat. Et quaerat quos
          et tempore voluptatum est quibusdam praesentium ut consequatur earum.
          Eum quos quidem quo ratione vero vel Quis nulla est perferendis
          aspernatur qui eligendi voluptatem. Rem adipisci repudiandae sit amet
          omnis sed dolores nihil. Non Quis magnam a minima porro est temporibus
          vitae sed fugiat atque et excepturi accusantium in aliquid quos est
          repellat quam. Ut esse libero ad reprehenderit maiores in galisum
          adipisci et neque quia ad maxime dolorem. Nam dolorem dolores et totam
          beatae non quasi quas ad distinctio libero id quod debitis et dolore
          temporibus. In unde eius ab rerum amet eos tenetur eaque At
          consectetur harum aut facilis quos quo porro enim aut suscipit
          deserunt.
        </p>
      </div>
    </div>
  )
}

export default BlogPost
