export default [
    {
        id: 'F',
        name: 'Vegvísar',
        description: 'Vegvísum er ætlað að leiðbeina ökumönnum um leiðaval.',
        descriptionColor: 'primary',
        signs: [
            {
                id: 'F12.11',
                name: 'Staðarvísir (blár)',
                requiresPlaceName: true
            },
            {
                id: 'F12.21',
                name: 'Staðarmerki',
                requiresPlaceName: true
            },
            {
                id: 'F14.17',
                name: 'Götunafn eða vegarheiti',
                requiresPlaceName: true
            },
            {
                id: 'F14.21',
                name: 'Húsnúmer',
                requiresPlaceName: true
            },
            {
                id: 'F16.11',
                name: 'Vegnúmer',
                requiresPlaceName: true
            },
            {
                id: 'F16.21',
                name: 'Vegnúmer, leið að vegi',
                description: 'Merkið er sett við veg sem liggur að vegi með tilgreindu vegnúmeri.',
                requiresPlaceName: true
            },
            {
                id: 'F16.31',
                name: 'Ónúmeraður vegur',
                description: 'Merki þetta (án vegnúmers) er sett við veg sem ekki hefur vegnúmer og er ekki í umsjón Vegagerðarinnar.'
            },
            {
                id: 'F18.11',
                name: 'Sýslu- eða sveitarfélagsmerki (stórt)',
                description: 'Merki þetta má setja við veg á mörkum sýslu eða sveitarfélags. Letra skal nafn sýslu eða sveitarfélags á merkið. Þar má ennfremur setja tákn sýslu eða sveitarfélags (byggðarmerki) í réttum litum ofan við nafn.',
                requiresMunicipality: true
            },
            {
                id: 'F18.21',
                name: 'Sýslu- eða sveitarfélagsmerki (lítið)',
                description: 'Merki þetta má setja við veg á mörkum sýslu eða sveitarfélags. Letra skal nafn sýslu eða sveitarfélags á merkið. Þar má ennfremur setja tákn sýslu eða sveitarfélags (byggðarmerki) í réttum litum ofan við nafn.',
                requiresMunicipality: true
            },
            {
                id: 'F19.11',
                name: 'Fjarlægðarmerki (a)',
                description: 'Merki þetta má setja við veg eftir að komið er fram hjá vegamótum, t.d. á bakhlið leiðamerkis. Efst á merkinu er vegnúmer þess vegar sem ekið er eftir og staðarheiti þar undir. Fyrst er heiti þess staðar sem fjærstur er o.s.frv',
                requiresRouteNumber: true,
                requiresPlaceNameAndDistanceList: true,
                hasUrbanAreaVariant: true,
                isUrbanAreaVariant: true,
            },
            {
                id: 'F19.51',
                name: 'Fjarlægðarmerki (b)',
                requiresRouteNumber: true,
                requiresPlaceNameAndDistanceList: true,
                hasUrbanAreaVariant: true,
                isUrbanAreaVariant: false,
            }
        ]
    }
] as SignCategory[];

export interface Sign {
    id: string;
    name: string;
    description?: string;

    requiresRouteNumber?: boolean;
    requiresPlaceName?: boolean;
    requiresMunicipality?: boolean;
    requiresPlaceNameAndDistanceList?: boolean;

    hasCapitalRegionVariant?: boolean;
    isCapitalRegionVariant?: boolean;

    hasUrbanAreaVariant?: boolean;
    isUrbanAreaVariant?: boolean;
}

export interface SignCategory {
    id: string;
    name: string;
    description: string;
    descriptionColor: 'primary' | 'neutral' | 'danger' | 'success' | 'warning';
    signs: Sign[];
}
