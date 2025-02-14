import { Box, Divider, Input, Stack, Typography } from "@mui/joy";
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
import SelectMunicipality from "./components/SelectMunicipality";
import F18_21 from "../signs/F/F18_21";
import F18_11 from "../signs/F/F18_11";
import F19_11 from "../signs/F/F19_11";
import InputPlaceNameAndDistanceList from "./components/InputPlaceNameAndDistanceList";
import F19_51 from "../signs/F/F19_51";

export default function Home() {
	const signs = SignDatabase.map((category) => category.signs).flat();
	const [signId, setSignId] = useState('F19.51');
	const [placeName, setPlaceName] = useState('');
	const [routeNumber, setRouteNumber] = useState(1);
	const [municipality, selectMunicipality] = useState('');
	const [placeNameAndDistanceList, setPlaceNameAndDistanceList] = useState<{ placeName: string; distance: number }[]>([]);
	
	useEffect(() => {
		setPlaceName('');
	}, [signId]);

	return (
		<div>
			<Box>
				<h1>Íslensk Umferðarmerki</h1>
				<Typography level="body-sm">Búðu til þín eigin íslensk umferðarmerki. Umferðarskiltin hér hafa verið hönnuð til að vera sem næst <a href="https://www.samgongustofa.is/media/log-og-reglur-i-umferdarmalum/289_1995-Reglugerd-um-umferdarmerki-og-notkun-theirra-nr_289_1995-20130625.pdf">íslensku umferðarmerkjareglugerðinni</a>.</Typography>
			</Box>
			<Divider sx={{ my: 2 }} />
			<Box sx={{ display: "flex", gap: 2 }}>
				<Stack spacing={2} width={240}>
					<Box>
						<Typography level="body-md">Tegund</Typography>
						<SelectType value={signId} setValue={setSignId} />
					</Box>
					{
						signs.find((sign) => sign.id == signId).description && (
							<Typography level="body-xs">{signs.find((sign) => sign.id == signId).description}</Typography>
						)
					}
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
					{
						signs.find((sign) => sign.id == signId).requiresMunicipality && (
							<Box>
								<Typography level="body-md">Sveitarfélag</Typography>
								<SelectMunicipality value={municipality} setValue={selectMunicipality} />
							</Box>
						)
					}
					{
						signs.find((sign) => sign.id == signId).requiresRouteNumber && (
							<Box>
								<Typography level="body-md">Vegnúmer</Typography>
								<Input type="number" value={routeNumber} onChange={(e) => setRouteNumber(parseInt(e.target.value))} />
							</Box>
						)
					}
					{
						signs.find((sign) => sign.id == signId).requiresPlaceNameAndDistanceList && (
							<Box>
								<Typography level="body-md">Staðir</Typography>
								<InputPlaceNameAndDistanceList value={placeNameAndDistanceList} setValue={setPlaceNameAndDistanceList} />
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
					{ signId == "F18.11" && <F18_11 municipality={municipality} /> }
					{ signId == "F18.21" && <F18_21 municipality={municipality} /> }
					{ signId == "F19.11" && <F19_11 routeNumber={routeNumber} placeNameAndDistanceList={[...placeNameAndDistanceList].sort((a, b) => b.distance - a.distance)} /> }
					{ signId == "F19.51" && <F19_51 routeNumber={routeNumber} placeNameAndDistanceList={[...placeNameAndDistanceList].sort((a, b) => b.distance - a.distance)} /> }
				</Box>
			</Box>
		</div>
	);
}
