function MobileContact(){
    return(<div className="flex flex-col justify-center items-center bg-[#001C34] h-full pb-3 pt-3 w-full">
        <div>
          <div className="flex flex-row items-center">
                 <img
                    src='/assets/Mail.svg'
                    alt=""
                    className=" h-[40px] w-[40px]"
                  />
            <a 
                href="mailto:Stevenollerenshaw@gmail.com" 
                className="mt-1 ml-2 text-white font-poppins hover:text-blue-300 transition-colors text-[0.8rem] sm:text-md"
            >
                Stevenollerenshaw@gmail.com
            </a>
            </div>

             <div className="flex flex-row items-center">
                 <img
                    src='/assets/Phone.svg'
                    alt=""
                    className=" h-[40px] w-[40px]"
                  />
            <p className="mt-1 ml-2 text-white font-poppins text-[0.8rem] sm:text-md">07787561232</p>
            </div>
            </div>
    </div>)
}

export default MobileContact
