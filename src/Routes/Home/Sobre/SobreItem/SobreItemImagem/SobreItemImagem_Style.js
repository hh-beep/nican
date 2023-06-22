const sm = {
  containerImage: " h-24 w-24 ",
  containerSpecialImage: " h-24 w-24 ",
}
const md = {
  containerImage: " md:h-28 md:w-28 ",
  containerSpecialImage: " md:h-28 md:w-28 ",
}
const lg = {
  containerImage: " lg:w-28 lg:h-28 ",
  containerSpecialImage: " lg:w-40 lg:h-40 ",
}
const xl = {
  containerImage: " xl:w-36 xl:h-36 ",
  containerSpecialImage: " xl:w-56 xl:h-56 ",
}





function SobreItemImagem_Style() {
  return {
    container: 
      " bg-contain ",


    containerImage: 
      " bg-contain rounded-xl " +
        sm.containerImage +
        md.containerImage +
        lg.containerImage +
        xl.containerImage ,

    
    containerSpecialImage: 
      " bg-contain rounded-xl " +
        sm.containerSpecialImage +
        md.containerSpecialImage +
        lg.containerSpecialImage +
        xl.containerSpecialImage ,
  }
}

export default SobreItemImagem_Style;
