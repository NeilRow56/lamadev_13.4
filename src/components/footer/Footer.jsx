import Image from "next/image"

const Footer = () => {
  return (
    <footer className='bg-slate-300 py-4 text-center text-slate-800'>
      <div className='container flex flex-col justify-between px-64'>
        <p className='text-sm uppercase tracking-wide'>©2023 Lamamia. All rights reserved.</p>
      
      <div className="flex gap-8 mx-auto py-3">
        <Image src="/1.png" alt="Lama Dev" width={20} height={20} />
        <Image src="/2.png" alt="Lama Dev" width={20} height={20} />
        <Image src="/3.png" alt="Lama Dev" width={20} height={20} />
        <Image src="/4.png" alt="Lama Dev" width={20} height={20} />
      </div>
      </div>
    </footer>
  )
}

export default Footer

