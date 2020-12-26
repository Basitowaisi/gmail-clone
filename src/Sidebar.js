import React from "react"
import "./Sidebar.css"
import {
  Add as AddIcon,
  Inbox as InboxIcon,
  Star as StarIcon,
  AccessTime as AccessTimeIcon,
  LabelImportant as LabelImportantIcon,
  NearMe as NearMeIcon,
  Note as NoteIcon,
  ExpandMore as ExpandMoreIcon,
  Person as PersonIcon,
  Duo as DuoIcon,
  Phone as PhoneIcon,
} from "@material-ui/icons"
import { Button, IconButton } from "@material-ui/core"
import SidebarOption from "./SidebarOption"

function Sidebar() {
  const TABS = [
    {
      title: "Inbox",
      count: 24,
      icon: InboxIcon,
      selected: true,
    },
    {
      title: "Starred",
      count: 1,
      icon: StarIcon,
      selected: false,
    },
    {
      title: "Snoozed",
      count: 2,
      icon: AccessTimeIcon,
      selected: false,
    },
    {
      title: "Important",
      count: 10,
      icon: LabelImportantIcon,
      selected: false,
    },
    {
      title: "Sent",
      count: 4,
      icon: NearMeIcon,
      selected: false,
    },
    {
      title: "Drafts",
      count: 12,
      icon: NoteIcon,
      selected: false,
    },
    {
      title: "More",
      count: 2,
      icon: ExpandMoreIcon,
      selected: false,
    },
  ]

  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="medium" />}
        className="sidebarButton"
      >
        Compose
      </Button>
      {TABS.map((tab, index) => (
        <SidebarOption
          Icon={tab.icon}
          title={tab.title}
          count={tab.count}
          selected={tab.selected}
          key={index}
        />
      ))}
      <div className="sidebarFooter">
        <div className="sidebarFooterIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
