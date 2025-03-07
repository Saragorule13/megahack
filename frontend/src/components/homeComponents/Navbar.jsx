import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white p-4 text-black">
      {/* Logo */}
      <div className="relative justify-start text-[#3d4f1b] text-[40px] font-bold font-['Poppins']">
        KrishiCart
      </div>

      {/* Search Bar */}
      <div className="flex gap-4">
        <div className="flex w-[674px] h-12 px-4 py-2 rounded-full border-2 border-[#c0a719] items-center gap-3">
          <div className="w-5 h-5 bg-[#505050] rounded-full" />
          <input
            type="text"
            className="w-full bg-transparent text-[#939393] text-base font-medium font-['Poppins'] outline-none"
            placeholder="Search..."
          />
        </div>
        <div className="w-12 h-12 relative bg-[#dff0e5] rounded-full" />
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <div className="h-[55px] px-[39px] py-2 bg-[#007e2f] rounded-[27px] inline-flex justify-center items-center gap-2.5">
          <button className="relative justify-start text-white text-base font-semibold font-['Poppins'] leading-normal">
            Buy
          </button>
        </div>
        <div className="h-[55px] px-[39px] py-2 bg-[#007e2f] rounded-[27px] inline-flex justify-center items-center gap-2.5">
          <button className="relative justify-start text-white text-base font-semibold font-['Poppins'] leading-normal">
            Sell
          </button>
        </div>
        <div className="h-[55px] px-[39px] py-2 bg-[#007e2f] rounded-[27px] inline-flex justify-center items-center gap-2.5">
          <button className="relative justify-start text-white text-base font-semibold font-['Poppins'] leading-normal">
            Profile
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
