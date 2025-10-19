function ContactCircle({children, src, style}) { return (
<div className="flex justify-center items-center h-fit">
  <div
    
    className="bg-[#2d5f91] rounded-full w-64 h-64 flex flex-col justify-center items-center text-white shadow-lg"
  >
    <img
    src={src}
    alt=""
    className="w-[35%] h-[35%] object-cover"
  />
    <p className="text-center text-sm sm:text-base font-light break-all" style={style}>
      {children}
    </p>
  </div>
</div>
); }

export default ContactCircle