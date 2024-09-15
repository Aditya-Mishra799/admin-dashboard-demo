import React from 'react'
import Link from 'next/link'
import { ArrowLeftCircleIcon } from 'lucide-react'
const BackButton = ({text, link}) => {
  return (
    <Link href = {link} className='text-gray-500 hover:underline flex items-center gap-1 font-bold mb-5'>
        <ArrowLeftCircleIcon size={18} />
        {text}
    </Link>
  )
}

export default BackButton