import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import Profileimg from "../assets/images/profile.png"

export default function ProfileBar() {
  return (
    <div className="w-full max-w-64 border h-13 rounded-md justify-between p-2 px-4 items-center flex bg-white  shadow-xl">

      <div className="flex text-md flex-col  justify-center">
        <p>John Honnai</p>
        <p>S5C</p>
      </div>
      <img src={Profileimg} alt="" className="size-9" />
    </div>
  );
}
