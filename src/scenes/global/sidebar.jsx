import { useState } from "react";
import { Menu, MenuItem, Sidebar, menuClasses } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import PeopleOutlined from "@mui/icons-material/PeopleOutlined";
import ContactsOutlined from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlined from "@mui/icons-material/ReceiptOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlined from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlined from "@mui/icons-material/HelpOutlined";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import PieChartOutlined from "@mui/icons-material/PieChartOutlined";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import MapOutlined from "@mui/icons-material/MapOutlined";
import userProfile from "../../assets/userProfile.png";
import { TimelineOutlined } from "@mui/icons-material";

const Item = ({ title, to, selected, icon, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Link to={to} >
      <MenuItem
        active={selected === title}
        style={{ color: colors.grey[500] }}
        icon={icon}
        onClick={() => setSelected(title)}
        key={title}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </Link>
  );
};

const SidebarComponent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={
        {
          //   "& .pro-sidebar-inner": {background: `${colors.primary[400]} !important`,},
          //   "& .pro-icon-wrapper": { background: "transparent !important" },
          //   "& .pro-inner-item": { padding: "5px 35px 5px 20px !important" },
          //   "& .pro-inner-item:hover": { color: "#868dfb !important" },
          //   "& .pro-menu-item.active": { color: "#6870fa !important" },
        }
      }
    >
      <Sidebar
        collapsed={isCollapsed}
        backgroundColor={colors.primary[400]}
        rootStyles={{
          height: "100%",
        }}
      >
        <Menu
          iconShape="square"
          rootStyles={{
            padding: "1rem",
            ["." + menuClasses.button]: {
              "&:hover": { background: colors.greenAccent[600] },
            },
          }}
        >
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            rootStyles={{
              margin: "10px 0 20px 0",
            }}
          >
            {!isCollapsed && (
              <Box
                color={colors.grey[500]}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h3" display="inline">
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                m="0 0 1rem   0 "
              >
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={userProfile}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography variant="h2" color={colors.grey[500]}>
                  Sina Moradi
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin Page
                </Typography>
              </Box>
            </Box>
          )}
          <Box>
            <Item
              key="1"
              title="Dashboard"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              key="2"
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              key="3"
              title="Contact Information"
              to="/contact"
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              key="4"
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              key="5"
              title="Profile Form"
              to="/profile"
              icon={<PersonOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              key="6dasdas"
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              key="7dasda"
              title="FAQ"
              to="/faq"
              icon={<HelpOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              key="8dsfafsad"
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              key="9adfsdfsadf"
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              key="10afsdfsadf"
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              key="11adfsadfsf"
              title="Geography"
              to="/geography"
              icon={<MapOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};
export default SidebarComponent;
