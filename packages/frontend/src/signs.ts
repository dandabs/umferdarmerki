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
                requiresPlaceName: true
            },
            {
                id: 'F16.31',
                name: 'Ónúmeraður vegur'
            },
            {
                id: 'F18.11',
                name: 'Sýslu- eða sveitarfélagsmerki (stórt)',
                requiresMunicipality: true
            },
            {
                id: 'F18.21',
                name: 'Sýslu- eða sveitarfélagsmerki (lítið)',
                requiresMunicipality: true
            }
        ]
    }
] as SignCategory[];

export interface Sign {
    id: string;
    name: string;
    hasCapitalRegionVariant?: boolean;
    requiresPlaceName?: boolean;
    requiresMunicipality?: boolean;
}

export interface SignCategory {
    id: string;
    name: string;
    description: string;
    descriptionColor: 'primary' | 'neutral' | 'danger' | 'success' | 'warning';
    signs: Sign[];
}
