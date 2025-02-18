# How to use Splash Screens

## What you need

- [Aroma](https://aroma.foryour.cafe/)

## Usage

The module will attempt to load the splash image, in this order:

1. `sd:/wiiu/enviroments/aroma/splash.png`
2. `sd:/wiiu/enviroments/aroma/splash.tga`
3. A random image from the directory `sd:/wiiu/enviroments/aroma/splashes/`.

If no splash screen is found on the sd card, this module will effectively do nothing.

??? tip "Notes"

    - When using a `tga` make sure its 24 bit and uncompressed
    - In theory any (reasonable) resolution is supported, something like 1280x720 is recommended
    - If you are loading your splash from `sd:/wiiu/enviroments/aroma/splash.png` make sure your image is named `splash.png`
    - If you are loading your splash from `sd:/wiiu/enviroments/aroma/splashes/` you can name your images whatever you want and one will be loaded randomly

!!! success

    Your splash will now show after the initial boot up is done