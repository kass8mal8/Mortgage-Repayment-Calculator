import { Stack, Typography } from "@mui/material";

const Header = () => {
	return (
		<Stack className="header" my={2}>
			<Typography variant="h5">Mortgage Calculator</Typography>
			<a href="#">Clear All</a>
		</Stack>
	);
};

export default Header;
