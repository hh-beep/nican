const sm = " w-5/6 h-1/2 "
const md = ""
const lg = " lg:w-1/2 lg:h-5/6  "
const xl = " xl:h-full "





function MapLocal_Style() {
  return {
    container: 
      " flex justify-around items-center " +
        sm +
        md +
        lg +
        xl ,

    
    containerMap: 
      " map w-5/6 h-5/6 border-preto border-4 rounded-2xl ",
  }
}

export default MapLocal_Style;