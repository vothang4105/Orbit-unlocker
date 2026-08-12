/**
 * Orbit Unlocker - Global Game Configurations & Level Definitions
 * 10-Level Progression: Cyber & Fruit Modes
 * Integrated "Rau má" Fruit Icon (#2ec4b6)
 */

const CONFIG = {
    CANVAS_BASE_SIZE: 600,
    INNER_CENTER_RADIUS: 24,
    MAX_LIVES: 3,
    MISS_PENALTY_SCORE: 50,

    COLORS: {
        // Cyber Colors
        yellow: '#f5d020',
        cyan: '#00f5d4',
        pink: '#ff2a6d',
        blue: '#00b4d8',
        purple: '#9d4edd',
        
        // Fruit Colors
        dau: '#ff3366',
        nho: '#9d4edd',
        thom: '#ffb703',
        dao: '#ff85a1',
        rauma: '#2ec4b6', // Bright Pennywort Emerald Green

        inactiveTrack: 'rgba(255, 255, 255, 0.08)',
        activeTrack: 'rgba(0, 245, 212, 0.4)',
        lockedTrack: 'rgba(0, 245, 212, 0.85)',
        spokeLine: 'rgba(255, 255, 255, 0.06)'
    },

    SPOKES_COUNT: 12,
    HIT_TOLERANCE_DEG: 7.0,

    THEMES: {
        CYBER: 'CYBER',
        FRUIT: 'FRUIT'
    },

    // Standard Cyber Levels (10 Levels)
    LEVELS: [
        // Level 1
        {
            id: 1,
            name: "Màn 1: Căn Giờ Cơ Bản",
            desc: "Mở từ vòng trong cùng ra ngoài. Mỗi lượt 1 vòng quay.",
            timeLimit: null,
            groups: [[0], [1]],
            rings: [
                {
                    radius: 70,
                    rotationSpeed: 45,
                    direction: 1,
                    arcs: [{ color: 'yellow', startAngle: 60, arcWidth: 80 }],
                    dots: [{ color: 'yellow', angleOffset: 0 }]
                },
                {
                    radius: 160,
                    rotationSpeed: 60,
                    direction: -1,
                    arcs: [{ color: 'yellow', startAngle: 210, arcWidth: 80 }],
                    dots: [{ color: 'yellow', angleOffset: 0 }]
                }
            ]
        },

        // Level 2
        {
            id: 2,
            name: "Màn 2: 3 Vòng Đơn Lẻ (2 Màu)",
            desc: "3 vòng xoay đơn lẻ từ trong ra ngoài. 2 điểm màu.",
            timeLimit: null,
            groups: [[0], [1], [2]],
            rings: [
                {
                    radius: 65,
                    rotationSpeed: 55,
                    direction: 1,
                    arcs: [{ color: 'cyan', startAngle: 30, arcWidth: 65 }],
                    dots: [{ color: 'cyan', angleOffset: 0 }]
                },
                {
                    radius: 130,
                    rotationSpeed: 65,
                    direction: -1,
                    arcs: [
                        { color: 'yellow', startAngle: 90, arcWidth: 60 },
                        { color: 'cyan', startAngle: 270, arcWidth: 60 }
                    ],
                    dots: [
                        { color: 'yellow', angleOffset: 0 },
                        { color: 'cyan', angleOffset: 180 }
                    ]
                },
                {
                    radius: 200,
                    rotationSpeed: 75,
                    direction: 1,
                    arcs: [
                        { color: 'cyan', startAngle: 0, arcWidth: 60 },
                        { color: 'yellow', startAngle: 180, arcWidth: 60 }
                    ],
                    dots: [
                        { color: 'cyan', angleOffset: 0 },
                        { color: 'yellow', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Level 3
        {
            id: 3,
            name: "Màn 3: 2 Vòng Liên Tiếp Đồng Thời",
            desc: "Vòng 1 & 2 xoay cùng lúc! Cần 1 lần bấm SPACE khớp cả 2 vòng.",
            timeLimit: 90,
            groups: [[0, 1], [2]],
            rings: [
                {
                    radius: 65,
                    rotationSpeed: 60,
                    direction: 1,
                    arcs: [{ color: 'yellow', startAngle: 45, arcWidth: 60 }],
                    dots: [{ color: 'yellow', angleOffset: 0 }]
                },
                {
                    radius: 130,
                    rotationSpeed: 70,
                    direction: -1,
                    arcs: [{ color: 'cyan', startAngle: 180, arcWidth: 60 }],
                    dots: [{ color: 'cyan', angleOffset: 0 }]
                },
                {
                    radius: 200,
                    rotationSpeed: 85,
                    direction: 1,
                    arcs: [
                        { color: 'yellow', startAngle: 60, arcWidth: 55 },
                        { color: 'cyan', startAngle: 240, arcWidth: 55 }
                    ],
                    dots: [
                        { color: 'yellow', angleOffset: 0 },
                        { color: 'cyan', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Level 4
        {
            id: 4,
            name: "Màn 4: 2 Vòng Không Liên Tiếp Đồng Thời",
            desc: "Vòng (1 & 3) xoay cùng lúc, sau đó Vòng (2 & 4) xoay cùng lúc!",
            timeLimit: 85,
            groups: [[0, 2], [1, 3]],
            rings: [
                {
                    radius: 55,
                    rotationSpeed: 65,
                    direction: 1,
                    arcs: [{ color: 'pink', startAngle: 30, arcWidth: 50 }],
                    dots: [{ color: 'pink', angleOffset: 0 }]
                },
                {
                    radius: 110,
                    rotationSpeed: 75,
                    direction: -1,
                    arcs: [{ color: 'yellow', startAngle: 120, arcWidth: 50 }],
                    dots: [{ color: 'yellow', angleOffset: 0 }]
                },
                {
                    radius: 165,
                    rotationSpeed: 85,
                    direction: 1,
                    arcs: [
                        { color: 'cyan', startAngle: 0, arcWidth: 50 },
                        { color: 'pink', startAngle: 180, arcWidth: 50 }
                    ],
                    dots: [
                        { color: 'cyan', angleOffset: 0 },
                        { color: 'pink', angleOffset: 180 }
                    ]
                },
                {
                    radius: 220,
                    rotationSpeed: 95,
                    direction: -1,
                    arcs: [
                        { color: 'yellow', startAngle: 90, arcWidth: 50 },
                        { color: 'cyan', startAngle: 270, arcWidth: 50 }
                    ],
                    dots: [
                        { color: 'yellow', angleOffset: 0 },
                        { color: 'cyan', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Level 5
        {
            id: 5,
            name: "Màn 5: Tập Làm Quen Vòng Khuyết",
            desc: "Tập căn nhịp Vòng Khuyết dội ngược với tốc độ chậm rãi & Arc rất rộng.",
            timeLimit: 90,
            groups: [[0], [1], [2]],
            rings: [
                {
                    radius: 65,
                    rotationSpeed: 45,
                    direction: 1,
                    arcs: [{ color: 'yellow', startAngle: 45, arcWidth: 70 }],
                    dots: [{ color: 'yellow', angleOffset: 0 }]
                },
                {
                    radius: 130, // Partial Ring
                    rotationSpeed: 55,
                    direction: 1,
                    isPartial: true,
                    minAngle: 45,
                    maxAngle: 315,
                    arcs: [{ color: 'cyan', startAngle: 140, arcWidth: 70 }],
                    dots: [{ color: 'cyan', angleOffset: 0 }]
                },
                {
                    radius: 195,
                    rotationSpeed: 65,
                    direction: -1,
                    arcs: [
                        { color: 'yellow', startAngle: 0, arcWidth: 65 },
                        { color: 'cyan', startAngle: 180, arcWidth: 65 }
                    ],
                    dots: [
                        { color: 'yellow', angleOffset: 0 },
                        { color: 'cyan', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Level 6
        {
            id: 6,
            name: "Màn 6: Đa Vòng Khuyết Dội Ngược",
            desc: "Nhiều đĩa khuyết dội ngược (mỗi đĩa khuyết 1 màu duy nhất).",
            timeLimit: 85,
            groups: [[0], [1], [2], [3]],
            rings: [
                {
                    radius: 55,
                    rotationSpeed: 55,
                    direction: 1,
                    arcs: [{ color: 'pink', startAngle: 30, arcWidth: 60 }],
                    dots: [{ color: 'pink', angleOffset: 0 }]
                },
                {
                    radius: 110, // Partial Ring
                    rotationSpeed: 65,
                    direction: 1,
                    isPartial: true,
                    minAngle: 30,
                    maxAngle: 270,
                    arcs: [{ color: 'cyan', startAngle: 120, arcWidth: 60 }],
                    dots: [{ color: 'cyan', angleOffset: 0 }]
                },
                {
                    radius: 165, // Partial Ring
                    rotationSpeed: 75,
                    direction: -1,
                    isPartial: true,
                    minAngle: 45,
                    maxAngle: 315,
                    arcs: [{ color: 'pink', startAngle: 140, arcWidth: 60 }],
                    dots: [{ color: 'pink', angleOffset: 0 }]
                },
                {
                    radius: 220,
                    rotationSpeed: 85,
                    direction: 1,
                    arcs: [
                        { color: 'cyan', startAngle: 0, arcWidth: 55 },
                        { color: 'yellow', startAngle: 180, arcWidth: 55 }
                    ],
                    dots: [
                        { color: 'cyan', angleOffset: 0 },
                        { color: 'yellow', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Level 7
        {
            id: 7,
            name: "Màn 7: Song Vòng Khuyết Đồng Thời",
            desc: "Kết hợp 2 vòng xoay đồng thời với Vòng Khuyết 1 màu duy nhất ở trung tâm.",
            timeLimit: 80,
            groups: [[0, 1], [2, 3]],
            rings: [
                {
                    radius: 55,
                    rotationSpeed: 65,
                    direction: 1,
                    arcs: [{ color: 'yellow', startAngle: 0, arcWidth: 50 }],
                    dots: [{ color: 'yellow', angleOffset: 0 }]
                },
                {
                    radius: 110, // Partial Ring
                    rotationSpeed: 75,
                    direction: -1,
                    isPartial: true,
                    minAngle: 45,
                    maxAngle: 315,
                    arcs: [{ color: 'pink', startAngle: 140, arcWidth: 50 }],
                    dots: [{ color: 'pink', angleOffset: 0 }]
                },
                {
                    radius: 165, // Partial Ring
                    rotationSpeed: 85,
                    direction: 1,
                    isPartial: true,
                    minAngle: 30,
                    maxAngle: 280,
                    arcs: [{ color: 'cyan', startAngle: 120, arcWidth: 50 }],
                    dots: [{ color: 'cyan', angleOffset: 0 }]
                },
                {
                    radius: 220,
                    rotationSpeed: 95,
                    direction: -1,
                    arcs: [
                        { color: 'pink', startAngle: 90, arcWidth: 48 },
                        { color: 'cyan', startAngle: 270, arcWidth: 48 }
                    ],
                    dots: [
                        { color: 'pink', angleOffset: 0 },
                        { color: 'cyan', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Level 8
        {
            id: 8,
            name: "Màn 8: Kết Hợp 5 Vòng Khuyết",
            desc: "3 vòng xoay đồng thời kết hợp các Vòng Khuyết 1 màu dội ngược.",
            timeLimit: 80,
            groups: [[0, 2, 4], [1, 3]],
            rings: [
                {
                    radius: 50,
                    rotationSpeed: 75,
                    direction: 1,
                    arcs: [{ color: 'pink', startAngle: 0, arcWidth: 42 }],
                    dots: [{ color: 'pink', angleOffset: 0 }]
                },
                {
                    radius: 95, // Partial Ring
                    rotationSpeed: 85,
                    direction: -1,
                    isPartial: true,
                    minAngle: 45,
                    maxAngle: 315,
                    arcs: [{ color: 'yellow', startAngle: 140, arcWidth: 42 }],
                    dots: [{ color: 'yellow', angleOffset: 0 }]
                },
                {
                    radius: 140,
                    rotationSpeed: 95,
                    direction: 1,
                    arcs: [
                        { color: 'cyan', startAngle: 45, arcWidth: 42 },
                        { color: 'pink', startAngle: 225, arcWidth: 42 }
                    ],
                    dots: [
                        { color: 'cyan', angleOffset: 0 },
                        { color: 'pink', angleOffset: 180 }
                    ]
                },
                {
                    radius: 185, // Partial Ring
                    rotationSpeed: 105,
                    direction: -1,
                    isPartial: true,
                    minAngle: 30,
                    maxAngle: 290,
                    arcs: [{ color: 'blue', startAngle: 130, arcWidth: 42 }],
                    dots: [{ color: 'blue', angleOffset: 0 }]
                },
                {
                    radius: 230,
                    rotationSpeed: 115,
                    direction: 1,
                    arcs: [
                        { color: 'cyan', startAngle: 30, arcWidth: 42 },
                        { color: 'blue', startAngle: 210, arcWidth: 42 }
                    ],
                    dots: [
                        { color: 'cyan', angleOffset: 0 },
                        { color: 'blue', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Level 9
        {
            id: 9,
            name: "Màn 9: Thần Trận 5 Vòng Siêu Tốc",
            desc: "Màn thử thách tốc độ cao với 5 vòng xoay 360° liên hoàn.",
            timeLimit: 75,
            groups: [[0, 2, 4], [1, 3]],
            rings: [
                {
                    radius: 50,
                    rotationSpeed: 95,
                    direction: 1,
                    arcs: [{ color: 'pink', startAngle: 0, arcWidth: 35 }],
                    dots: [{ color: 'pink', angleOffset: 0 }]
                },
                {
                    radius: 95,
                    rotationSpeed: 110,
                    direction: -1,
                    arcs: [{ color: 'yellow', startAngle: 90, arcWidth: 35 }],
                    dots: [{ color: 'yellow', angleOffset: 0 }]
                },
                {
                    radius: 140,
                    rotationSpeed: 125,
                    direction: 1,
                    arcs: [
                        { color: 'cyan', startAngle: 45, arcWidth: 35 },
                        { color: 'pink', startAngle: 225, arcWidth: 35 }
                    ],
                    dots: [
                        { color: 'cyan', angleOffset: 0 },
                        { color: 'pink', angleOffset: 180 }
                    ]
                },
                {
                    radius: 185,
                    rotationSpeed: 140,
                    direction: -1,
                    arcs: [
                        { color: 'blue', startAngle: 120, arcWidth: 35 },
                        { color: 'yellow', startAngle: 300, arcWidth: 35 }
                    ],
                    dots: [
                        { color: 'blue', angleOffset: 0 },
                        { color: 'yellow', angleOffset: 180 }
                    ]
                },
                {
                    radius: 230,
                    rotationSpeed: 155,
                    direction: 1,
                    arcs: [
                        { color: 'cyan', startAngle: 30, arcWidth: 35 },
                        { color: 'blue', startAngle: 210, arcWidth: 35 }
                    ],
                    dots: [
                        { color: 'cyan', angleOffset: 0 },
                        { color: 'blue', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Level 10
        {
            id: 10,
            name: "Màn 10: Thần Trận Vô Địch 6 Vòng",
            desc: "CỰC KHÓ! Tất cả 6 vòng xoay đồng thời cùng lúc, bao gồm cả Vòng Khuyết 1 màu & Vòng 360°, 4 Màu, Arc 28°.",
            timeLimit: 90,
            groups: [[0, 1, 2, 3, 4, 5]],
            rings: [
                {
                    radius: 50,
                    rotationSpeed: 90,
                    direction: 1,
                    arcs: [{ color: 'cyan', startAngle: 0, arcWidth: 28 }],
                    dots: [{ color: 'cyan', angleOffset: 0 }]
                },
                {
                    radius: 85,
                    rotationSpeed: 110,
                    direction: -1,
                    isPartial: true,
                    minAngle: 45,
                    maxAngle: 315,
                    arcs: [{ color: 'yellow', startAngle: 140, arcWidth: 28 }],
                    dots: [{ color: 'yellow', angleOffset: 0 }]
                },
                {
                    radius: 120,
                    rotationSpeed: 130,
                    direction: 1,
                    arcs: [
                        { color: 'blue', startAngle: 30, arcWidth: 28 },
                        { color: 'cyan', startAngle: 210, arcWidth: 28 }
                    ],
                    dots: [
                        { color: 'blue', angleOffset: 0 },
                        { color: 'cyan', angleOffset: 180 }
                    ]
                },
                {
                    radius: 155,
                    rotationSpeed: 145,
                    direction: -1,
                    isPartial: true,
                    minAngle: 30,
                    maxAngle: 300,
                    arcs: [{ color: 'pink', startAngle: 130, arcWidth: 28 }],
                    dots: [{ color: 'pink', angleOffset: 0 }]
                },
                {
                    radius: 190,
                    rotationSpeed: 160,
                    direction: 1,
                    arcs: [
                        { color: 'yellow', startAngle: 15, arcWidth: 25 },
                        { color: 'blue', startAngle: 135, arcWidth: 25 },
                        { color: 'cyan', startAngle: 255, arcWidth: 25 }
                    ],
                    dots: [
                        { color: 'yellow', angleOffset: 0 },
                        { color: 'blue', angleOffset: 120 },
                        { color: 'cyan', angleOffset: 240 }
                    ]
                },
                {
                    radius: 230,
                    rotationSpeed: 175,
                    direction: -1,
                    arcs: [
                        { color: 'cyan', startAngle: 45, arcWidth: 25 },
                        { color: 'pink', startAngle: 135, arcWidth: 25 },
                        { color: 'blue', startAngle: 225, arcWidth: 25 },
                        { color: 'yellow', startAngle: 315, arcWidth: 25 }
                    ],
                    dots: [
                        { color: 'cyan', angleOffset: 0 },
                        { color: 'pink', angleOffset: 90 },
                        { color: 'blue', angleOffset: 180 },
                        { color: 'yellow', angleOffset: 270 }
                    ]
                }
            ]
        }
    ],

    // Fruit Mode Specific Levels (10 Levels - Including "Rau má")
    FRUIT_LEVELS: [
        // Fruit Lvl 1
        {
            id: 1,
            name: "Fruit 1: Khởi Đầu Trái Cây",
            desc: "Căn thời gian quả Dâu và quả Đào đi vào đúng khay!",
            timeLimit: null,
            groups: [[0], [1]],
            rings: [
                {
                    radius: 75,
                    rotationSpeed: 45,
                    direction: 1,
                    arcs: [{ color: 'dau', startAngle: 45, arcWidth: 80 }],
                    dots: [{ color: 'dau', fruitKey: 'dau', angleOffset: 0 }]
                },
                {
                    radius: 165,
                    rotationSpeed: 60,
                    direction: -1,
                    arcs: [{ color: 'dao', startAngle: 180, arcWidth: 80 }],
                    dots: [{ color: 'dao', fruitKey: 'dao', angleOffset: 0 }]
                }
            ]
        },

        // Fruit Lvl 2 (Introducing Rau má!)
        {
            id: 2,
            name: "Fruit 2: Vườn Nho & Rau Má",
            desc: "3 vòng xoay đơn lẻ với các trái Dâu, Nho, Thơm và lá Rau Má.",
            timeLimit: null,
            groups: [[0], [1], [2]],
            rings: [
                {
                    radius: 65,
                    rotationSpeed: 55,
                    direction: 1,
                    arcs: [{ color: 'rauma', startAngle: 30, arcWidth: 65 }],
                    dots: [{ color: 'rauma', fruitKey: 'rauma', angleOffset: 0 }]
                },
                {
                    radius: 130,
                    rotationSpeed: 65,
                    direction: -1,
                    arcs: [
                        { color: 'dau', startAngle: 90, arcWidth: 60 },
                        { color: 'thom', startAngle: 270, arcWidth: 60 }
                    ],
                    dots: [
                        { color: 'dau', fruitKey: 'dau', angleOffset: 0 },
                        { color: 'thom', fruitKey: 'thom', angleOffset: 180 }
                    ]
                },
                {
                    radius: 200,
                    rotationSpeed: 75,
                    direction: 1,
                    arcs: [
                        { color: 'nho', startAngle: 0, arcWidth: 60 },
                        { color: 'rauma', startAngle: 180, arcWidth: 60 }
                    ],
                    dots: [
                        { color: 'nho', fruitKey: 'nho', angleOffset: 0 },
                        { color: 'rauma', fruitKey: 'rauma', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Fruit Lvl 3
        {
            id: 3,
            name: "Fruit 3: Đôi Bạn Trái Cây",
            desc: "Vòng 1 & 2 xoay cùng lúc! Căn Dâu và Nho cùng khớp 1 lượt.",
            timeLimit: 90,
            groups: [[0, 1], [2]],
            rings: [
                {
                    radius: 65,
                    rotationSpeed: 60,
                    direction: 1,
                    arcs: [{ color: 'dau', startAngle: 45, arcWidth: 60 }],
                    dots: [{ color: 'dau', fruitKey: 'dau', angleOffset: 0 }]
                },
                {
                    radius: 130,
                    rotationSpeed: 70,
                    direction: -1,
                    arcs: [{ color: 'nho', startAngle: 180, arcWidth: 60 }],
                    dots: [{ color: 'nho', fruitKey: 'nho', angleOffset: 0 }]
                },
                {
                    radius: 200,
                    rotationSpeed: 85,
                    direction: 1,
                    arcs: [
                        { color: 'thom', startAngle: 60, arcWidth: 55 },
                        { color: 'rauma', startAngle: 240, arcWidth: 55 }
                    ],
                    dots: [
                        { color: 'thom', fruitKey: 'thom', angleOffset: 0 },
                        { color: 'rauma', fruitKey: 'rauma', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Fruit Lvl 4
        {
            id: 4,
            name: "Fruit 4: Mật Mã Trái Cây & Rau Má",
            desc: "Vòng (1 & 3) xoay cùng lúc! Căn nhịp Rau má, Dâu, Thơm, Nho.",
            timeLimit: 85,
            groups: [[0, 2], [1, 3]],
            rings: [
                {
                    radius: 55,
                    rotationSpeed: 65,
                    direction: 1,
                    arcs: [{ color: 'rauma', startAngle: 30, arcWidth: 50 }],
                    dots: [{ color: 'rauma', fruitKey: 'rauma', angleOffset: 0 }]
                },
                {
                    radius: 110,
                    rotationSpeed: 75,
                    direction: -1,
                    arcs: [{ color: 'dau', startAngle: 120, arcWidth: 50 }],
                    dots: [{ color: 'dau', fruitKey: 'dau', angleOffset: 0 }]
                },
                {
                    radius: 165,
                    rotationSpeed: 85,
                    direction: 1,
                    arcs: [
                        { color: 'thom', startAngle: 0, arcWidth: 50 },
                        { color: 'nho', startAngle: 180, arcWidth: 50 }
                    ],
                    dots: [
                        { color: 'thom', fruitKey: 'thom', angleOffset: 0 },
                        { color: 'nho', fruitKey: 'nho', angleOffset: 180 }
                    ]
                },
                {
                    radius: 220,
                    rotationSpeed: 95,
                    direction: -1,
                    arcs: [
                        { color: 'dau', startAngle: 90, arcWidth: 50 },
                        { color: 'rauma', startAngle: 270, arcWidth: 50 }
                    ],
                    dots: [
                        { color: 'dau', fruitKey: 'dau', angleOffset: 0 },
                        { color: 'rauma', fruitKey: 'rauma', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Fruit Lvl 5 (Rau má Partial Ring)
        {
            id: 5,
            name: "Fruit 5: Giới Thiệu Vòng Khuyết Quả",
            desc: "Căn thời gian lá Rau Má trên Vòng Khuyết tự dội ngược.",
            timeLimit: 90,
            groups: [[0], [1], [2]],
            rings: [
                {
                    radius: 65,
                    rotationSpeed: 45,
                    direction: 1,
                    arcs: [{ color: 'dau', startAngle: 45, arcWidth: 70 }],
                    dots: [{ color: 'dau', fruitKey: 'dau', angleOffset: 0 }]
                },
                {
                    radius: 130, // Partial Ring (Single Fruit: Rau má)
                    rotationSpeed: 55,
                    direction: 1,
                    isPartial: true,
                    minAngle: 45,
                    maxAngle: 315,
                    arcs: [{ color: 'rauma', startAngle: 140, arcWidth: 70 }],
                    dots: [{ color: 'rauma', fruitKey: 'rauma', angleOffset: 0 }]
                },
                {
                    radius: 195,
                    rotationSpeed: 65,
                    direction: -1,
                    arcs: [
                        { color: 'thom', startAngle: 0, arcWidth: 65 },
                        { color: 'dao', startAngle: 180, arcWidth: 65 }
                    ],
                    dots: [
                        { color: 'thom', fruitKey: 'thom', angleOffset: 0 },
                        { color: 'dao', fruitKey: 'dao', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Fruit Lvl 6
        {
            id: 6,
            name: "Fruit 6: Đa Vòng Khuyết Nhiệt Đới",
            desc: "Nhiều đĩa khuyết dội ngược (mỗi đĩa khuyết 1 loại quả nằm ở trung tâm).",
            timeLimit: 85,
            groups: [[0], [1], [2], [3]],
            rings: [
                {
                    radius: 55,
                    rotationSpeed: 55,
                    direction: 1,
                    arcs: [{ color: 'rauma', startAngle: 30, arcWidth: 60 }],
                    dots: [{ color: 'rauma', fruitKey: 'rauma', angleOffset: 0 }]
                },
                {
                    radius: 110, // Partial Ring
                    rotationSpeed: 65,
                    direction: 1,
                    isPartial: true,
                    minAngle: 30,
                    maxAngle: 270,
                    arcs: [{ color: 'nho', startAngle: 120, arcWidth: 60 }],
                    dots: [{ color: 'nho', fruitKey: 'nho', angleOffset: 0 }]
                },
                {
                    radius: 165, // Partial Ring
                    rotationSpeed: 75,
                    direction: -1,
                    isPartial: true,
                    minAngle: 45,
                    maxAngle: 315,
                    arcs: [{ color: 'dau', startAngle: 140, arcWidth: 60 }],
                    dots: [{ color: 'dau', fruitKey: 'dau', angleOffset: 0 }]
                },
                {
                    radius: 220,
                    rotationSpeed: 85,
                    direction: 1,
                    arcs: [
                        { color: 'rauma', startAngle: 0, arcWidth: 55 },
                        { color: 'dao', startAngle: 180, arcWidth: 55 }
                    ],
                    dots: [
                        { color: 'rauma', fruitKey: 'rauma', angleOffset: 0 },
                        { color: 'dao', fruitKey: 'dao', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Fruit Lvl 7
        {
            id: 7,
            name: "Fruit 7: Song Vòng Khuyết Đồng Thời",
            desc: "2 vòng xoay đồng thời kết hợp Vòng Khuyết Quả 1 loại quả ở trung tâm.",
            timeLimit: 80,
            groups: [[0, 1], [2, 3]],
            rings: [
                {
                    radius: 55,
                    rotationSpeed: 65,
                    direction: 1,
                    arcs: [{ color: 'dau', startAngle: 0, arcWidth: 50 }],
                    dots: [{ color: 'dau', fruitKey: 'dau', angleOffset: 0 }]
                },
                {
                    radius: 110, // Partial Ring
                    rotationSpeed: 75,
                    direction: -1,
                    isPartial: true,
                    minAngle: 45,
                    maxAngle: 315,
                    arcs: [{ color: 'rauma', startAngle: 140, arcWidth: 50 }],
                    dots: [{ color: 'rauma', fruitKey: 'rauma', angleOffset: 0 }]
                },
                {
                    radius: 165, // Partial Ring
                    rotationSpeed: 85,
                    direction: 1,
                    isPartial: true,
                    minAngle: 30,
                    maxAngle: 280,
                    arcs: [{ color: 'nho', startAngle: 120, arcWidth: 50 }],
                    dots: [{ color: 'nho', fruitKey: 'nho', angleOffset: 0 }]
                },
                {
                    radius: 220,
                    rotationSpeed: 95,
                    direction: -1,
                    arcs: [
                        { color: 'thom', startAngle: 90, arcWidth: 48 },
                        { color: 'rauma', startAngle: 270, arcWidth: 48 }
                    ],
                    dots: [
                        { color: 'thom', fruitKey: 'thom', angleOffset: 0 },
                        { color: 'rauma', fruitKey: 'rauma', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Fruit Lvl 8
        {
            id: 8,
            name: "Fruit 8: Đại Tiệc Trái Cây Vòng Khuyết",
            desc: "3 vòng xoay đồng thời xen kẽ các Vòng Khuyết Quả 1 loại quả ở trung tâm.",
            timeLimit: 80,
            groups: [[0, 2, 4], [1, 3]],
            rings: [
                {
                    radius: 50,
                    rotationSpeed: 75,
                    direction: 1,
                    arcs: [{ color: 'dau', startAngle: 0, arcWidth: 42 }],
                    dots: [{ color: 'dau', fruitKey: 'dau', angleOffset: 0 }]
                },
                {
                    radius: 95, // Partial Ring
                    rotationSpeed: 85,
                    direction: -1,
                    isPartial: true,
                    minAngle: 45,
                    maxAngle: 315,
                    arcs: [{ color: 'rauma', startAngle: 140, arcWidth: 42 }],
                    dots: [{ color: 'rauma', fruitKey: 'rauma', angleOffset: 0 }]
                },
                {
                    radius: 140,
                    rotationSpeed: 95,
                    direction: 1,
                    arcs: [
                        { color: 'nho', startAngle: 45, arcWidth: 42 },
                        { color: 'dao', startAngle: 225, arcWidth: 42 }
                    ],
                    dots: [
                        { color: 'nho', fruitKey: 'nho', angleOffset: 0 },
                        { color: 'dao', fruitKey: 'dao', angleOffset: 180 }
                    ]
                },
                {
                    radius: 185, // Partial Ring
                    rotationSpeed: 105,
                    direction: -1,
                    isPartial: true,
                    minAngle: 30,
                    maxAngle: 290,
                    arcs: [{ color: 'dau', startAngle: 130, arcWidth: 42 }],
                    dots: [{ color: 'dau', fruitKey: 'dau', angleOffset: 0 }]
                },
                {
                    radius: 230,
                    rotationSpeed: 115,
                    direction: 1,
                    arcs: [
                        { color: 'rauma', startAngle: 30, arcWidth: 42 },
                        { color: 'dao', startAngle: 210, arcWidth: 42 }
                    ],
                    dots: [
                        { color: 'rauma', fruitKey: 'rauma', angleOffset: 0 },
                        { color: 'dao', fruitKey: 'dao', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Fruit Lvl 9
        {
            id: 9,
            name: "Fruit 9: Đại Tiệc Trái Cây Siêu Tốc",
            desc: "5 vòng trái cây với tốc độ cao và vị trí xoay xen kẽ.",
            timeLimit: 75,
            groups: [[0, 2, 4], [1, 3]],
            rings: [
                {
                    radius: 50,
                    rotationSpeed: 95,
                    direction: 1,
                    arcs: [{ color: 'rauma', startAngle: 0, arcWidth: 35 }],
                    dots: [{ color: 'rauma', fruitKey: 'rauma', angleOffset: 0 }]
                },
                {
                    radius: 95,
                    rotationSpeed: 110,
                    direction: -1,
                    arcs: [{ color: 'thom', startAngle: 90, arcWidth: 35 }],
                    dots: [{ color: 'thom', fruitKey: 'thom', angleOffset: 0 }]
                },
                {
                    radius: 140,
                    rotationSpeed: 125,
                    direction: 1,
                    arcs: [
                        { color: 'nho', startAngle: 45, arcWidth: 35 },
                        { color: 'dao', startAngle: 225, arcWidth: 35 }
                    ],
                    dots: [
                        { color: 'nho', fruitKey: 'nho', angleOffset: 0 },
                        { color: 'dao', fruitKey: 'dao', angleOffset: 180 }
                    ]
                },
                {
                    radius: 185,
                    rotationSpeed: 140,
                    direction: -1,
                    arcs: [
                        { color: 'dau', startAngle: 120, arcWidth: 35 },
                        { color: 'rauma', startAngle: 300, arcWidth: 35 }
                    ],
                    dots: [
                        { color: 'dau', fruitKey: 'dau', angleOffset: 0 },
                        { color: 'rauma', fruitKey: 'rauma', angleOffset: 180 }
                    ]
                },
                {
                    radius: 230,
                    rotationSpeed: 155,
                    direction: 1,
                    arcs: [
                        { color: 'nho', startAngle: 30, arcWidth: 35 },
                        { color: 'dao', startAngle: 210, arcWidth: 35 }
                    ],
                    dots: [
                        { color: 'nho', fruitKey: 'nho', angleOffset: 0 },
                        { color: 'dao', fruitKey: 'dao', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Fruit Lvl 10
        {
            id: 10,
            name: "Fruit 10: Thần Trận Trái Cây Vô Địch",
            desc: "Tất cả 6 vòng xoay đồng thời cùng lúc! Vòng Khuyết & 5 loại Trái Cây/Lá.",
            timeLimit: 90,
            groups: [[0, 1, 2, 3, 4, 5]],
            rings: [
                {
                    radius: 50,
                    rotationSpeed: 90,
                    direction: 1,
                    arcs: [{ color: 'nho', startAngle: 0, arcWidth: 28 }],
                    dots: [{ color: 'nho', fruitKey: 'nho', angleOffset: 0 }]
                },
                {
                    radius: 85, // Partial Ring
                    rotationSpeed: 110,
                    direction: -1,
                    isPartial: true,
                    minAngle: 45,
                    maxAngle: 315,
                    arcs: [{ color: 'rauma', startAngle: 140, arcWidth: 28 }],
                    dots: [{ color: 'rauma', fruitKey: 'rauma', angleOffset: 0 }]
                },
                {
                    radius: 120,
                    rotationSpeed: 130,
                    direction: 1,
                    arcs: [
                        { color: 'thom', startAngle: 30, arcWidth: 28 },
                        { color: 'nho', startAngle: 210, arcWidth: 28 }
                    ],
                    dots: [
                        { color: 'thom', fruitKey: 'thom', angleOffset: 0 },
                        { color: 'nho', fruitKey: 'nho', angleOffset: 180 }
                    ]
                },
                {
                    radius: 155, // Partial Ring
                    rotationSpeed: 145,
                    direction: -1,
                    isPartial: true,
                    minAngle: 30,
                    maxAngle: 300,
                    arcs: [{ color: 'dao', startAngle: 130, arcWidth: 28 }],
                    dots: [{ color: 'dao', fruitKey: 'dao', angleOffset: 0 }]
                },
                {
                    radius: 190,
                    rotationSpeed: 160,
                    direction: 1,
                    arcs: [
                        { color: 'dau', startAngle: 15, arcWidth: 25 },
                        { color: 'rauma', startAngle: 135, arcWidth: 25 },
                        { color: 'nho', startAngle: 255, arcWidth: 25 }
                    ],
                    dots: [
                        { color: 'dau', fruitKey: 'dau', angleOffset: 0 },
                        { color: 'rauma', fruitKey: 'rauma', angleOffset: 120 },
                        { color: 'nho', fruitKey: 'nho', angleOffset: 240 }
                    ]
                },
                {
                    radius: 230,
                    rotationSpeed: -175,
                    direction: -1,
                    arcs: [
                        { color: 'nho', startAngle: 45, arcWidth: 25 },
                        { color: 'dao', startAngle: 135, arcWidth: 25 },
                        { color: 'thom', startAngle: 225, arcWidth: 25 },
                        { color: 'rauma', startAngle: 315, arcWidth: 25 }
                    ],
                    dots: [
                        { color: 'nho', fruitKey: 'nho', angleOffset: 0 },
                        { color: 'dao', fruitKey: 'dao', angleOffset: 90 },
                        { color: 'thom', fruitKey: 'thom', angleOffset: 180 },
                        { color: 'rauma', fruitKey: 'rauma', angleOffset: 270 }
                    ]
                }
            ]
        }
    ]
};

if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
