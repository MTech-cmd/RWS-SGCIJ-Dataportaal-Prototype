const badges = [
  // Map IJmuiden badges
  {
    id: 'badge-1',
    mapId: 'map-ijmuiden',
    position: [820, 650],
    type: 'map', // leads to another map
    target: 'map-gemaal',
    apps: [],
  },
  {
    id: 'badge-2',
    mapId: 'map-ijmuiden',
    position: [600, 1000],
    type: 'map', // leads to another map
    target: 'map-binnenspuikanaal',
    apps: [],
  },
  {
    id: 'badge-2A',
    mapId: 'map-ijmuiden',
    position: [360, 1000],
    type: 'details', // leads to another map
    apps: [
      {
        appId: 'algemeen',
        config: { text: 'Actueel Peil: Noordersluis Oost', link: 'https://waterinfo.rws.nl/thema/Waterbeheer/IJmuiden-Noordersluis-O%28IJMO%29/details?parameters=Waterhoogte___20Oppervlaktewater___20t.o.v.___20Normaal___20Amsterdams___20Peil___20in___20cm'}
      }
    ],
  },
  {
    id: 'badge-2B',
    mapId: 'map-ijmuiden',
    position: [590, 490],
    type: 'details', // leads to another map
    apps: [
      {
        appId: 'algemeen',
        config: { text: 'Actueel Peil: Noordersluis West', link: 'https://waterinfo.rws.nl/thema/Waterbeheer/IJmuiden-Noordersluis-W%28IJMW%29/details?parameters=Waterhoogte___20Oppervlaktewater___20t.o.v.___20Normaal___20Amsterdams___20Peil___20in___20cm'}
      }
    ],
  },

  // Map Binnenspuikanaal badges
  {
    id: 'badge-3',
    mapId: 'map-binnenspuikanaal',
    position: [500, 1380],
    title: 'Zoutdam',
    type: 'details',
    apps: [
      {
        appId: 'meridian',
        config: { drawingId: 'drawing-123' },
      },
      {
        appId: 'relatics',
        config: { objectId: 'gate-456' },
      },
      {
        appId: 'ultimo',
        config: { assetId: 'PUMP-999' },
      },
      {
        appId: 'sharepoint',
        config: { documentLibrary: 'rapportages', filter: 'Zoutdam Project' },
      },
      {
        appId: 'scada',
        config: { documentLibrary: 'rapportages', filter: 'Zoutdam Project' },
      },
    ],
  },
  {
    id: 'badge-4',
    mapId: 'map-binnenspuikanaal',
    position: [500, 400],
    type: 'details',
    apps: [
      {
        appId: 'algemeen',
        config: { documentLibrary: 'inspection-reports', filter: 'date>2024-01-01' },
      },
    ],
  },
  // Map Gemaal
  {
    id: 'badge-3',
    mapId: 'map-gemaal',
    position: [390, 953],
    title: 'Pomp 1',
    type: 'details',
    apps: [
      {
        appId: 'meridian',
        config: { drawingId: 'drawing-123' },
      },
      {
        appId: 'relatics',
        config: { objectId: 'gate-456' },
      },
      {
        appId: 'ultimo',
        config: { assetId: 'PUMP-999' },
      },
      {
        appId: 'sharepoint',
        config: { documentLibrary: 'rapportages', filter: 'Zoutdam Project' },
      },
      {
        appId: 'scada',
        config: { documentLibrary: 'rapportages', filter: 'Zoutdam Project' },
      },
    ],
  },
]

const maps = {
  'map-ijmuiden': {
    image: 'sgcij.jpg',
    bounds: [[0, 0], [1080, 1920]],
    title: 'IJmuiden Hoofdgebied'
  },
  'map-binnenspuikanaal': {
    image: 'binnenspuikanaal.png',
    bounds: [[0, 0], [1080, 1920]],
    title: 'Binnenspuikanaal'
  },
    'map-gemaal': {
    image: 'gemaal.jpeg',
    bounds: [[0, 0], [1080, 1920]],
    title: 'Gemaal'
  }
}



export default {
  badges,
  maps
}