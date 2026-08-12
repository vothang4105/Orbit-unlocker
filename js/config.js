/**
 * Orbit Unlocker - Global Game Configurations & Level Definitions
 * Cyber & Fruit Mode Configurations
 */

const CONFIG = {
    CANVAS_BASE_SIZE: 600,
    INNER_CENTER_RADIUS: 24,
    MAX_LIVES: 3,          // 3 Lives / Mistakes limit
    MISS_PENALTY_SCORE: 50,// Score deducted per miss

    // Color Palette matching Sci-Fi & Fruit Themes
    COLORS: {
        // Cyber Colors
        yellow: '#f5d020',
        cyan: '#00f5d4',
        pink: '#ff2a6d',
        blue: '#00b4d8',
        purple: '#9d4edd',
        
        // Fruit Colors
        dau: '#ff3366',    // Strawberry Red
        nho: '#9d4edd',    // Grape Purple
        thom: '#ffb703',   // Pineapple Gold
        dao: '#ff85a1',    // Peach Coral

        inactiveTrack: 'rgba(255, 255, 255, 0.08)',
        activeTrack: 'rgba(0, 245, 212, 0.4)',
        lockedTrack: 'rgba(0, 245, 212, 0.85)',
        fruitTrack: 'rgba(255, 215, 0, 0.35)',
        spokeLine: 'rgba(255, 255, 255, 0.06)'
    },

    SPOKES_COUNT: 12,
    HIT_TOLERANCE_DEG: 5.5,

    // Game Themes
    THEMES: {
        CYBER: 'CYBER',
        FRUIT: 'FRUIT'
    },

    // Standard Cyber Levels
    LEVELS: [
        // Level 1: 2 Vòng, Xoay Đơn Lẻ từng Vòng (Vòng 0 -> Vòng 1)
        {
            id: 1,
            name: "Màn 1: Căn Giờ Cơ Bản",
            desc: "Mở từ vòng trong cùng ra ngoài. Mỗi lượt chỉ 1 vòng quay.",
            timeLimit: null,
            groups: [[0], [1]],
            rings: [
                {
                    radius: 70,
                    rotationSpeed: 50,
                    direction: 1,
                    arcs: [{ color: 'yellow', startAngle: 60, arcWidth: 80 }],
                    dots: [{ color: 'yellow', angleOffset: 0 }]
                },
                {
                    radius: 160,
                    rotationSpeed: 65,
                    direction: -1,
                    arcs: [{ color: 'yellow', startAngle: 210, arcWidth: 80 }],
                    dots: [{ color: 'yellow', angleOffset: 0 }]
                }
            ]
        },

        // Level 2: 3 Vòng, 2 Màu
        {
            id: 2,
            name: "Màn 2: 3 Vòng Đơn Lẻ (2 Màu)",
            desc: "3 vòng xoay đơn lẻ từ trong ra ngoài. 2 điểm màu.",
            timeLimit: null,
            groups: [[0], [1], [2]],
            rings: [
                {
                    radius: 65,
                    rotationSpeed: 60,
                    direction: 1,
                    arcs: [{ color: 'cyan', startAngle: 30, arcWidth: 65 }],
                    dots: [{ color: 'cyan', angleOffset: 0 }]
                },
                {
                    radius: 130,
                    rotationSpeed: -75,
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
                    rotationSpeed: 90,
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

        // Level 3: 2 Vòng Liên Tiếp Xoay Cùng Lúc
        {
            id: 3,
            name: "Màn 3: 2 Vòng Liên Tiếp Đồng Thời",
            desc: "Vòng 1 & 2 xoay cùng lúc! Cần 1 lần bấm SPACE khớp cả 2 vòng.",
            timeLimit: 90,
            groups: [[0, 1], [2]],
            rings: [
                {
                    radius: 65,
                    rotationSpeed: 70,
                    direction: 1,
                    arcs: [{ color: 'yellow', startAngle: 45, arcWidth: 55 }],
                    dots: [{ color: 'yellow', angleOffset: 0 }]
                },
                {
                    radius: 130,
                    rotationSpeed: -85,
                    direction: -1,
                    arcs: [{ color: 'cyan', startAngle: 180, arcWidth: 55 }],
                    dots: [{ color: 'cyan', angleOffset: 0 }]
                },
                {
                    radius: 200,
                    rotationSpeed: 100,
                    direction: 1,
                    arcs: [
                        { color: 'yellow', startAngle: 60, arcWidth: 50 },
                        { color: 'cyan', startAngle: 240, arcWidth: 50 }
                    ],
                    dots: [
                        { color: 'yellow', angleOffset: 0 },
                        { color: 'cyan', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Level 4: 2 Vòng Không Liên Tiếp Xoay Cùng Lúc
        {
            id: 4,
            name: "Màn 4: 2 Vòng Không Liên Tiếp Đồng Thời",
            desc: "Vòng (1 & 3) xoay cùng lúc, sau đó Vòng (2 & 4) xoay cùng lúc!",
            timeLimit: 85,
            groups: [[0, 2], [1, 3]],
            rings: [
                {
                    radius: 55,
                    rotationSpeed: 75,
                    direction: 1,
                    arcs: [{ color: 'pink', startAngle: 30, arcWidth: 45 }],
                    dots: [{ color: 'pink', angleOffset: 0 }]
                },
                {
                    radius: 110,
                    rotationSpeed: -90,
                    direction: -1,
                    arcs: [{ color: 'yellow', startAngle: 120, arcWidth: 45 }],
                    dots: [{ color: 'yellow', angleOffset: 0 }]
                },
                {
                    radius: 165,
                    rotationSpeed: 105,
                    direction: 1,
                    arcs: [
                        { color: 'cyan', startAngle: 0, arcWidth: 45 },
                        { color: 'pink', startAngle: 180, arcWidth: 45 }
                    ],
                    dots: [
                        { color: 'cyan', angleOffset: 0 },
                        { color: 'pink', angleOffset: 180 }
                    ]
                },
                {
                    radius: 220,
                    rotationSpeed: -120,
                    direction: -1,
                    arcs: [
                        { color: 'yellow', startAngle: 90, arcWidth: 45 },
                        { color: 'cyan', startAngle: 270, arcWidth: 45 }
                    ],
                    dots: [
                        { color: 'yellow', angleOffset: 0 },
                        { color: 'cyan', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Level 5: 5 Vòng (3 Vòng không liên tiếp)
        {
            id: 5,
            name: "Màn 5: 3 Vòng Không Liên Tiếp Đồng Thời",
            desc: "Vòng (1, 3, 5) xoay cùng lúc! Arc hẹp, tốc độ cao.",
            timeLimit: 80,
            groups: [[0, 2, 4], [1, 3]],
            rings: [
                {
                    radius: 50,
                    rotationSpeed: 85,
                    direction: 1,
                    arcs: [{ color: 'pink', startAngle: 0, arcWidth: 35 }],
                    dots: [{ color: 'pink', angleOffset: 0 }]
                },
                {
                    radius: 95,
                    rotationSpeed: -100,
                    direction: -1,
                    arcs: [{ color: 'yellow', startAngle: 90, arcWidth: 35 }],
                    dots: [{ color: 'yellow', angleOffset: 0 }]
                },
                {
                    radius: 140,
                    rotationSpeed: 115,
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
                    rotationSpeed: -130,
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
                    rotationSpeed: 145,
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

        // Level 6: 6 Vòng Tất Cả Xoay Đồng Thời
        {
            id: 6,
            name: "Màn 6: Thần Trận 6 Vòng Siêu Cấp",
            desc: "Tất cả 6 vòng xoay đồng thời cùng lúc!",
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
                    rotationSpeed: -110,
                    direction: -1,
                    arcs: [
                        { color: 'yellow', startAngle: 60, arcWidth: 28 },
                        { color: 'pink', startAngle: 240, arcWidth: 28 }
                    ],
                    dots: [
                        { color: 'yellow', angleOffset: 0 },
                        { color: 'pink', angleOffset: 180 }
                    ]
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
                    rotationSpeed: -145,
                    direction: -1,
                    arcs: [
                        { color: 'pink', startAngle: 90, arcWidth: 28 },
                        { color: 'yellow', startAngle: 270, arcWidth: 28 }
                    ],
                    dots: [
                        { color: 'pink', angleOffset: 0 },
                        { color: 'yellow', angleOffset: 180 }
                    ]
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
                    rotationSpeed: -175,
                    direction: -1,
                    arcs: [
                        { color: 'cyan', startAngle: 45, arcWidth: 22 },
                        { color: 'pink', startAngle: 135, arcWidth: 22 },
                        { color: 'blue', startAngle: 225, arcWidth: 22 },
                        { color: 'yellow', startAngle: 315, arcWidth: 22 }
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

    // Fruit Mode Specific Levels
    FRUIT_LEVELS: [
        // Level 1: 2 Vòng Fruit (Dâu & Đào)
        {
            id: 1,
            name: "Fruit 1: Khởi Đầu Trái Cây",
            desc: "Căn thời gian quả Dâu và quả Đào đi vào đúng khay!",
            timeLimit: null,
            groups: [[0], [1]],
            rings: [
                {
                    radius: 75,
                    rotationSpeed: 50,
                    direction: 1,
                    arcs: [{ color: 'dau', startAngle: 45, arcWidth: 80 }],
                    dots: [{ color: 'dau', fruitKey: 'dau', angleOffset: 0 }]
                },
                {
                    radius: 165,
                    rotationSpeed: -65,
                    direction: -1,
                    arcs: [{ color: 'dao', startAngle: 180, arcWidth: 80 }],
                    dots: [{ color: 'dao', fruitKey: 'dao', angleOffset: 0 }]
                }
            ]
        },

        // Level 2: 3 Vòng Fruit (Dâu, Nho, Thơm)
        {
            id: 2,
            name: "Fruit 2: Vườn Nho & Thơm",
            desc: "3 vòng xoay đơn lẻ với các trái Dâu, Nho, Thơm.",
            timeLimit: null,
            groups: [[0], [1], [2]],
            rings: [
                {
                    radius: 65,
                    rotationSpeed: 60,
                    direction: 1,
                    arcs: [{ color: 'nho', startAngle: 30, arcWidth: 65 }],
                    dots: [{ color: 'nho', fruitKey: 'nho', angleOffset: 0 }]
                },
                {
                    radius: 130,
                    rotationSpeed: -75,
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
                    rotationSpeed: 90,
                    direction: 1,
                    arcs: [
                        { color: 'nho', startAngle: 0, arcWidth: 60 },
                        { color: 'dao', startAngle: 180, arcWidth: 60 }
                    ],
                    dots: [
                        { color: 'nho', fruitKey: 'nho', angleOffset: 0 },
                        { color: 'dao', fruitKey: 'dao', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Level 3: 2 Vòng Fruit Liên Tiếp
        {
            id: 3,
            name: "Fruit 3: Đôi Bạn Trái Cây",
            desc: "Vòng 1 & 2 xoay cùng lúc! Căn Dâu và Nho cùng khớp 1 lượt.",
            timeLimit: 90,
            groups: [[0, 1], [2]],
            rings: [
                {
                    radius: 65,
                    rotationSpeed: 70,
                    direction: 1,
                    arcs: [{ color: 'dau', startAngle: 45, arcWidth: 55 }],
                    dots: [{ color: 'dau', fruitKey: 'dau', angleOffset: 0 }]
                },
                {
                    radius: 130,
                    rotationSpeed: -85,
                    direction: -1,
                    arcs: [{ color: 'nho', startAngle: 180, arcWidth: 55 }],
                    dots: [{ color: 'nho', fruitKey: 'nho', angleOffset: 0 }]
                },
                {
                    radius: 200,
                    rotationSpeed: 100,
                    direction: 1,
                    arcs: [
                        { color: 'thom', startAngle: 60, arcWidth: 50 },
                        { color: 'dao', startAngle: 240, arcWidth: 50 }
                    ],
                    dots: [
                        { color: 'thom', fruitKey: 'thom', angleOffset: 0 },
                        { color: 'dao', fruitKey: 'dao', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Level 4: 4 Vòng Fruit Không Liên Tiếp
        {
            id: 4,
            name: "Fruit 4: Mật Mã 4 Quả Nhiệt Đới",
            desc: "Vòng (1 & 3) xoay cùng lúc! Sau đó Vòng (2 & 4).",
            timeLimit: 85,
            groups: [[0, 2], [1, 3]],
            rings: [
                {
                    radius: 55,
                    rotationSpeed: 75,
                    direction: 1,
                    arcs: [{ color: 'dao', startAngle: 30, arcWidth: 45 }],
                    dots: [{ color: 'dao', fruitKey: 'dao', angleOffset: 0 }]
                },
                {
                    radius: 110,
                    rotationSpeed: -90,
                    direction: -1,
                    arcs: [{ color: 'dau', startAngle: 120, arcWidth: 45 }],
                    dots: [{ color: 'dau', fruitKey: 'dau', angleOffset: 0 }]
                },
                {
                    radius: 165,
                    rotationSpeed: 105,
                    direction: 1,
                    arcs: [
                        { color: 'thom', startAngle: 0, arcWidth: 45 },
                        { color: 'nho', startAngle: 180, arcWidth: 45 }
                    ],
                    dots: [
                        { color: 'thom', fruitKey: 'thom', angleOffset: 0 },
                        { color: 'nho', fruitKey: 'nho', angleOffset: 180 }
                    ]
                },
                {
                    radius: 220,
                    rotationSpeed: -120,
                    direction: -1,
                    arcs: [
                        { color: 'dau', startAngle: 90, arcWidth: 45 },
                        { color: 'dao', startAngle: 270, arcWidth: 45 }
                    ],
                    dots: [
                        { color: 'dau', fruitKey: 'dau', angleOffset: 0 },
                        { color: 'dao', fruitKey: 'dao', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Level 5: 5 Vòng Fruit Siêu Cấp
        {
            id: 5,
            name: "Fruit 5: Đại Tiệc Trái Cây 5 Vòng",
            desc: "5 vòng trái cây với tốc độ cao và vị trí xoay xen kẽ!",
            timeLimit: 85,
            groups: [[0, 2, 4], [1, 3]],
            rings: [
                {
                    radius: 50,
                    rotationSpeed: 85,
                    direction: 1,
                    arcs: [{ color: 'dau', startAngle: 0, arcWidth: 35 }],
                    dots: [{ color: 'dau', fruitKey: 'dau', angleOffset: 0 }]
                },
                {
                    radius: 95,
                    rotationSpeed: -100,
                    direction: -1,
                    arcs: [{ color: 'thom', startAngle: 90, arcWidth: 35 }],
                    dots: [{ color: 'thom', fruitKey: 'thom', angleOffset: 0 }]
                },
                {
                    radius: 140,
                    rotationSpeed: 115,
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
                    rotationSpeed: -130,
                    direction: -1,
                    arcs: [
                        { color: 'dau', startAngle: 120, arcWidth: 35 },
                        { color: 'thom', startAngle: 300, arcWidth: 35 }
                    ],
                    dots: [
                        { color: 'dau', fruitKey: 'dau', angleOffset: 0 },
                        { color: 'thom', fruitKey: 'thom', angleOffset: 180 }
                    ]
                },
                {
                    radius: 230,
                    rotationSpeed: 145,
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
        }
    ]
};

if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
