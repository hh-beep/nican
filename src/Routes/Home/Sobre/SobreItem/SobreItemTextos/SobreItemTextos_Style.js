const sm = {
  container: " w-6/12",
  containerTittle: " text-lg  text-end ",

  containerSpecial: " w-6/12 ",
  containerSpecialTittle: " text-lg  text-end ",
  containerSpecialText: " hidden ",
}
const md = {
  container: "  ",
  containerTittle: " md:text-xl ",

  containerSpecial: "  ",
  containerSpecialTittle: " md:text-xl ",
  containerSpecialText: "",
}
const lg = {
  container: " lg:w-full lg:items-center lg:flex lg:flex-col lg:justify-around ",
  containerTittle: " lg:w-11/12 lg:text-center lg:text-lg ",
  
  containerSpecial: " lg:items-center lg:flex lg:flex-col lg:justify-around lg:h-3/6 ",
  containerSpecialTittle: " lg:w-11/12 lg:text-center ",
  containerSpecialText: " lg:w-11/12 lg:text-center lg:flex ",
}
const xl = {
  container: " xl:h-3/5 ",
  containerTittle: "  ",
  
  containerSpecial: "",
  containerSpecialTittle: " xl:text-3xl ",
  containerSpecialText: " xl:text-xl ",
}




function SobreItemTextos_Style() {
  return {
    container: 
      " flex justify-around items-center " + 
        sm.container +
        md.container +
        lg.container +
        xl.container ,


    containerTittle: 
      "  " +
        sm.containerTittle +
        md.containerTittle +
        lg.containerTittle +
        xl.containerTittle ,





    containerSpecial:
      "  " +
        sm.containerSpecial +
        md.containerSpecial +
        lg.containerSpecial +
        xl.containerSpecial ,


    containerSpecialTittle:
      "  " +
        sm.containerSpecialTittle +
        md.containerSpecialTittle +
        lg.containerSpecialTittle + 
        xl.containerSpecialTittle ,


    containerSpecialText: 
      "  " +
        sm.containerSpecialText +
        md.containerSpecialText +
        lg.containerSpecialText +
        xl.containerSpecialText ,
  }
}

export default SobreItemTextos_Style;
