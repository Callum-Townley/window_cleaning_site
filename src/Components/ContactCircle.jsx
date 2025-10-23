function ContactCircle({children, src, style}) { return (
<div className="hidden md:flex justify-center items-center h-fit">
  <div
    
    className="bg-[#2d5f91] rounded-full w-56 h-56 2xl:w-70 2xl:h-70  flex flex-col justify-center items-center text-white shadow-lg"
  >
    <img
    src={src}
    alt=""
    className="w-[35%] h-[35%] object-cover"
  />
    <p className="text-center text-sm 2xl:text-lg sm:text-base font-light break-all" style={style}>
      {children}
    </p>
  </div>
</div>
); }

export default ContactCircle