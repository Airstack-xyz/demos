import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const pages = [
  { name: "Home", link: "/" },
  { name: "Explore", link: "/explore" },
];

function ResponsiveAppBar() {
  const navigate = useNavigate();

  return (
    <AppBar position="absolute" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {pages.map(({ name, link }, index) => (
              <Button
                key={index}
                onClick={() => navigate(link)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
