import React from 'react'

const Card = () => {
    return (
        <div className='
        flex 
        mm:flex-col
        md:flex-row
        items-center 
        justify-center
        xl:px-28 '>
            <div className='
            flex 
            
            items-center 
            justify-center 
            text-center
            bg-gradient-to-br 
            from-green-500 
            to-green-950 
            text-white
            rounded-md
            m-7
            py-2
            mm: w-5/6
            mm:h-32
            md:w-4/6
            md:h-32 
            '>
                <h1 className=' text-5xl md:text-4xl font-bold lg:text-5xl mx-2 md:ml-01'>20</h1>
                <h3 className=' text-2xl md:text-xl md:mr-01'>Co-Agent</h3>
            </div>
            <div className='
            flex 
            items-center 
            justify-center 
            text-center
            bg-gradient-to-br 
            from-green-500 
            to-green-950 
            text-white
            rounded-md
            m-7
            mm: w-5/6
            mm:h-32
            md:ml-0
            md:mr-3
            py-2
            md:w-4/6
            md:h-32 
            '>
                <h1 className='text-5xl font-bold lg:text-5xl md:text-4xl mx-2 md:ml-01'>356</h1>
                <h3 className='text-2xl md:text-xl md:mr-01'>Digital <br /> Product</h3>
            </div>
            <div className='
            flex 
            items-center 
            justify-center 
            text-center
            bg-gradient-to-br 
            from-green-500 
            to-green-950 
            text-white
            rounded-md
            m-7
            md:ml-3
            md:mr-0
            mm: w-5/6
            mm:h-32
            py-2
            md:w-4/6
            md:h-32 
            
            '>
                <h1 className='text-5xl font-bold lg:text-5xl md:text-4xl mx-2 md:ml-01'>2K</h1>
                <h3 className='text-2xl md:text-xl md:mr-01'>Total <br /> Product</h3>
            </div>
            <div className='
            flex 
            items-center 
            justify-center 
            text-center
            bg-gradient-to-br 
            from-green-500 
            to-green-950 
            text-white
            rounded-md
            mm:m-7
            py-2
            mm: w-5/6
            mm:h-32
            md:w-4/6
            md:h-32 
            '>
                <h1 className='text-5xl font-bold lg:text-5xl md:text-4xl mx-2 md:ml-01'>1.1K</h1>
                <h3 className='text-2xl md:text-xl md:mr-01'>Our Happy <br /> Claint</h3>
            </div>

        </div>
    )
}

export default Card