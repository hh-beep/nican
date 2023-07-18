const sm = {
  container: " h-1/6 items-center flex-col justify-around ",
  containerTittle: " text-center text-xl ",
  containerButton: "",
}
const md = {
  container: "  ",
  containerTittle: " md:text-2xl ",
  containerButton: "",
}
const lg = {
  container: " lg:m-0 lg:flex-row lg:justify-between ",
  containerTittle: " lg:text-start lg:text:3xl ",
  containerButton: ""
}
const xl = {
  container: "  ",
  containerTittle: " xl:text-4xl ",
  containerButton: ""
}





function AtividadesTitulo_Style() {
  return {
    container: 
      " flex w-5/6 " + 
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


    containerButton: 
      " p-4 rounded-lg text-center " +
        sm.containerButton +
        md.containerButton +
        lg.containerButton +
        xl.containerButton ,
  }
}

export default AtividadesTitulo_Style;