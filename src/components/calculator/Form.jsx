/* eslint-disable react/prop-types */
import { Box, TextField, Typography, Stack } from "@mui/material";
import { CurrencyPound, Percent } from "@mui/icons-material";
import Type from "./Type";
import CalcButton from "./CalcButton";
import { useState } from "react";

const Form = ({ setResult, result, isError, setIsError }) => {
	const [mortgageDetails, setMortgageDetails] = useState({});
	const handleChange = (e) => {
		setMortgageDetails({ ...mortgageDetails, [e.target.name]: e.target.value });
	};

	const calculateMonthly = (rate, amount, time) => {
		const numerator = amount * rate;
		const denominator = 1 - Math.pow(1 + rate, -time);

		return numerator / denominator;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (Object.keys(mortgageDetails).length === 0) {
			setIsError(true);
			return;
		}

		const rate = mortgageDetails?.rate / 100 / 12;
		const amount = mortgageDetails?.amount;
		const time = mortgageDetails?.time * 12;
		console.log(time);

		try {
			const monthly = await calculateMonthly(rate, amount, time);
			const yearly = monthly * time;

			setResult({ ...result, monthly, yearly });
			setMortgageDetails({});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<Box my={2}>
				<Typography variant="body2" className="label">
					Mortgage Amount
				</Typography>
				<TextField
					name="amount"
					fullWidth
					onChange={handleChange}
					InputProps={{
						startAdornment: (
							<Box
								sx={{
									background: isError
										? "hsl(4, 69%, 50%)"
										: "hsl(202, 86%, 94%)",
									ml: -1.6,
									p: 1.4,
									height: "55px",
									alignItems: "center",
									mr: 1,
								}}
							>
								<CurrencyPound />
							</Box>
						),
					}}
					sx={{
						"&:focus-within fieldset, &:focus-visible fieldset": {
							border: "2px solid hsl(61, 70%, 52%)!important",
						},
						"& fieldset": {
							border: `2px solid ${
								isError ? "hsl(4, 69%, 50%)" : "hsl(203, 41%, 72%)!important"
							}`,
						},
					}}
				/>
				{isError && (
					<Typography variant="body2" mt={2} sx={{ color: "hsl(4, 69%, 50%)" }}>
						This field is required
					</Typography>
				)}
			</Box>
			<Stack my={2} className="stack">
				<Box>
					<Typography variant="body2" className="label">
						Mortgage Term
					</Typography>
					<TextField
						name="time"
						fullWidth
						onChange={handleChange}
						InputProps={{
							endAdornment: (
								<Box
									sx={{
										background: isError
											? "hsl(4, 69%, 50%)"
											: "hsl(202, 86%, 94%)",
										p: 1.7,
										mr: -1.6,
										height: "55px",
									}}
								>
									<Typography>years</Typography>
								</Box>
							),
						}}
						sx={{
							"&:focus-within fieldset, &:focus-visible fieldset": {
								border: "2px solid hsl(61, 70%, 52%)!important",
							},
							"& fieldset": {
								border: `2px solid ${
									isError ? "hsl(4, 69%, 50%)" : "hsl(203, 41%, 72%)!important"
								}`,
							},
						}}
					/>
					{isError && (
						<Typography
							variant="body2"
							mt={2}
							sx={{ color: "hsl(4, 69%, 50%)" }}
						>
							This field is required
						</Typography>
					)}
				</Box>
				<Box>
					<Typography variant="body2" className="label">
						Interest Rate
					</Typography>
					<TextField
						name="rate"
						fullWidth
						onChange={handleChange}
						InputProps={{
							endAdornment: (
								<Box
									sx={{
										background: isError
											? "hsl(4, 69%, 50%)"
											: "hsl(202, 86%, 94%)",
										p: 1.7,
										mr: -1.6,
										height: "55px",
									}}
								>
									<Percent />
								</Box>
							),
						}}
						sx={{
							"&:focus-within fieldset, &:focus-visible fieldset": {
								border: "2px solid hsl(61, 70%, 52%)!important",
							},
							"& fieldset": {
								border: `2px solid ${
									isError ? "hsl(4, 69%, 50%)" : "hsl(203, 41%, 72%)!important"
								}`,
							},
						}}
					/>
					{isError && (
						<Typography
							variant="body2"
							mt={2}
							sx={{ color: "hsl(4, 69%, 50%)" }}
						>
							This field is required
						</Typography>
					)}
				</Box>
			</Stack>
			<Type handleChange={handleChange} isError={isError} />
			<CalcButton />
		</form>
	);
};

export default Form;
