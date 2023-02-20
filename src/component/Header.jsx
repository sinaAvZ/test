import { DownloadOutlined } from "@mui/icons-material";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Typography variant="h2" color={colors.greenAccent[100]}>
        {title}
      </Typography>
        <Typography variant="h5">Welcome to ffffffffffffff{title}</Typography> 
    </Box>
  );
};
export default Header;
