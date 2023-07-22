const sm = " w-full h-full flex-col bg-azul "
const md = " "
const lg = " lg:w-5/6 lg:h-5/6 lg:flex-row lg:rounded-2xl lg:bg-branco "
const xl = " xl:w-5/6 xl:h-4/5 "





function Map_Style() {
  return {
    container:
      " w-screen h-screen flex justify-around items-center overflow-x-hidden bg-preto ",
      
      
    continerSection: 
      " flex justify-around items-center " +
        sm +
        md +
        lg +
        xl ,
    
    
    continerSectionBox:
      "  lg:w-1/2 xl:h-5/6 w-full h-1/2 flex justify-around items-center  "
  }
}

export default Map_Style;