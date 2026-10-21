import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
 const buttonClasses = active ? 'text-var[(--ice-white)] border-b border-[var(--main-red)]' : 'text-[#ADB7BE]'
    return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white border-b border-[var(--main-red)]  ${ buttonClasses}` }>
        { children}
        </p>
        
        </button>
  )
}

export default TabButton