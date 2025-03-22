import React from 'react'
import homeflightimg2 from '../images/flightimg/homeflightimg2.jpg'

const Blog = () => {
    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Title */}
            <h2 className="text-2xl font-bold border-b-2 border-red-600 inline-block mb-4">
                Top Stories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Main story */}
                <div className="md:col-span-2">
                    <img src={homeflightimg2} alt="Main story" className="w-full h-auto rounded-md" />
                    <h3 className="text-xl font-semibold text-blue-700 mt-2">
                        Heathrow Shutdown Wreaks Havoc On Airline Operations
                    </h3>
                    <p className="text-gray-700">
                        Airlines are scrambling to re-jig their schedules following the
                        closure of London Heathrow Airport caused by a major power outage.
                    </p>
                </div>

                {/* Side stories */}
                <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                        <img src={homeflightimg2} alt="Side story 1" className="w-28 h-28 object-cover rounded-md" />
                        <div>
                            <h4 className="text-md font-semibold text-blue-700">
                                ESA Plans European Launcher Challenge Tender Next Week
                            </h4>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <img src={homeflightimg2} alt="Side story 2" className="w-28 h-28 object-cover rounded-md" />
                        <div>
                            <h4 className="text-md font-semibold text-blue-700">
                                Trump Moves Prompt Some International F-35 Buyers To Reconsider
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
