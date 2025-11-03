---
hide:
    navigation
---

# Troubleshooting

## Theme Installed Successfully but there's issues

If your console is bootlooping in the "Wii U Menu" screen, or is crashing randomly, something is wrong with the theme. To fix this you will have to delete the theme you installed on the sd card `sd:/wiiu/themes/[ThemeName]`

*European consoles have more language packs built onto the menu meaning the file size on themes needs to be smaller to work properly.*

--------------

## There may be a problem with the theme... (Themiify)

If themiify shows this error either

- The `.utheme` file contains bad patches
    - You can try installing a different theme
- Your Original Menu Files were modified at some point
    - If this is the case, you will need to retreive the original files again using [JNUStool](themecreation/general/files.md#jnustool)

--------------

## Freezing upon loading the Menu

There's something wrong with the `cafe_barista_men.bfsar` file.

Either

- Your music is too long
- Your music is too heavy
- The file was not patched correctly

You can

- Patch the files again
- Check the size of the file
- If the song used is too long, try making it shorter

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

If the information does not match, follow [JNUSTool](themecreation/general/files.md#jnustool) to get your original files again

If the information matches with the one from your files and you're still getting the Source ROM checksum mismatch error, it might be a bad patch, you can try applying the patch anyways or use another theme
