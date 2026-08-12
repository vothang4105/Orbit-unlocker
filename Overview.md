# GAME SPECIFICATION: CIRCULAR LOCKPICKING GAME

## 1. Mổ tả Game (Game Overview)
- **Tên dự án (dự kiến):** Circular Lockpicking / Orbit Unlocker
- **Thể loại:** Casual / Puzzle / Rhythm-based Timing
- **Mô tả ngắn:** Trò chơi thử thách khả năng phản xạ và căn thời gian. Màn chơi gồm các vòng tròn đồng tâm chứa các điểm màu (Dots) di chuyển liên tục. Nhiệm vụ của người chơi là bấm dừng đúng thời điểm để tất cả các điểm màu dừng lại chính xác tại các đoạn cong có màu tương ứng (Arcs).

---

## 2. Cơ chế chơi (Game Mechanics)

### 2.1 Core Loop (Vòng lặp cốt lõi)
1. Bắt đầu màn chơi: Các vòng tròn đồng tâm bắt đầu xoay (hoặc các điểm màu di chuyển trên quỹ đạo vòng tròn).
2. Người chơi quan sát vị trí của **Dot (Điểm màu)** và **Arc (Đoạn cong tương ứng)**.
3. Người chơi thực hiện thao tác (Nhấn Space / Click / Chạm màn hình) để **khóa/dừng** chuyển động.
4. **Kiểm tra điều kiện (Hit Detection):**
   - **Thành công:** Nếu toàn bộ (hoặc điểm thuộc vòng hiện tại) nằm đúng trong phạm vi đoạn cong cùng màu $\rightarrow$ Dừng điểm đó lại.
   - **Thất bại:** Nếu bấm lệch $\rightarrow$ Báo lỗi (Rung màn hình / Báo Game Over / Reset lại vòng).
5. **Thắng màn (Win Condition):** Tất cả các điểm màu trên mọi vòng đều được khóa thành công vào đúng vị trí.

### 2.2 Quy tắc Toán học & Góc (Angle Logic)
- Hệ tọa độ cực (Polar Coordinates): Góc $\theta \in [0, 360^\circ)$ hoặc $[0, 2\pi]$.
- Vị trí thực tế của Dot: `globalAngle = (ringCurrentAngle + dotOffset) % 360`
- Điều kiện trúng mục tiêu (Hit): `arcStartAngle <= globalAngle <= arcEndAngle` (Cần xử lý trường hợp đè mốc $0^\circ$).

---

## 3. Các cấp độ & Tiến trình (Levels & Progression)

Game tăng độ khó dựa trên việc cấu hình dữ liệu (Level Data):

* **Level 1 (Dễ/Hướng dẫn):**
  - 1 đến 2 vòng tròn.
  - Tốc độ xoay chậm.
  - Đoạn cong (Arc) rộng (vd: $60^\circ - 90^\circ$).
  - Chỉ có 1 màu duy nhất.
* **Level 2 (Trung bình):**
  - 3 đến 4 vòng tròn.
  - Các vòng xoay ngược chiều nhau (1 vòng quay thuận kim đồng hồ, 1 vòng quay ngược).
  - Xuất hiện 2 - 3 màu khác nhau trên cùng một vòng.
  - Tốc độ xoay tăng dần.
* **Level 3+ (Khó/Nâng cao):**
  - 5+ vòng đồng tâm.
  - Tốc độ xoay biến thiên (nhanh chậm thất thường).
  - Đoạn cong (Arc) hẹp (vd: $15^\circ - 30^\circ$), đòi hỏi độ chính xác cao.
  - Thêm cơ chế giới hạn thời gian (Time Limit).

---

## 4. Cách vận hành & Luồng dữ liệu (Game Architecture & Flow)

### 4.1 State Machine (Quản lý trạng thái Game)
- `INIT`: Khởi tạo Canvas, nạp tài nguyên.
- `MENU`: Màn hình chờ bắt đầu.
- `PLAYING`: Vòng lặp Game Loop cập nhật vị trí các vòng/điểm liên tục.
- `CHECKING`: Đánh giá logic khi người chơi bấm nút.
- `LEVEL_COMPLETE`: Hiệu ứng chiến thắng, chuyển màn.
- `GAME_OVER`: Hiệu ứng thua, cho phép chơi lại.

### 4.2 Game Loop
Sử dụng `requestAnimationFrame(loop)`:
1. `Update(deltaTime)`: Cập nhật góc quay dựa trên `rotationSpeed * deltaTime`.
2. `Render(ctx)`:
   - Clear Canvas.
   - Vẽ các đường tròn quỹ đạo.
   - Vẽ các đoạn cong (Arcs) với màu sắc tương ứng.
   - Vẽ các điểm màu (Dots).
   - Vẽ hiệu ứng / UI.

---

## 5. Công nghệ sử dụng (Tech Stack)

- **Language:** JavaScript (ES6+ Vanilla).
- **Rendering API:** HTML5 Canvas API (2D Context).
- **Styling:** CSS3 (Flexbox căn giữa canvas, màu nền tối/Dark theme).
- **Markup:** HTML5.
- **Bundler / Tooling:** Không bắt đầu bằng framework phức tạp (No Webpack/Vite ban đầu), chạy trực tiếp qua Live Server để dễ debug.

---

## 6. Cấu trúc thư mục file (Project File Structure)

```text
circular-lockpicking-game/
├── index.html          # File chứa Canvas và UI cơ bản
├── css/
│   └── style.css       # Layout, căn giữa canvas, style hiệu ứng
├── js/
│   ├── config.js       # Chứa Level Data (dạng JSON/Array) và hằng số Game
│   ├── utils.js        # Các hàm toán học (tính góc, normalize angle, random)
│   ├── entities/
│   │   ├── Ring.js     # Class quản lý từng vòng tròn
│   │   ├── Dot.js      # Class quản lý điểm màu
│   │   └── Arc.js      # Class quản lý đoạn cong đích
│   ├── GameManager.js  # Quản lý luồng Game, score, level state
│   └── main.js         # Entry point (Khởi tạo canvas, lắng nghe sự kiện, chạy Game Loop)
└── Overview.md           # Tài liệu dự án (File này)


## 7. Yêu cầu triển khai dành cho Agent (Guidelines for AI Coding Agent)Module hóa: Viết code theo hướng đối tượng (OOP) phân tách rõ ràng theo cấu trúc thư mục trên.Performance: Tránh khởi tạo object mới bên trong hàm Render()/Update() để tối ưu bộ nhớ.Clean Code: Đặt tên biến rõ ràng đại diện cho góc (angle, radians), độ rộng (arcWidth), bán kính (radius).Edge Cases: Bắt buộc xử lý bài toán góc $0^\circ / 360^\circ$ khi kiểm tra Va chạm (Hit Detection).



