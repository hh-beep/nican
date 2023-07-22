const sm = " h-24 w-24 "
const md = ""
const lg  = " lg:h-32 lg:w-32 "
const xl = " xl:h-48 xl:w-48 "





function AvisosItemImage_Style() {
  return {
    container: 
      " bg-cover ",


    containerImage: 
      " bg-cover rounded-xl " +
        sm +
        md +
        lg +
        xl ,
  }
}

export default AvisosItemImage_Style;