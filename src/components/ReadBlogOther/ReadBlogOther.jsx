
import React from 'react'

const ReadBlogOther = ({children}) => {
    return (
        <div>
            <div className="relative image1 ">
                
                <div className=" bg-[rgb(0,0,0,0.5)] w-[339px] h-full absolute top-0 left-0"></div>
                {children}
                <a href="#" className='absolute top-0 left-0 text-white font-semibold py-[13px] px-[23px] bg-[rgb(255,255,255,0.5)] hover:bg-white hover:text-black hover:duration-1000 mt-[307px] ml-[46px]'>LEARN MORE</a>
            </div>
        </div>
    )
}

export default ReadBlogOther