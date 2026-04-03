---
hide:
    navigation
---

# Troubleshooting

--------------

## Menu loads but it's unresponsive

You are probably using Swip Swap Me.

If you are using the default configuration

- Press the TV button on the Wii U Gamepad.

If you are not using the default configuration and don't remember the button combo

- Delete the config file of the plugin and/or Delete the plugin.

--------------

## Checksum Mismatch

Go to [Rompatcher.js](https://www.marcrobledo.com/RomPatcher.js/)

- Click **ROM File**.
- Select your ORIGINAL Wii U Menu File.
- Check the information below and make sure it matches the following:
    - For `Men.pack`

        ```
        CRC32:
        b9a4343a
        MD5:
        39138b2ff5a94f9cade38084f088c7c1
        SHA-1:
        b39b24aa3b0cfc4441fab10122f41548b63d5595
        ```
    
    - For `Men2.pack`

        ```    
        CRC32:
        946cd8a2
        MD5:
        e0087fd4bc295abf9b787aab3c1f6292
        SHA-1:
        50a291bc94d4873a52818c8933d9c4b4de69dc6f
        ```

    - For `cafe_barista_men.bfsar`

        ```
        CRC32:
        c9c16521
        MD5:
        0a2880e33eb0f15102decf2e155f6a95
        SHA-1:
        61a43d75cebba980568f0b554d3638a8a6441597
        ```

If the information does not match, follow [JNUSTool](install/files.md#jnustool) to get your original files again.

If the information matches with the one from your files and you're still getting the Source ROM checksum mismatch error, it might be a bad theme patch, you can try applying the patch anyways or use a different theme.

--------------

## Freezing

Something might be wrong with the `cafe_barista_men.bfsar` file, your music might be too heavy.

You can

- Reduce the KHz of the audio file you used.
- Shorten the lenght of the audio file you used.
- Change the audio from Stereo to Mono.

--------------

## Black Screen / Wii U Menu Bootloop

Something is wrong with the theme you applied (`Men.pack`, `Men2.pack`).

- Check if the file was patched correctly.
- If your console is EUR, check if the theme is compatible.

??? question "European Consoles"

    European consoles have more language packs built onto the menu meaning the file size on themes needs to be smaller to work properly. This is more likely but not guaranteed to happen with unoptimized or themes with texture pattern animations.

Otherwise, you can:

??? note "For SDCaffiine"

    - On the SDCafiine screen, press B to launch without a modpack.
    - Delete your theme from `sd:/wiiu/sdcafiine/[TITLEID]/[ThemeName]`.
    - Delete the plugin `SD:/wiiu/environments/aroma/plugins/sdcafiine.wps`.

??? note "For StyleMiiU"

    - Delete your theme: `sd:/wiiu/themes/[ThemeName]`.
    - Delete the plugin config file: `SD:/wiiu/environments/aroma/plugins/config/style-mii-u.json`.
    - Delete the plugin: `SD:/wiiu/environments/aroma/plugins/stylemiiu.wps`.

--------------

## Theme not loading

The files were not loaded correctly / No modifications were made to the Menu.

- Check that you have installed the plugin.
    - SDCafiine: `SD:/wiiu/environments/aroma/plugins/sdcafiine.wps`.
    - StyleMiiU: `SD:/wiiu/environments/aroma/plugins/stylemiiu.wps`.
- Check that you patched the file correctly.
    - The theme folder must contain the `.pack` files.
- Check that you are using the correct path:
    - SDCafiine: `sd:/wiiu/sdcafiine/[TITLEID]/[ThemeName]/content/Common/Package/Men.pack, Men2.pack`.
    - StyleMiiU: `sd:/wiiu/themes/[ThemeName]/Men.pack, Men2.pack`.