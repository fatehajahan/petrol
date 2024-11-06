
import React from 'react'

const ReadBlogOther = ({ children }) => {
    const readArr = ["lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod."]

    return (
        <>
            {
                readArr.map((item) => (
                    <div lala={item}>
                        <div className="relative image1 md:mt-0 mt-6">
                            <div className=" bg-[rgb(0,0,0,0.5)] md:w-[339px] w-full h-full absolute top-0 left-0"></div>
                            {children}
                            <a href="#" className='absolute top-0 left-0 text-white font-semibold md:py-[13px] py-[6px] px-[10px] md:px-[40px] bg-[rgb(255,255,255,0.5)] hover:bg-white hover:text-black hover:duration-1000 md:mt-[307px] mt-[250px] md:ml-[46px] ml-[90px]'>LEARN MORE</a>
                        </div>
                    </div>
                ))
            }
        </>

    )
}

export default ReadBlogOther