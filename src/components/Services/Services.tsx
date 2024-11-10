import React from 'react'

type Props={
    clasName:string
}


const Services: React.FC<Props> =({clasName})=> {
  return (
    <div className={`${clasName} w-full `}>
         <div className=" w-full flex flex-col mt-3">
            {/* <div className="about-us-section">
      <p className="text-gray-400 text-xs tracking-[8px]">OUR SERVICES</p>
      <div className="border-container flex justify-center">
          <div className="relative border-line w-[150px] border-[6px] border-orange-500">
              <span className="star absolute left-0 -top-[12px]">★</span>
          </div>
      </div>
  </div> */}
              <p className="py-5 text-lg font-bold">WHO AM I?</p>
              <p className="mt-12">
                <span className="font-bold">Hi I,m Jackson Ford</span> On her way
                she met a copy. The copy warned the Little Blind Text, that where
                it came from it would have been rewritten a thousand times and
                everything that was left from its origin would be the word and
                and the Little Blind Text should turn around and return to its
                own, safe country.
              </p>
            
            </div>
      
    </div>
  )
}

export default Services
