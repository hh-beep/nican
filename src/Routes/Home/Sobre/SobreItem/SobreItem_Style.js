const sm = {
  container: " h-1/5 w-10/12 ",
  specialContainer: " h-1/5 w-10/12 ",
}
const md = {
  container: " md:h-1/5 md:w-9/12 ",
  specialContainer: " md:h-1/5 md:w-9/12 ",
}
const lg = {
  container: " lg:h-2/6 lg:w-3/12 lg:p-4 ",
  specialContainer: " lg:h-4/6 lg:w-3/12 ",
}
const xl = {
  container: " xl:h-2/6 xl:w-3/12 ",
  specialContainer: " xl:h-5/6 xl:w-3/12 ",
}





function SobreItem_Style() {
  
  const same = " border-4 rounded-xl flex justify-around items-center flex-row lg:flex-col "

  return {
    container:
      " card border-green m-1 " +
        same +
        sm.container +
        md.container +
        lg.container +
        xl.container ,


    specialContainer: 
      " card border-green lg:border-blue " +
        same +
        sm.specialContainer +
        md.specialContainer +
        lg.specialContainer +
        xl.specialContainer ,
  }
}

export default SobreItem_Style;
