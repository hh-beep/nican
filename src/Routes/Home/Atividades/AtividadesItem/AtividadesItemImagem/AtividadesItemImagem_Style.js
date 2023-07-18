const sm = {
  containerImage: " h-24 w-24 ",
  containerSpecialImage: " h-24 w-24 ",
}
const md = {
  containerImage: "  ",
  containerSpecialImage: " md:h-28 md:w-28 ",
}
const lg = {
  containerImage: " lg:w-24 lg:h-24 ",
  containerSpecialImage: " lg:w-40 lg:h-40 ",
}
const xl = {
  containerImage: " xl:w-36 xl:h-36 ",
  containerSpecialImage: " xl:w-56 xl:h-56 ",
}





function AtividadesItemImagem_Style() {
  return {
    container: 
      " bg-cover ",


    containerImage: 
      " bg-cover rounded-xl " +
        sm.containerImage +
        md.containerImage +
        lg.containerImage +
        xl.containerImage ,

    
    containerSpecialImage: 
      " bg-cover rounded-xl " +
        sm.containerSpecialImage +
        md.containerSpecialImage +
        lg.containerSpecialImage +
        xl.containerSpecialImage ,
  }
}

export default AtividadesItemImagem_Style;
