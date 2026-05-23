---
hide:
  - toc
icon: fontawesome/solid/image
---

# Splash Screen

## What you need

- [Splash Screen Module](https://github.com/wiiu-env/SplashscreenModule). (Bundled with Aroma)

## Usage

The module will attempt to load a splash image from multiple places, in this order:

1. `SD:/wiiu/enviroments/aroma/`: an image named `splash.EXT`
2. `SD:/wiiu/enviroments/aroma/splashes/`: a **random** image in that folder.
3. `SD:/wiiu/`: an image named `splash.EXT`
4. `SD:/wiiu/splashes/`: a **random** image in that folder.

Where `EXT` can be `png`, `jpg`, `jpeg`, `tga` or `webp`.

If no splash screen is found on the sd card, this module will effectively do nothing.

??? tip "Notes"

    - When using a TGA image, make sure its 24 bit and uncompressed,
    - In theory any (reasonable) resolution is supported, **1280x720** is recommended for best quality on both gamepad and TV screens.

!!! success

    Your splash will now show after the initial boot up is done
