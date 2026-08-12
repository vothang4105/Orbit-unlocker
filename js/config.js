/**
 * Orbit Unlocker - Global Game Configurations & Level Definitions
 * 10-Level Progression: Cyber & Fruit Modes with Partial Oscillating Rings
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

        inactiveTrack: 'rgba(255, 255, 255, 0.08)',
        activeTrack: 'rgba(0, 245, 212, 0.4)',
        lockedTrack: 'rgba(0, 245, 212, 0.85)',
        spokeLine: 'rgba(255, 255, 255, 0.06)'
    },

    SPOKES_COUNT: 12,
    HIT_TOLERANCE_DEG: 5.5,

    THEMES: {
        CYBER: 'CYBER',
        FRUIT: 'FRUIT'
    },

    // Standard Cyber Levels (10 Levels)
    LEVELS: [
        // Level 1: Giữ nguyên
        {
            id: 1,
            name: "Màn 1: Căn Giờ Cơ Bản",
            desc: "Mở từ vòng trong cùng ra ngoài. Mỗi lượt 1 vòng quay.",
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

        // Level 2: Giữ nguyên
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

        // Level 3: Giữ nguyên
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

        // Level 4: Giữ nguyên
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

        // Level 5: LÀM QUEN VÒNG KHUYẾT BẬT NGƯỢC
        {
            id: 5,
            name: "Màn 5: Giới Thiệu Vòng Khuyết",
            desc: "Vòng tròn thứ 2 bị khuyết! Chấm màu sẽ tự dội ngược lại khi đụng nút chặn.",
            timeLimit: 90,
            groups: [[0], [1], [2]],
            rings: [
                {
                    radius: 65,
                    rotationSpeed: 60,
                    direction: 1,
                    arcs: [{ color: 'yellow', startAngle: 45, arcWidth: 60 }],
                    dots: [{ color: 'yellow', angleOffset: 0 }]
                },
                {
                    radius: 130, // Partial Oscillating Ring!
                    rotationSpeed: 80,
                    direction: 1,
                    isPartial: true,
                    minAngle: 45,
                    maxAngle: 315,
                    arcs: [{ color: 'cyan', startAngle: 180, arcWidth: 55 }],
                    dots: [{ color: 'cyan', angleOffset: 0 }]
                },
                {
                    radius: 195,
                    rotationSpeed: -85,
                    direction: -1,
                    arcs: [
                        { color: 'yellow', startAngle: 90, arcWidth: 55 },
                        { color: 'cyan', startAngle: 270, arcWidth: 55 }
                    ],
                    dots: [
                        { color: 'yellow', angleOffset: 0 },
                        { color: 'cyan', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Level 6: ĐA VÒNG KHUYẾT 3 MÀU
        {
            id: 6,
            name: "Màn 6: Đa Vòng Khuyết 3 Màu",
            desc: "Nhiều vòng khuyết dội ngược với 3 màu sắc khác nhau.",
            timeLimit: 85,
            groups: [[0], [1, 2], [3]],
            rings: [
                {
                    radius: 55,
                    rotationSpeed: 70,
                    direction: 1,
                    arcs: [{ color: 'pink', startAngle: 30, arcWidth: 50 }],
                    dots: [{ color: 'pink', angleOffset: 0 }]
                },
                {
                    radius: 110,
                    rotationSpeed: 85,
                    direction: 1,
                    isPartial: true,
                    minAngle: 30,
                    maxAngle: 270,
                    arcs: [{ color: 'cyan', startAngle: 120, arcWidth: 45 }],
                    dots: [{ color: 'cyan', angleOffset: 0 }]
                },
                {
                    radius: 165,
                    rotationSpeed: -95,
                    direction: -1,
                    isPartial: true,
                    minAngle: 60,
                    maxAngle: 330,
                    arcs: [
                        { color: 'yellow', startAngle: 0, arcWidth: 45 },
                        { color: 'pink', startAngle: 180, arcWidth: 45 }
                    ],
                    dots: [
                        { color: 'yellow', angleOffset: 0 },
                        { color: 'pink', angleOffset: 180 }
                    ]
                },
                {
                    radius: 220,
                    rotationSpeed: 110,
                    direction: 1,
                    arcs: [
                        { color: 'cyan', startAngle: 90, arcWidth: 45 },
                        { color: 'yellow', startAngle: 270, arcWidth: 45 }
                    ],
                    dots: [
                        { color: 'cyan', angleOffset: 0 },
                        { color: 'yellow', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Level 7: VÒNG KHUYẾT + XOAY ĐỒNG THỜI
        {
            id: 7,
            name: "Màn 7: Song Vòng Khuyết Đồng Thời",
            desc: "2 vòng không liên tiếp xoay đồng thời kết hợp Vòng Khuyết!",
            timeLimit: 80,
            groups: [[0, 2], [1, 3]],
            rings: [
                {
                    radius: 55,
                    rotationSpeed: 80,
                    direction: 1,
                    arcs: [{ color: 'yellow', startAngle: 0, arcWidth: 40 }],
                    dots: [{ color: 'yellow', angleOffset: 0 }]
                },
                {
                    radius: 110,
                    rotationSpeed: -95,
                    direction: -1,
                    isPartial: true,
                    minAngle: 45,
                    maxAngle: 315,
                    arcs: [{ color: 'pink', startAngle: 150, arcWidth: 40 }],
                    dots: [{ color: 'pink', angleOffset: 0 }]
                },
                {
                    radius: 165,
                    rotationSpeed: 110,
                    direction: 1,
                    isPartial: true,
                    minAngle: 30,
                    maxAngle: 280,
                    arcs: [
                        { color: 'cyan', startAngle: 60, arcWidth: 40 },
                        { color: 'yellow', startAngle: 240, arcWidth: 40 }
                    ],
                    dots: [
                        { color: 'cyan', angleOffset: 0 },
                        { color: 'yellow', angleOffset: 180 }
                    ]
                },
                {
                    radius: 220,
                    rotationSpeed: -125,
                    direction: -1,
                    arcs: [
                        { color: 'pink', startAngle: 90, arcWidth: 40 },
                        { color: 'cyan', startAngle: 270, arcWidth: 40 }
                    ],
                    dots: [
                        { color: 'pink', angleOffset: 0 },
                        { color: 'cyan', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Level 8: 5 VÒNG KẾT HỢP VÒNG KHUYẾT
        {
            id: 8,
            name: "Màn 8: Đại Tiệc Vòng Khuyết 5 Vòng",
            desc: "3 vòng xoay đồng thời xen kẽ các Vòng Khuyết dội ngược. Arc ngắn 35°.",
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
                    isPartial: true,
                    minAngle: 45,
                    maxAngle: 315,
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
                    isPartial: true,
                    minAngle: 30,
                    maxAngle: 290,
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

        // Level 9: THẦN TRẬN 5 VÒNG SIÊU TỐC (Màn 5 cũ)
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
                    arcs: [{ color: 'pink', startAngle: 0, arcWidth: 32 }],
                    dots: [{ color: 'pink', angleOffset: 0 }]
                },
                {
                    radius: 95,
                    rotationSpeed: -110,
                    direction: -1,
                    arcs: [{ color: 'yellow', startAngle: 90, arcWidth: 32 }],
                    dots: [{ color: 'yellow', angleOffset: 0 }]
                },
                {
                    radius: 140,
                    rotationSpeed: 125,
                    direction: 1,
                    arcs: [
                        { color: 'cyan', startAngle: 45, arcWidth: 32 },
                        { color: 'pink', startAngle: 225, arcWidth: 32 }
                    ],
                    dots: [
                        { color: 'cyan', angleOffset: 0 },
                        { color: 'pink', angleOffset: 180 }
                    ]
                },
                {
                    radius: 185,
                    rotationSpeed: -140,
                    direction: -1,
                    arcs: [
                        { color: 'blue', startAngle: 120, arcWidth: 32 },
                        { color: 'yellow', startAngle: 300, arcWidth: 32 }
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
                        { color: 'cyan', startAngle: 30, arcWidth: 32 },
                        { color: 'blue', startAngle: 210, arcWidth: 32 }
                    ],
                    dots: [
                        { color: 'cyan', angleOffset: 0 },
                        { color: 'blue', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Level 10: THẦN TRẬN VÔ ĐỊCH (KẾT HỢP TẤT CẢ YẾU TỐ CŨ VÀ MỚI)
        {
            id: 10,
            name: "Màn 10: Thần Trận Vô Địch 6 Vòng",
            desc: "CỰC KHÓ! Tất cả 6 vòng xoay đồng thời cùng lúc, bao gồm cả Vòng Khuyết & Vòng 360°, 4 Màu, Arc 22°.",
            timeLimit: 90,
            groups: [[0, 1, 2, 3, 4, 5]], // ALL 6 RINGS SPIN SIMULTANEOUSLY!
            rings: [
                {
                    radius: 50,
                    rotationSpeed: 90,
                    direction: 1,
                    arcs: [{ color: 'cyan', startAngle: 0, arcWidth: 25 }],
                    dots: [{ color: 'cyan', angleOffset: 0 }]
                },
                {
                    radius: 85,
                    rotationSpeed: -110,
                    direction: -1,
                    isPartial: true,
                    minAngle: 45,
                    maxAngle: 315,
                    arcs: [
                        { color: 'yellow', startAngle: 60, arcWidth: 25 },
                        { color: 'pink', startAngle: 240, arcWidth: 25 }
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
                        { color: 'blue', startAngle: 30, arcWidth: 25 },
                        { color: 'cyan', startAngle: 210, arcWidth: 25 }
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
                    isPartial: true,
                    minAngle: 30,
                    maxAngle: 300,
                    arcs: [
                        { color: 'pink', startAngle: 90, arcWidth: 25 },
                        { color: 'yellow', startAngle: 270, arcWidth: 25 }
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
                        { color: 'yellow', startAngle: 15, arcWidth: 22 },
                        { color: 'blue', startAngle: 135, arcWidth: 22 },
                        { color: 'cyan', startAngle: 255, arcWidth: 22 }
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

    // Fruit Mode Specific Levels (10 Levels)
    FRUIT_LEVELS: [
        // Fruit Lvl 1: Giữ nguyên
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

        // Fruit Lvl 2: Giữ nguyên
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

        // Fruit Lvl 3: Giữ nguyên
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

        // Fruit Lvl 4: Giữ nguyên
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

        // Fruit Lvl 5: LÀM QUEN VÒNG KHUYẾT
        {
            id: 5,
            name: "Fruit 5: Giới Thiệu Vòng Khuyết Quả",
            desc: "Căn thời gian Nho & Dâu trên Vòng Khuyết tự dội ngược!",
            timeLimit: 90,
            groups: [[0], [1], [2]],
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
                    rotationSpeed: 80,
                    direction: 1,
                    isPartial: true,
                    minAngle: 45,
                    maxAngle: 315,
                    arcs: [{ color: 'nho', startAngle: 180, arcWidth: 55 }],
                    dots: [{ color: 'nho', fruitKey: 'nho', angleOffset: 0 }]
                },
                {
                    radius: 195,
                    rotationSpeed: -85,
                    direction: -1,
                    arcs: [
                        { color: 'thom', startAngle: 90, arcWidth: 55 },
                        { color: 'dao', startAngle: 270, arcWidth: 55 }
                    ],
                    dots: [
                        { color: 'thom', fruitKey: 'thom', angleOffset: 0 },
                        { color: 'dao', fruitKey: 'dao', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Fruit Lvl 6: ĐA VÒNG KHUYẾT HOA QUẢ
        {
            id: 6,
            name: "Fruit 6: Đa Vòng Khuyết Nhiệt Đới",
            desc: "Nhiều vòng khuyết dội ngược với các quả Dâu, Nho, Thơm, Đào.",
            timeLimit: 85,
            groups: [[0], [1, 2], [3]],
            rings: [
                {
                    radius: 55,
                    rotationSpeed: 70,
                    direction: 1,
                    arcs: [{ color: 'dao', startAngle: 30, arcWidth: 50 }],
                    dots: [{ color: 'dao', fruitKey: 'dao', angleOffset: 0 }]
                },
                {
                    radius: 110,
                    rotationSpeed: 85,
                    direction: 1,
                    isPartial: true,
                    minAngle: 30,
                    maxAngle: 270,
                    arcs: [{ color: 'nho', startAngle: 120, arcWidth: 45 }],
                    dots: [{ color: 'nho', fruitKey: 'nho', angleOffset: 0 }]
                },
                {
                    radius: 165,
                    rotationSpeed: -95,
                    direction: -1,
                    isPartial: true,
                    minAngle: 60,
                    maxAngle: 330,
                    arcs: [
                        { color: 'dau', startAngle: 0, arcWidth: 45 },
                        { color: 'thom', startAngle: 180, arcWidth: 45 }
                    ],
                    dots: [
                        { color: 'dau', fruitKey: 'dau', angleOffset: 0 },
                        { color: 'thom', fruitKey: 'thom', angleOffset: 180 }
                    ]
                },
                {
                    radius: 220,
                    rotationSpeed: 110,
                    direction: 1,
                    arcs: [
                        { color: 'nho', startAngle: 90, arcWidth: 45 },
                        { color: 'dao', startAngle: 270, arcWidth: 45 }
                    ],
                    dots: [
                        { color: 'nho', fruitKey: 'nho', angleOffset: 0 },
                        { color: 'dao', fruitKey: 'dao', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Fruit Lvl 7: SONG VÒNG KHUYẾT ĐỒNG THỜI
        {
            id: 7,
            name: "Fruit 7: Song Vòng Khuyết Đồng Thời",
            desc: "2 vòng không liên tiếp xoay đồng thời kết hợp Vòng Khuyết Quả!",
            timeLimit: 80,
            groups: [[0, 2], [1, 3]],
            rings: [
                {
                    radius: 55,
                    rotationSpeed: 80,
                    direction: 1,
                    arcs: [{ color: 'dau', startAngle: 0, arcWidth: 40 }],
                    dots: [{ color: 'dau', fruitKey: 'dau', angleOffset: 0 }]
                },
                {
                    radius: 110,
                    rotationSpeed: -95,
                    direction: -1,
                    isPartial: true,
                    minAngle: 45,
                    maxAngle: 315,
                    arcs: [{ color: 'thom', startAngle: 150, arcWidth: 40 }],
                    dots: [{ color: 'thom', fruitKey: 'thom', angleOffset: 0 }]
                },
                {
                    radius: 165,
                    rotationSpeed: 110,
                    direction: 1,
                    isPartial: true,
                    minAngle: 30,
                    maxAngle: 280,
                    arcs: [
                        { color: 'nho', startAngle: 60, arcWidth: 40 },
                        { color: 'dao', startAngle: 240, arcWidth: 40 }
                    ],
                    dots: [
                        { color: 'nho', fruitKey: 'nho', angleOffset: 0 },
                        { color: 'dao', fruitKey: 'dao', angleOffset: 180 }
                    ]
                },
                {
                    radius: 220,
                    rotationSpeed: -125,
                    direction: -1,
                    arcs: [
                        { color: 'thom', startAngle: 90, arcWidth: 40 },
                        { color: 'dau', startAngle: 270, arcWidth: 40 }
                    ],
                    dots: [
                        { color: 'thom', fruitKey: 'thom', angleOffset: 0 },
                        { color: 'dau', fruitKey: 'dau', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Fruit Lvl 8: ĐẠI TIỆC VÒNG KHUYẾT 5 VÒNG
        {
            id: 8,
            name: "Fruit 8: Đại Tiệc Trái Cây Vòng Khuyết",
            desc: "3 vòng xoay đồng thời xen kẽ các Vòng Khuyết dội ngược.",
            timeLimit: 80,
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
                    isPartial: true,
                    minAngle: 45,
                    maxAngle: 315,
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
                    isPartial: true,
                    minAngle: 30,
                    maxAngle: 290,
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
        },

        // Fruit Lvl 9: ĐẠI TIỆC TRÁI CÂY 5 VÒNG SIÊU TỐC
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
                    arcs: [{ color: 'dau', startAngle: 0, arcWidth: 32 }],
                    dots: [{ color: 'dau', fruitKey: 'dau', angleOffset: 0 }]
                },
                {
                    radius: 95,
                    rotationSpeed: -110,
                    direction: -1,
                    arcs: [{ color: 'thom', startAngle: 90, arcWidth: 32 }],
                    dots: [{ color: 'thom', fruitKey: 'thom', angleOffset: 0 }]
                },
                {
                    radius: 140,
                    rotationSpeed: 125,
                    direction: 1,
                    arcs: [
                        { color: 'nho', startAngle: 45, arcWidth: 32 },
                        { color: 'dao', startAngle: 225, arcWidth: 32 }
                    ],
                    dots: [
                        { color: 'nho', fruitKey: 'nho', angleOffset: 0 },
                        { color: 'dao', fruitKey: 'dao', angleOffset: 180 }
                    ]
                },
                {
                    radius: 185,
                    rotationSpeed: -140,
                    direction: -1,
                    arcs: [
                        { color: 'dau', startAngle: 120, arcWidth: 32 },
                        { color: 'thom', startAngle: 300, arcWidth: 32 }
                    ],
                    dots: [
                        { color: 'dau', fruitKey: 'dau', angleOffset: 0 },
                        { color: 'thom', fruitKey: 'thom', angleOffset: 180 }
                    ]
                },
                {
                    radius: 230,
                    rotationSpeed: 155,
                    direction: 1,
                    arcs: [
                        { color: 'nho', startAngle: 30, arcWidth: 32 },
                        { color: 'dao', startAngle: 210, arcWidth: 32 }
                    ],
                    dots: [
                        { color: 'nho', fruitKey: 'nho', angleOffset: 0 },
                        { color: 'dao', fruitKey: 'dao', angleOffset: 180 }
                    ]
                }
            ]
        },

        // Fruit Lvl 10: THẦN TRẬN TRÁI CÂY VÔ ĐỊCH
        {
            id: 10,
            name: "Fruit 10: Thần Trận Trái Cây Vô Địch",
            desc: "Tất cả 6 vòng xoay đồng thời cùng lúc! Đầy đủ Vòng Khuyết & 4 loại Trái Cây.",
            timeLimit: 90,
            groups: [[0, 1, 2, 3, 4, 5]],
            rings: [
                {
                    radius: 50,
                    rotationSpeed: 90,
                    direction: 1,
                    arcs: [{ color: 'nho', startAngle: 0, arcWidth: 25 }],
                    dots: [{ color: 'nho', fruitKey: 'nho', angleOffset: 0 }]
                },
                {
                    radius: 85,
                    rotationSpeed: -110,
                    direction: -1,
                    isPartial: true,
                    minAngle: 45,
                    maxAngle: 315,
                    arcs: [
                        { color: 'dau', startAngle: 60, arcWidth: 25 },
                        { color: 'dao', startAngle: 240, arcWidth: 25 }
                    ],
                    dots: [
                        { color: 'dau', fruitKey: 'dau', angleOffset: 0 },
                        { color: 'dao', fruitKey: 'dao', angleOffset: 180 }
                    ]
                },
                {
                    radius: 120,
                    rotationSpeed: 130,
                    direction: 1,
                    arcs: [
                        { color: 'thom', startAngle: 30, arcWidth: 25 },
                        { color: 'nho', startAngle: 210, arcWidth: 25 }
                    ],
                    dots: [
                        { color: 'thom', fruitKey: 'thom', angleOffset: 0 },
                        { color: 'nho', fruitKey: 'nho', angleOffset: 180 }
                    ]
                },
                {
                    radius: 155,
                    rotationSpeed: -145,
                    direction: -1,
                    isPartial: true,
                    minAngle: 30,
                    maxAngle: 300,
                    arcs: [
                        { color: 'dao', startAngle: 90, arcWidth: 25 },
                        { color: 'dau', startAngle: 270, arcWidth: 25 }
                    ],
                    dots: [
                        { color: 'dao', fruitKey: 'dao', angleOffset: 0 },
                        { color: 'dau', fruitKey: 'dau', angleOffset: 180 }
                    ]
                },
                {
                    radius: 190,
                    rotationSpeed: 160,
                    direction: 1,
                    arcs: [
                        { color: 'dau', startAngle: 15, arcWidth: 22 },
                        { color: 'thom', startAngle: 135, arcWidth: 22 },
                        { color: 'nho', startAngle: 255, arcWidth: 22 }
                    ],
                    dots: [
                        { color: 'dau', fruitKey: 'dau', angleOffset: 0 },
                        { color: 'thom', fruitKey: 'thom', angleOffset: 120 },
                        { color: 'nho', fruitKey: 'nho', angleOffset: 240 }
                    ]
                },
                {
                    radius: 230,
                    rotationSpeed: -175,
                    direction: -1,
                    arcs: [
                        { color: 'nho', startAngle: 45, arcWidth: 22 },
                        { color: 'dao', startAngle: 135, arcWidth: 22 },
                        { color: 'thom', startAngle: 225, arcWidth: 22 },
                        { color: 'dau', startAngle: 315, arcWidth: 22 }
                    ],
                    dots: [
                        { color: 'nho', fruitKey: 'nho', angleOffset: 0 },
                        { color: 'dao', fruitKey: 'dao', angleOffset: 90 },
                        { color: 'thom', fruitKey: 'thom', angleOffset: 180 },
                        { color: 'dau', fruitKey: 'dau', angleOffset: 270 }
                    ]
                }
            ]
        }
    ]
};

if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
