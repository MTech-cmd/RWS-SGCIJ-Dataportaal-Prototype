const badges = [
  // Map IJmuiden badges
  {
    id: 'badge-1',
    mapId: 'map-ijmuiden',
    position: [52.456, 4.625],
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
    position: [52.460, 4.630],
    type: 'map', // leads to another map
    target: 'map-binnensluiskanaal',
    apps: [],
  },

  // Map Binnensluiskanaal badges
  {
    id: 'badge-3',
    mapId: 'map-binnensluiskanaal',
    position: [52.470, 4.640],
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
    mapId: 'map-binnensluiskanaal',
    position: [52.475, 4.645],
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

export default badges