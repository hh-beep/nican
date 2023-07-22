const sm = {
  container: " w-5/6 h-full items-center ",
  containerTittle: " text-2xl text-center ",
  containerText: " text-lg text-center ",
}
const md = {
  container: "  ",
  containerTittle: " md:text-3xl ",
  containerText: " md:text-xl ",
}
const lg = {
  container: " lg:w-5/6 lg:h-full ",
  containerTittle: "lg:text-start ",
  containerText: " lg:text-start ",
}
const xl = {
  container: " ",
  containerTittle: " xl:text-4xl ",
  containerText: " xl:text-2xl ",
}





function MapTextos_Style() {
  return {
    container: 
      " flex justify-around flex-col " +
        sm.container +
        md.container +
        lg.container +
        xl.container ,

    
    containerTittle: 
      " text-preto " +
        sm.containerTittle +
        md.containerTittle +
        lg.containerTittle +
        xl.containerTittle ,


    containerText: 
      " text-preto " +
        sm.containerText +
        md.containerText +
        lg.containerText +
        xl.containerText ,
  }
}

export default MapTextos_Style;