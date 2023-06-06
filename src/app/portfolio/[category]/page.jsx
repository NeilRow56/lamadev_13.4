import Button from '@/components/button/Button'
import Image from 'next/image'
import Hero from 'public/hero.png'

const Category = ({ params }) => {
  return (
    <div>
      <h1 className='ml-4 font-bold capitalize text-[#53c28b]'>
        {params.category}
      </h1>
      <div className='container mb-4'>
        <div className=' grid grid-cols-2 gap-4'>
          <div className='  p-24'>
            <h1 className='bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text pb-24 text-6xl text-transparent'>
              Better design for your digital products.
            </h1>
            <p className='pb-24'>
              Turning your Idea into Reality. We bring together the teams from
              the global tech industry.
            </p>
            <Button url='/' text='See More' />
          </div>
          <div className='relative  '>
            <Image
              src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
              alt='Hero image'
              fill={true}
              className=' mx-auto object-cover '
            />
          </div>
          <div className='relative  '>
            <Image
              src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
              alt='Hero image'
              fill={true}
              className=' mx-auto object-cover '
            />
          </div>
          <div className='  p-24'>
            <h1 className='bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text pb-24 text-6xl text-transparent'>
              Better design for your digital products.
            </h1>
            <p className='pb-24'>
              Turning your Idea into Reality. We bring together the teams from
              the global tech industry.
            </p>
            <Button url='/' text='See More' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
