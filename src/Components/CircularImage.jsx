function CircularImage({src, children}) {
    return ( <div className="flex justify-center items-center">
  <div className="relative w-45 h-45 md:w-45 md:h-45 lg:w-55 lg:h-55 2xl:w-70 2xl:h-70 rounded-full overflow-hidden">
    <img 
      src={src} 
      alt={typeof children === "string" ? children : "image"}
      className="w-full h-full object-cover opacity-50"
    />
    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
      <h2 className="text-xl md:text-xl lg:text-3xl font-bold text-blue-200">{children}</h2>
    </div>
  </div>
</div> );
}
export default CircularImage;