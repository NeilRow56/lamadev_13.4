import Button from '@/components/button/Button'
import Image from 'next/image'
import Hero from 'public/hero.png'

export default function Home() {
  return (
    <div className='container '>
      <div className='grid grid-cols-2'>
        <div className='mt-4 rounded-md border-2 border-red-600 p-24'>
          <h1 className='bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text pb-24 text-6xl text-transparent'>
            Better design for your digital products.
          </h1>
          <p className='pb-24'>
            Turning your Idea into Reality. We bring together the teams from the
            global tech industry.
          </p>
          <Button url='/portfolio' text='See Our Works' />
        </div>
        <div className='p-24'>
          <Image src={Hero} alt='Hero image' className='mx-auto ' />
        </div>
      </div>
    </div>
  )
}
