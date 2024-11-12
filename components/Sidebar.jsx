import React, { useContext, useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { MdLiveHelp } from "react-icons/md";
import { RiChatHistoryFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { Context } from "../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-between bg-gradient-to-t from-gray-200 to-blue-300 py-[25px] px-[15px] transition-all duration-500 ease-in-out ${extended ? "w-64" : "w-20"
        }`}
    >
      <div>

        <RiMenu4Fill
          onClick={() => setExtended(!extended)}
          className={`cursor-pointer text-gray-900 mb-4 ${extended ? "text-3xl" : "text-3xl"
            }`}
        />


        <div
          onClick={() => newChat()}
          className="mt-[10px] flex items-center gap-2 py-2 px-3 text-gray-950 cursor-pointer bg-yellow-300 rounded-full shadow-lg shadow-gray-600/30 transition-all duration-500 ease-in-out"
        >
          <MdOutlinePlaylistAdd className={`${extended ? "text-3xl" : "text-2xl"}`} />
          {extended && <p className="transition-opacity duration-500">New Chat</p>}
        </div>


        {extended && (
          <div className="flex flex-col mt-6 animate-fadeIn duration-500">
            <p className="mb-4">Recent</p>
            {prevPrompt?.map((item, index) => (
              <div
                key={index}
                onClick={() => loadPrompt(item)}
                className="flex items-center gap-2 p-2 pr-10 rounded-[50px] text-slate-1000 cursor-pointer hover:bg-gradient-to-r from-[#4ea6f8] to-[#fdf86f] transition-colors duration-200"
              >
                <BiMessageDetail className="text-3xl" />
                <p>{item.slice(0, 18)}...</p>
              </div>
            ))}
          </div>
        )}
      </div>


      <div className="flex flex-col mb-10">
        {[
          { icon: <MdLiveHelp />, label: "AnyHelp" },
          { icon: <RiChatHistoryFill />, label: "History" },
          { icon: <IoSettingsSharp />, label: "Settings" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 p-2 pr-4 rounded-[50px] text-gray-1000 cursor-pointer hover:bg-blue-300 transition-all duration-300"
          >
            <span className={`${extended ? "text-3xl" : "text-2xl"}`}>{item.icon}</span>
            {extended && <p className="transition-opacity duration-500">{item.label}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;