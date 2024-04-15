  /**
   * Keyboard control preset
   */
  export const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
  ];

//Positions of Rigin bodies for Room parts - cubicles etc
//Positions of outer boundary wall
export const platformBoundaryPositions = [
  { position: [-37.3, 1.6, 0], scale: [0.5, 3, 73.5] },
  { position: [37.2, 1.6, -19.5], scale: [0.5, 3, 35] },
  { position: [37.2, 1.6, 19.5], scale: [0.5, 3, 35] },
  { position: [0, 1.6, 37.3], scale: [73.5, 3, 0.5] },
  { position: [0, 1.6, -37.3], scale: [73.5, 3, 0.5] },
  { position: [0, -0.133, 0], scale: [73.5, 0.2, 73.5] }, // Floor
];

export const rigidBodyPositions = [
  {
    // Small cubicle
    positions: [
      [5, 2, 3.1],
      [5, 2, -3.1],
      [-5, 2, -3.1],
      [-5, 2, 3.1],
    ],
    size: [3.01, 2, 2],
  },
  {
    // Larger cubicles
    positions: [
      [-12.15, 2, 9.5],
      [-12.15, 2, -9.5],
      [12.15, 2, -9.5],
      [12.15, 2, 9.5],
    ],
    size: [4.2, 2, 4.5],
  },
  // Walls
  // FRONT/BACK & LEFT/RIGHT
  {
    positions: [
      [-12.535, 2, 17.5],
      [12.535, 2, -17.5],
      [12.535, 2, 17.5],
      [-12.535, 2, -17.5],
    ],
    size: [7.9, 2, 0.12],
  },
  {
    positions: [
      [20.35, 2, -9.8],
      [-20.335, 2, 9.8],
      [20.35, 2, 9.8],
      [-20.335, 2, -9.8],
    ],
    size: [0.12, 2, 7.81],
  },
  //INNER SIDES
  {
    positions: [
      [-4.75, 2, 12.98],
      [4.75, 2, -12.98],
      [4.75, 2, 12.98],
      [-4.75, 2, -12.98],
    ],
    size: [0.12, 2, 4.665],
  },
  {
    positions: [
      [-15.6, 2, 2.11],
      [15.6, 2, -2.11],
      [15.6, 2, 2.11],
      [-15.6, 2, -2.11],
    ],
    size: [4.87, 2, 0.12],
  },
  //SQUARE DOORS
  {
    positions: [
      [0, 2, -8.44],
      [0, 2, 8.44],
    ],
    size: [4.9, 2, 0.12],
  },
  //ROUND ENTRY WAYS
  //(UPRIGHT SIDES)
  {
    positions: [
      [10.88, 2, 1.71],
      [10.88, 2, -1.71],
      [-10.88, 2, 1.71],
      [-10.88, 2, -1.71],
    ],
    size: [0.125, 2, 0.5],
  },
  //BOTTOM SIDES
  {
    positions: [
      [10.88, 0.4, 0],
      [-10.88, 0.4, 0],
    ],
    size: [0.125, 0.4, 1.2],
  },
];

//Position of cubicle glass coverings
export const coverTopPositions = [
  //SMALL CUBICLES
  { position: [5, 3.98, 3.1], scale: [5.55, 0.05, 3.5] },
  { position: [-5, 3.98, -3.1], scale: [5.5, 0.05, 3.5] },
  { position: [-5, 3.98, 3.1], scale: [5.5, 0.05, 3.5] },
  { position: [5, 3.98, -3.1], scale: [5.55, 0.05, 3.5] },
  //LARGE CUBICLES
  { position: [12.15, 3.96, 9.5], scale: [8, 0.05, 8.45] },
  { position: [-12.15, 3.96, -9.5], scale: [8, 0.05, 8.45] },
  { position: [-12.15, 3.96, 9.5], scale: [8, 0.05, 8.45] },
  { position: [12.15, 3.96, -9.5], scale: [8, 0.05, 8.45] },
];

//IMAGE PLACEMENT POSITIONS
export const landscapePhotosPositions = [
  {position: [0, 2, -8.22], rotation:[0, 0, 0]},
  {position: [0, 2, 8.22], rotation:[0, Math.PI, 0]},
  {position: [5, 2, -1.13], rotation:[0, 0, 0]},
  {position: [-5, 2, -1.13], rotation:[0, 0, 0]},

  {position: [5, 2, 5.12], rotation:[0, 0, 0]},
  {position: [-5, 2, 5.12], rotation:[0, 0, 0]},
  {position: [-5, 2, -5.12], rotation:[0, Math.PI, 0]},
  {position: [5, 2, -5.12], rotation:[0, Math.PI, 0]},

  {position: [-5, 2, 1.13], rotation:[0, Math.PI, 0]},
  {position: [5, 2, 1.13], rotation:[0, Math.PI, 0]},

  {position: [7.98, 2, -9.7], rotation:[0, -Math.PI * 0.5, 0]},
  {position: [-7.98, 2, 9.7], rotation:[0, Math.PI * 0.5, 0]},
  {position: [-7.98, 2, -9.7], rotation:[0, Math.PI * 0.5, 0]},
  {position: [7.98, 2, 9.7], rotation:[0, -Math.PI * 0.5, 0]},

  {position: [-16.28, 2, -9.7], rotation:[0, -Math.PI * 0.5, 0]},
  {position: [-16.28, 2, 9.7], rotation:[0, -Math.PI * 0.5, 0]},
  {position: [16.28, 2, -9.7], rotation:[0, Math.PI * 0.5, 0]},
  {position: [16.285, 2, 9.7], rotation:[0, Math.PI * 0.5, 0]},

  {position: [12.3, 2, -13.98], rotation:[0, -Math.PI, 0]},
  {position: [-12.3, 2, -13.98], rotation:[0, -Math.PI, 0]},
  {position: [-12.3, 2, 13.98], rotation:[0, 0, 0]},
  {position: [12.3, 2, 13.98], rotation:[0, 0, 0]},

  {position: [12.3, 2, -5.05], rotation:[0, 0, 0]},
  {position: [-12.3, 2, -5.05], rotation:[0, 0, 0]},
  {position: [-12.3, 2, 5.05], rotation:[0, -Math.PI, 0]},
  {position: [12.3, 2, 5.05], rotation:[0, -Math.PI, 0]},
]

export const verticalPhotosPositions = [
  {position: [1.98, 2, -3.12], rotation:[0, -Math.PI * 0.5, 0]},
  {position: [1.98, 2, 3.12], rotation:[0, -Math.PI * 0.5, 0]},
  {position: [-1.98, 2, 3.12], rotation:[0, Math.PI * 0.5, 0]},
  {position: [-1.98, 2, -3.12], rotation:[0, Math.PI * 0.5, 0]},

  {position: [8.02, 2, 3.12], rotation:[0, Math.PI * 0.5, 0]},
  {position: [-8.02, 2, 3.12], rotation:[0, -Math.PI * 0.5, 0]},
  {position: [-8.02, 2, -3.12], rotation:[0, -Math.PI * 0.5, 0]},
  {position: [8.02, 2, -3.12], rotation:[0, Math.PI * 0.5, 0]},
]

//CONE POSITION & ROTATION ON NEWLAND
export const coneInfo = [
  { position: [160.5, 1.7, -2.4], rotation: [0, 0, 0] },
  { position: [160.5, 1.7, 0], rotation: [0, Math.PI, 0] },
  { position: [160.5, 1.7, 2.4], rotation: [0, Math.PI * 0.5, 0] },
];