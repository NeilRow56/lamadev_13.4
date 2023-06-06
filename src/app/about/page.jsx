import Image from 'next/image'
import Button from '@/components/button/Button'

const About = () => {
  return (
    <div className='container '>
      <div className='relative mt-4 h-[300px] w-full rounded-md border-2 border-red-600'>
        <Image
          src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          fill={true}
          alt=''
          className='object-cover'
        />
        <div className='absolute  bottom-12 left-1/2 -translate-x-1/2'>
          <h1 className=' bg-[#53c28b] px-3 py-1 text-5xl font-bold text-white'>
            Digital Storytellers
          </h1>
          <p className='bg-slate-500 px-3 py-1 text-white'>
            Handcrafting award winning digital experience
          </p>
        </div>
      </div>
      <div className='mb-4 grid grid-cols-2 gap-4'>
        <div className='mt-4 rounded-md border-2 border-red-600 p-24'>
          <h1 className='bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text pb-24 text-6xl text-transparent'>
            Better design for your digital products.
          </h1>
          <p className='pb-24'>
            Turning your Idea into Reality. We bring together the teams from the
            global tech industry.
          </p>
          <Button url='/contact' text='Contact' />
        </div>
        <div className='mt-4 rounded-md border-2 border-red-600 p-24'>
          <h1 className='bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text pb-24 text-6xl text-transparent'>
            Digital Products.
          </h1>
          <p className='pb-24'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&pos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
