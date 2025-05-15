import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Avatar, Button, Input } from "antd";
import { MdInstallDesktop } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

export default function HeaderHome() {
  return (
    <>
      <div
        className="bg-[#170f23] p-4 px-[3rem] flex items-center justify-between sticky top-0 left-0 z-10 opacity-95 mg-top-0 mg-bottom-10
    "
      >
        <div className="flex items-center gap-x-4">
          <div className="flex items-center text-white text-[2rem] opacity-30 gap-x-6">
            <IoIosArrowRoundBack />
            <IoIosArrowRoundForward />
          </div>
          <Input
            className="rounded-[20px] h-[2.3rem] w-[30rem] bg-[#2f2739] text-white"
            prefix={<CiSearch className="text-[1.5rem] text-white" />}
            placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
          />
        </div>
        <div className="flex items-center gap-x-4">
          <Button className="font-bold text-white bg-[#8e46cd] rounded-[20px] h-9">
            Nâng cấp tài khoản
          </Button>
          <Button className="font-bold text-[#8e46cd] rounded-[20px] h-9 flex items-center bg-[#2f2739]">
            <MdInstallDesktop />
            Tải bản Windows
          </Button>
          <div className="rounded-full h-[2.4rem] w-[2.4rem] bg-[#2c2436] flex items-center justify-center">
            <CiSettings className="text-[1.2rem] text-white" />
          </div>
          <Avatar
            src={
              "https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.13.13/static/media/user-default.3ff115bb.png"
            }
            className="w-[2.4rem] h-[2.4rem]"
          />
        </div>
      </div>
    </>
  );
}
