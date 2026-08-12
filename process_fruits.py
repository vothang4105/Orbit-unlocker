import os
from PIL import Image

fruits_dir = r"d:\TaDuss\LinhTinh\js\Icon\Fruits"

files = sorted([f for f in os.listdir(fruits_dir) if f.startswith("Screenshot") and f.endswith(".png")])
print("Found screenshots:", files)

# Let's inspect center pixel / colors to identify which fruit is in which screenshot
for idx, fname in enumerate(files):
    fpath = os.path.join(fruits_dir, fname)
    img = Image.open(fpath).convert("RGBA")
    w, h = img.size
    center_color = img.getpixel((w // 2, h // 2))
    print(f"File {fname}: size={w}x{h}, center_pixel={center_color}")
