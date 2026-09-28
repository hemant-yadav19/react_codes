import React from 'react'
import LeftText from './LeftText'
import RightSection from './RightSection'

export default function PageContent() {
  return (
    <div className='px-10 flex items-center justify-between h-[90vh] gap-7'>
        <LeftText/>
        <RightSection/>
    </div>
  )
}
