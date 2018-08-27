import BugIcon from "@material-ui/icons/BugReport"
import ClientsIcon from "@material-ui/icons/People"
import EditIcon from "@material-ui/icons/Edit"
import HelpIcon from "@material-ui/icons/Help"
import HistoryIcon from "@material-ui/icons/History"
import HomeIcon from "@material-ui/icons/Home"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import OfficeIcon from "@material-ui/icons/Store"
import ReferralsIcon from "@material-ui/icons/ContactPhone"
import RewardsIcon from "@material-ui/icons/Stars"
import LevelsIcon from "@material-ui/icons/FormatListNumbered"
import RewardsEditorIcon from "@material-ui/icons/StarHalf"
import * as React from "react"
import { Link } from "react-router-dom"

export const mailFolderListItems = (
  <div>
    <Link to="/dashboard/home">
      <ListItem button={true}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
    <Link to="/dashboard/clients">
      <ListItem button={true}>
        <ListItemIcon>
          <ClientsIcon />
        </ListItemIcon>
        <ListItemText primary="Clients" />
      </ListItem>
    </Link>
    <Link to="/dashboard/referrals">
      <ListItem button={true}>
        <ListItemIcon>
          <ReferralsIcon />
        </ListItemIcon>
        <ListItemText primary="Referrals" />
      </ListItem>
    </Link>
    <Link to="/dashboard/earnedrewards">
      <ListItem button={true}>
        <ListItemIcon>
          <RewardsIcon />
        </ListItemIcon>
        <ListItemText primary="Rewards Owed" />
      </ListItem>
    </Link>
    <ListItem button={true}>
      <ListItemIcon>
        <HistoryIcon />
      </ListItemIcon>
      <ListItemText primary="History" />
    </ListItem>
  </div>
)

export const otherMailFolderListItems = (
  <div>
    <Link to="/dashboard/adminsettings">
      <ListItem button={true}>
        <ListItemIcon>
          <OfficeIcon />
        </ListItemIcon>
        <ListItemText primary="Business Profile" />
      </ListItem>
    </Link>
    <Link to="/dashboard/messageeditor">
      <ListItem button={true}>
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        <ListItemText primary="Messaging Editor" />
      </ListItem>
    </Link>
    <Link to="/dashboard/levelseditor">
      <ListItem button={true}>
        <ListItemIcon>
          <LevelsIcon />
        </ListItemIcon>
        <ListItemText primary="Levels Editor" />
      </ListItem>
    </Link>
    <Link to="/dashboard/rewardseditor">
      <ListItem button={true}>
        <ListItemIcon>
          <RewardsEditorIcon />
        </ListItemIcon>
        <ListItemText primary="Rewards Editor" />
      </ListItem>
    </Link>
  </div>
)

export const bottomSideBarIcons = (
  <div>
    <ListItem button={true}>
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItem>
    {/* <ListItem button={true}>
      <ListItemIcon>
        <FeedbackIcon />
      </ListItemIcon>
      <ListItemText primary="Feedback" />
    </ListItem> */}
    <ListItem button={true}>
      <ListItemIcon>
        <BugIcon />
      </ListItemIcon>
      <ListItemText primary="Report Bug" />
    </ListItem>
  </div>
)
