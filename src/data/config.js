const badges = [
  // Map IJmuiden badges
  {
    id: 'badge-1',
    mapId: 'map-ijmuiden',
    position: [500, 800],
    type: 'details',
    apps: [
      {
        appId: 'sharepoint',
        config: {
          documentLibrary: 'maintenance-docs',
          filter: 'object=pump-1',
        },
      },
      {
        appId: 'ultimo',
        config: {
          assetId: 'PUMP-001',
        },
      },
    ],
  },
  {
    id: 'badge-2',
    mapId: 'map-ijmuiden',
    position: [600, 1000],
    type: 'map', // leads to another map
    target: 'map-binnenspuikanaal',
    apps: [],
  },

  // Map Binnenspuikanaal badges
  {
    id: 'badge-3',
    mapId: 'map-binnenspuikanaal',
    position: [900, 900],
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
        config: { documentLibrary: 'reports', filter: 'type=critical' },
      },
    ],
  },
  {
    id: 'badge-4',
    mapId: 'map-binnenspuikanaal',
    position: [300, 400],
    type: 'details',
    apps: [
      {
        appId: 'ultimo',
        config: { assetId: 'PUMP-007' },
      },
      {
        appId: 'sharepoint',
        config: { documentLibrary: 'inspection-reports', filter: 'date>2024-01-01' },
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
    title: 'Binnensluiskanaal'
  }
}



export default {
  badges,
  maps
}