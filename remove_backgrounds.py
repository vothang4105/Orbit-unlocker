import os
from PIL import Image

fruits_dir = r"d:\TaDuss\LinhTinh\js\Icon\Fruits"

mapping = {
    'Screenshot 2026-08-13 010823.png': 'Đào.png',
    'Screenshot 2026-08-13 010827.png': 'Dâu.png',
    'Screenshot 2026-08-13 010831.png': 'Nho.png',
    'Screenshot 2026-08-13 010835.png': 'Thơm.png'
}

def remove_bg(filepath):
    img = Image.open(filepath).convert("RGBA")
    w, h = img.size
    pixels = img.load()

    visited = set()
    queue = []

    for x in range(w):
        queue.append((x, 0))
        queue.append((x, h - 1))
    for y in range(h):
        queue.append((0, y))
        queue.append((w - 1, y))

    def is_bg(r, g, b, a):
        if a < 50:
            return True
        is_grey = (abs(r - g) < 20 and abs(g - b) < 20 and abs(r - b) < 20)
        if is_grey and (r > 175 or g > 175 or b > 175):
            return True
        return False

    bg = Image.new("L", (w, h), 0)
    bg_p = bg.load()

    while queue:
        x, y = queue.pop(0)
        if (x, y) in visited:
            continue
        visited.add((x, y))

        r, g, b, a = pixels[x, y]
        if is_bg(r, g, b, a):
            bg_p[x, y] = 255
            for dx, dy in [(-1,0), (1,0), (0,-1), (0,1)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < w and 0 <= ny < h and (nx, ny) not in visited:
                    queue.append((nx, ny))

    for y in range(h):
        for x in range(w):
            if bg_p[x, y] == 255:
                r, g, b, _ = pixels[x, y]
                pixels[x, y] = (r, g, b, 0)

    return img

for src_name, target_name in mapping.items():
    src_path = os.path.join(fruits_dir, src_name)
    target_path = os.path.join(fruits_dir, target_name)
    if os.path.exists(src_path):
        out_img = remove_bg(src_path)
        out_img.save(target_path, "PNG")

print("ALL_FRUIT_IMAGES_PROCESSED")
