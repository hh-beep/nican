const sm = {
  container: " w-6/12 flex-col items-end ",
  containerTittle: " text-lg  text-end w-full ",
  containerData: " text-end w-full ",
  containerSpecial: " w-6/12 flex-col items-end ",
  containerSpecialTittle: " text-lg  text-end ",
}
const md = {
  containerTittle: " md:text-xl ",
  containerSpecialTittle: " md:text-xl ",
}
const lg = {
  container: " lg:w-full lg:items-center lg:flex lg:flex-col lg:justify-around ",
  containerTittle: " lg:w-11/12 lg:text-center lg:text-lg ",
  containerData: " lg:text-center ",
  containerSpecial: " lg:items-center lg:flex lg:flex-col lg:justify-around lg:h-3/6 ",
  containerSpecialTittle: " lg:w-11/12 lg:text-center ",
}
const xl = {
  container: " xl:h-3/5 ",
  containerSpecialTittle: " xl:text-3xl ",
}




function AtividadesItemTextos_Style() {
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


    containerData: 
      "  " +
        sm.containerData +
        md.containerData +
        lg.containerData +
        xl.containerData ,





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
  }
}

export default AtividadesItemTextos_Style;
