import Link from 'next/link'
import Hero from 'public/hero.png'

const Portfolio = () => {
  return (
    <div className='container '>
      <div className='mt-4 w-full  '>
        <h4 className='   py-1 text-xl  text-slate-600'>Choose a gallery</h4>
      </div>
      <div className='mb-4 grid  grid-cols-3 gap-4'>
        <div
          className=' relative mt-4  h-[550px] w-[450px] rounded-md border-2
		border-red-600
		bg-pack-train  bg-cover bg-center bg-no-repeat p-24 '
        >
          <Link
            href='/portfolio/applications'
            className='absolute bottom-12  left-[150px] -translate-x-1/2 text-3xl font-bold text-white hover:text-green-700'
          >
            Applications
          </Link>
        </div>
        <div
          className=' relative mt-4  h-[550px] w-[450px]
		rounded-md
		border-2  border-red-600 bg-pack-train1 bg-cover bg-center bg-no-repeat p-24'
        >
          <Link
            href='/portfolio/illustrations'
            className=' absolute  bottom-12 left-[150px] -translate-x-1/2 text-3xl font-bold text-white hover:text-green-700'
          >
            Illustrations
          </Link>
        </div>
        <div
          className=' relative mt-4 h-[550px] w-[450px] rounded-md border-2
		border-red-600
		bg-pack-train2  bg-cover bg-center bg-no-repeat p-24 '
        >
          <Link
            href='/portfolio/websites'
            className=' absolute  bottom-12 left-[150px] -translate-x-1/2 text-3xl font-bold text-white hover:text-green-700'
          >
            Websites
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
