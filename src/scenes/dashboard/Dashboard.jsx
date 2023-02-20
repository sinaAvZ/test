import Header from "../../component/Header";
import {  useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return <Header title="Dashboard"/>;
};
export default Dashboard;
