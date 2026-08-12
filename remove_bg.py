import os
from PIL import Image

fruits_dir = r"d:\TaDuss\LinhTinh\js\Icon\Fruits"

for filename in os.listdir(fruits_dir):
    if filename.endswith(".png"):
        filepath = os.path.join(fruits_dir, filename)
        img = Image.open(filepath).convert("RGBA")
        width, height = img.size
        print(f"Processing {filename}: {width}x{height}, mode={img.mode}")

        # Check corner pixels to determine background color
        corners = [
            img.getpixel((0, 0)),
            img.getpixel((width - 1, 0)),
            img.getpixel((0, height - 1)),
            img.getpixel((width - 1, height - 1))
        ]
        print(f"Corners for {filename}: {corners}")
