const sm = {
  container: " w-5/6 h-1/4 border-2 border-b-claro rounded-2xl ",
  containerImagem: " w-20 h-20 ",
  containerTexto: " text-xl ",
}
const md = {
  container: "",
  containerImagem: " md:w-28 md:h-28  ",
  containerTexto: " md:text-2xl ",
}
const lg = {
  container: " lg:w-1/4 lg:border-0 ",
  containerImagem: " lg:w-20 lg:h-20 ",
  containerTexto: " lg:text-xl ",
}
const xl = {
  container: "  ",
  containerImagem: " xl:w-24 xl:h-24 ",
  containerTexto: " xl:text-2xl ",
}





function RodapeItem_Style() {
  return {
    container: 
      " flex flex-row justify-around items-center " +
        sm.container +
        md.container +
        lg.container +
        xl.container ,


    containerImagem:
      "  " +
        sm.containerImagem +
        md.containerImagem +
        lg.containerImagem +
        xl.containerImagem ,


    containerTexto:
      " rodapeLinkTexto text-preto " +
        sm.containerTexto +
        md.containerTexto +
        lg.containerTexto +
        xl.containerTexto ,
  }
}

export default RodapeItem_Style;