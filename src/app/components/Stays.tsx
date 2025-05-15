import React from 'react'
import StayForm from './StayForm'


function Stays() {
  return (
    <div className="bg-gray-100 py-8 px-4 md:px-16">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
        Find your next stay
      </h1>
      <p className="text-sm md:text-base text-gray-700">
        Search deals on hotels, homes, and much more...
      </p>
    <StayForm />

    </div>
  )
}

export default Stays