---
hide:
    navigation
---

# Troubleshooting

--------------

## Menu loads but it's unresponsive

You are probably using Swip Swap Me

If you are using the default configuration

- Press the TV button on the gamepad

If you are not using the default configuration and don't remember the button combo

- Delete the config file of the plugin and/or Delete the plugin

--------------

## Checksum Mismatch

Go to [Rompatcher.js](https://www.marcrobledo.com/RomPatcher.js/)

- Click *ROM File*
- Select your ORIGINAL Wii U Menu File
- Check the information below and make sure it matches the following
    - For Men.pack

        ```
        CRC32:
        b9a4343a
        MD5:
        39138b2ff5a94f9cade38084f088c7c1
        SHA-1:
        b39b24aa3b0cfc4441fab10122f41548b63d5595
        ```
    
    - For Men2.pack

        ```    
        CRC32:
        946cd8a2
        MD5:
        e0087fd4bc295abf9b787aab3c1f6292
        SHA-1:
        50a291bc94d4873a52818c8933d9c4b4de69dc6f
        ```

    - For cafe_barista_men.bfsar

        ```
        CRC32:
        c9c16521
        MD5:
        0a2880e33eb0f15102decf2e155f6a95
        SHA-1:
        61a43d75cebba980568f0b554d3638a8a6441597
        ```

If the information does not match, follow [JNUSTool](install/files.md#jnustool) to get your original files again

If the information matches with the one from your files and you're still getting the Source ROM checksum mismatch error, it might be a bad patch, you can try applying the patch anyways or use another theme

--------------

## Black Screen

Either the patch that you used was a bad patch or the Theme is too heavy for the console to handle

You can

- Patch the files again
- Check the size of the file
- If your console is EUR, check if the Theme is compatible with that region

If it doesn't work and the console is still showing a black screen you can try

- On the SDCafiine screen, press B to launch without a modpack
- Delete your theme from `sd:/wiiu/sdcafiine/[TITLEID]/[ThemeName]`
- Deleting the plugin `SD:/wiiu/environments/aroma/plugins/sdcafiine.wps`.

--------------

## Freezing

Something is wrong with the cafe_barista_men.bfsar

Either

- Your music is too long
- Your music is too heavy
- The file was not patched correctly

You can

- Patch the files again
- Check the size of the file
- If the song used is too long, try making it shorter

--------------

## Wii U Menu Bootloop

If your console is bootlooping in the "Wii U Menu" splash screen, something is wrong with your Men.pack, Men2.pack files

You can

- Patch the files again
- Check the size of the file
- If your console is EUR, check if the Theme is compatible with that region

??? question "European Consoles"

    European consoles have more language packs built onto the menu menaning the file size on themes needs to be smaller to work properly. This is more likely to happen with unoptimized or animated themes

If it doesn't work and the console is still loading indefinitely you can try

- Deleting your theme `sd:/wiiu/themes/[ThemeName]`
- Deleting the plugin `SD:/wiiu/environments/aroma/plugins/stylemiiu.wps`.

--------------

## Theme not loading

The files were not loaded correctly/no modifications were made

You can

- Check that you patched the file correctly
- Check that you are using the correct path
    - SDCafiine: `sd:/wiiu/sdcafiine/[TITLEID]/[ThemeName]/content/Common/Package/Men.pack, Men2.pack`
    - StyleMiiU: `sd:/wiiu/themes/[ThemeName]/content/Common/Package/Men.pack, Men2.pack`