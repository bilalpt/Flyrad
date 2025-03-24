import React from 'react'
import homeflightimg2 from '../images/flightimg/homeflightimg2.jpg'

const Blog = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 ">
        {/* Title */}
        <h2 className="text-2xl font-bold border-b-4 border-red-600 pb-1 inline-block ">
          Blog
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 md:mt-14 md:pb-10">
          {/* Main Story */}
          <div className="md:col-span-2">
            <img
              src={homeflightimg2}
              alt="Main story"
              className="w-full h-96 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold text-blue-700 mt-3">
              Boeing Wins U.S. Air Force's NGAD F-47 Fighter Contract
            </h3>
            <p className="text-gray-700 mt-1">
              Boeing has won a contract to develop the F-47 next-generation combat
              aircraft for the U.S. Air Force, which throws a lifeline to the
              company’s struggling military aviation business.
            </p>
          </div>
  
          {/* Side Stories */}
          <div className="flex flex-col gap-6">
            <div>
              <img
                src={homeflightimg2}
                alt="Side story 1"
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="text-md font-semibold text-blue-700 mt-2">
                London Heathrow To Re-Open Sooner Than Expected After Nearby Fire
              </h4>
            </div>
  
            <div>
              <img
                src={homeflightimg2}
                alt="Side story 2"
                className="w-full h-32 object-cover rounded-md"
              />
              <h4 className="text-md font-semibold text-blue-700 mt-2">
                Trump Moves Prompt Some International F-35 Buyers To Reconsider
              </h4>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Blog
