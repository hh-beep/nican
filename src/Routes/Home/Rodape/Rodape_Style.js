const sm = {
  container: " h-screen ",
  containerSection: "",
  containerSectionList: "",
}
const md = {
  container: "",
  containerSection: "",
  containerSectionList: "",
}
const lg = {
  container: " lg:h-96 ",
  containerSection: "",
  containerSectionList: "",
}
const xl = {
  container: " xl:h-72 ",
  containerSection: "",
  containerSectionList: "",
}





function Rodape_Style() {
  return {
    container: 
      " flex justify-around items-center overflow-y-hidden overflow-x-hidden bg-azul " + 
        sm.container +
        md.container +
        lg.container +
        xl.container ,


    containerSection:   
      " w-5/6 h-full flex justify-around items-start flex-col ",


    containerSectionList: 
      " w-full h-2/3 flex flex-col lg:flex-row justify-around items-center ",
  }
}

export default Rodape_Style;