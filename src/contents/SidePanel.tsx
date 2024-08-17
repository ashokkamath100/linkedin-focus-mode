import cssText from "data-text:~style.css"
import { useEffect, useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

export {}
console.log(
  "You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true."
)

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const SidePanel = () => {
  const [visible, setVisible] = useState<boolean>(true)

  const handleOpenClose = () => {
    setVisible(!visible)
  }

  const handleHide = () => {

    
    console.log('hanldeHide ran just now') ; 
    const aside = document.getElementsByClassName("scaffold-layout__aside") ; 
    console.log('aside: ', aside) ; 
    for (let i = 0; i < aside.length; i++) {
      //aside[i].style.display = 'none'
      const elements = aside[i].querySelectorAll("[data-view-name]")
        console.log('elements: ', elements) ; 
      elements.forEach((element) => {
        element.style.display = "none"
      })
    }

    const discovery = document.getElementsByClassName(
      "discover-sections-list__item"
    )
    for (let i = 0; i < discovery.length; i++) {
      discovery[i].style.display = "none"
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(handleHide, 1000); // Delay by 1 second
    return() =>clearTimeout(timeoutId); // Clean up the timeout if the component unmounts
  }, [])

  const divClassname = "fixed right-0 bg-white"
  return (
    <>
      <div
        className={
          visible
            ? divClassname +
              "z-50 h-[40vh] bg-white flex flex-col w-1/6 justify-evenly border border-black-300 rounded-3xl p-4 m-8"
            : divClassname + "h-[10vh] "
        }>
        <button
          onClick={handleOpenClose}
          className="border border-black p-4 top-0 left-0 rounded-2xl">
          &gt;
        </button>
        {visible ? (
          <>
            <h2 className="text-black text-5xl text-center"></h2>
            <button
              onClick={handleHide}
              className="bg-customPink text-black border border-black-300 p-8 rounded-xl text-2xl  m-4">
              Zenify
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}

export default SidePanel
