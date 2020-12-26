import React from "react"
import "./SidebarOption.css"
function SidebarOption({ Icon, title, count, selected }) {
  return (
    <div className={`sidebarOption ${selected ? "sidebarSelected" : ""}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{count}</p>
    </div>
  )
}

export default SidebarOption
