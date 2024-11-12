import React, {useContext,useState, useEffect} from 'react'
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { SiHtml5 } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { TiMicrophoneOutline } from "react-icons/ti";
import { FiSend } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import {Context} from '../context/Context';
import askifyLogo from "../assets/AskifyLogo.jpg"

const MainContent = () => {
    const {
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        // prevPrompt,
        // setPrevPrompt,
        showResult,
        loading,
        resultData,
        onSent, 
} = useContext(Context)
    
  return (
  
<div className="flex-1 min-h-screen pb-[15vh] relative bg-gradient-to-t from-teal-100 to-teal-100 ">
    <div className="flex items-center justify-between text-xl p-10 text-slate-1000 ">
        <p className="text-3xl font-bold text-gray-950">Askify</p>
        <FaUserAlt />
    </div>

    <div className="max-w-[900px] mx-auto">
        {!showResult ? (
        <>
            <div className="my-12 text-[56px] text-slate-500 font-semibold p-5">
                <p>
                    <span className="bg-gradient-to-r from-[#f0e80a] to-[#2b64ff] bg-clip-text text-transparent font-bold text-6xl">
                    Hey, there...
                    </span>
                </p>
                <p className="text-gray-800">How may I assist you? </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 mb-1 mt-10">

                {/* 1. suggestion */}

                <div className="h-[200px] p-4 bg-gradient-to-t from-blue-100 to-blue-100 rounded-lg relative cursor-pointer shadow-lg hover:from-yellow-100 hover:to-yellow-100">
                    <p className="text-gray-800 text-lg">Suggest Some Features of Askify.</p>

                    <MdOutlineFeaturedPlayList className="text-4xl p-1 absolute bottom-2 right-2" />
                </div>

                {/* 2. suggestion*/}

                <div className="h-[200px] p-4 bg-gradient-to-t from-blue-100 to-blue-100 rounded-lg relative cursor-pointer shadow-lg hover:from-yellow-100 hover:to-yellow-100">
                    <p className="text-gray-800 text-lg"> Who is known as "father of HTML" .</p>

                    <SiHtml5 className="text-4xl p-1 absolute bottom-2 right-2" />
                </div>

                {/* 3. suggestion */}

                <div className="h-[200px] p-4 bg-gradient-to-t from-blue-100 to-blue-100 rounded-lg relative cursor-pointer shadow-lg hover:from-yellow-100 hover:to-yellow-100">
                    <p className="text-slate-800 text-lg">Explain Function in JavaScript.</p>

                    <FaCode className="text-4xl p-1 absolute bottom-2 right-2" />
                </div>

                {/* 4.suggestion */}

                <div className="h-[200px] p-4 bg-gradient-to-t from-blue-100 to-blue-100 rounded-lg relative cursor-pointer shadow-lg hover:from-yellow-100 hover:to-yellow-100">
                    <p className="text-slate-800 text-lg">Difference Between Application & Software</p>

                    <GrCloudSoftware className="text-4xl p-1 absolute bottom-2 right-2" />
                </div>
            </div> 
        </> 
        ) : (
            <div className ="py-0 px-[5%] max-h-[70vh] overflow-y-scroll scrollbar-hidden">
                <div className="my-10 mx-0 flex items-center gap-5">
                <FaUserCircle className="text-3xl" />

                <p className="text-lg font-[400] leading-[1.8]">{recentPrompt}</p>
                </div>

                <div className="flex items-start gap-5">
                    <img src={askifyLogo} alt="Askify Icon"className="w-8 rounded-[50%]"/>
                    
                    {loading ?(
                        <div className="w-full flex flex-col gap-2">
                           <hr className="rounded-md border-none bg-blue-400 bg-gradient-to-r from-[#dabd53] via-[#ffffff] to-[#536cda] p-4 animate-scroll-bg" /> 
                           <hr className="rounded-md border-none bg-blue-400 bg-gradient-to-r from-[#536cda] via-[#ffffff] to-[#536cda] p-4 animate-scroll-bg" /> 
                        </div>
                    ) : (
                    <p
                    dangerouslySetInnerHTML={{ __html: resultData }}
                    className="text-lg font-[400] leading-[1.8]">
                    </p>                    
                    )}  
                </div>
            </div>
        )}
       
        <div className="absolute bottom-0 w-full max-w-[900px] px-5 mx-auto mt-5">
            <div className="flex items-center justify-between gap-20 bg-gray-200 py-2 px-5 rounded-full">
            <input 
              type="text" 
              placeholder="Enter a Query here...."
              className="flex-1 bg-transparent border-none outline-none p-2 text-lg"
              value={input}
              onChange={(e) =>setInput(e.target.value)}
            />

                <div className="flex gap-4 items-center">
                <MdOutlineAddPhotoAlternate className="text-2xl cursor-pointer" />
                <TiMicrophoneOutline className="text-2xl cursor-pointer"/>
                {input && (<FiSend 
                onClick={() => onSent()}
                className="text-2xl cursor-pointer"
                />
                )}
                </div>
            </div>

            <p className="text-sm my-4 mx-auto text-center font-[500] text-slate-500 ">
                Askify may be wrong Please check the correct imformation.
            </p>
        </div>
    </div>
</div>
  )
}

export default MainContent 