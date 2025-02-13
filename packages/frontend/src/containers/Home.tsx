import { Box, Button, Divider, Input, Stack, Typography } from "@mui/joy";
import "./Home.css";
import SelectType from "./components/SelectType";
import { useEffect, useState } from "react";
import SignDatabase from "../signs";
import F14_17 from "../signs/F/F14_17";
import F14_21 from "../signs/F/F14_21";
import F16_11 from "../signs/F/F16_11";
import F16_31 from "../signs/F/F16_31";
import F16_21 from "../signs/F/F16_21";
import F12_21 from "../signs/F/F12_21";
import F12_11 from "../signs/F/F12_11";

export default function Home() {
	const signs = SignDatabase.map((category) => category.signs).flat();
	const [signId, setSignId] = useState('F14.17');
	const [placeName, setPlaceName] = useState('');
	
	useEffect(() => {
		setPlaceName('');
	}, [signId]);

	return (
		<div>
			<Box>
				<h1>Íslensk Umferðarmerki</h1>
				<Typography level="body-sm">Hvað er fiskur? Ertu fiskur?</Typography>
			</Box>
			<Divider sx={{ my: 2 }} />
			<Box sx={{ display: "flex", gap: 2 }}>
				<Stack spacing={2}>
					<Box>
						<Typography level="body-md">Tegund</Typography>
						<SelectType value={signId} setValue={setSignId} />
					</Box>
					{
						signs.find((sign) => sign.id == signId).hasCapitalRegionVariant && (
							<Box>
								<Typography level="body-md">Tegund</Typography>
								<SelectType value={signId} setValue={setSignId} />
							</Box>
						)
					}
					{
						signs.find((sign) => sign.id == signId).requiresPlaceName && (
							<Box>
								<Typography level="body-md">Örnefni</Typography>
								<Input value={placeName} onChange={(e) => setPlaceName(e.target.value)} />
							</Box>
						)
					}
				</Stack>
				<Box>
					{ signId == "F12.11" && <F12_11 placeName={placeName} /> }
					{ signId == "F12.21" && <F12_21 placeName={placeName} /> }
					{ signId == "F14.17" && <F14_17 placeName={placeName} /> }
					{ signId == "F14.21" && <F14_21 placeName={placeName} /> }
					{ signId == "F16.11" && <F16_11 placeName={placeName} /> }
					{ signId == "F16.21" && <F16_21 placeName={placeName} /> }
					{ signId == "F16.31" && <F16_31 /> }
				</Box>
			</Box>
		</div>
	);
}
