import Link from 'next/link'
const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className='rounded bg-[#53c28b] px-4 py-2 text-white  shadow outline-none hover:bg-amber-300  active:bg-amber-700'>
        {text}
      </button>
    </Link>
  )
}
export default Button
