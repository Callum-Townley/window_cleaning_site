function CircularImage({src, children}) {
    return ( <div className="flex justify-center items-center">
  <div className="relative w-80 h-80 rounded-full overflow-hidden">
    <img 
      src={src} 
      alt={typeof children === "string" ? children : "image"}
      className="w-full h-full object-cover opacity-50"
    />
    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
      <h2 className="text-3xl font-bold text-blue-200">{children}</h2>
    </div>
  </div>
</div> );
}
export default CircularImage;