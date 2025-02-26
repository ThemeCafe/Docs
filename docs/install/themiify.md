# Themiify

!!! abstract "Credits to [Nathaniel](https://github.com/Fangal-Airbag) and [AlphaCraft](https://github.com/AlphaCraft9658) for creating this app"

Themiify is a homebrew application that allows for on the fly installation of Wii U System Menu themes without the need for users to use external tools like Rom Patcher JS to get their theme files.

Themiify searches `SD:/wiiu/themes` for Wii U Theme Archive files (`.utheme`) and installs the contents of the theme archive as an SDCafiine modpack. Once a theme is installed a user can select it via the SDCafiine modpack selector.

!!! info "**No system file is modified by this app.**"

## What you need

- A modded Wii U with [Aroma](https://wiiu.hacks.guide/aroma/getting-started.html)
- [Themiify](#) *Link to github releases*
- [SDCafiine Plugin](https://github.com/wiiu-env/sdcafiine_plugin/releases)
- Your theme with the extension `.utheme` 

??? question "About the use of SDCafiine"

    SDCafiine works by loading themes safely via the SD Card. Themiify installs the files on the SD Card for SDCafiine to load, if you do not have the [SDCafiine Plugin](https://github.com/wiiu-env/sdcafiine_plugin/releases) installed, no changes will be made and you will not see any custom theme

??? question "Where to get .utheme files"

    Join the [Theme Café discord server](https://discord.com/invite/2DNvH9db2A).
    

## Installation

1. Download [Themiify](#) and copy the `Themiify.wuhb` file to `SD:/wiiu/apps`.
2. Copy your `.utheme` file to `SD:/wiiu/themes`
3. Turn on your Wii U and boot aroma
4. Open the Themiify app

    ![image](imgs/t1.png)

5. Click `Install Theme`

    ![image](imgs/t2.png)

6. Select the theme you want to install

    ![image](imgs/t3.png)

7. Press `A`

    ![image](imgs/t4.png)

    The theme will now be installed on the SD Card

    This might take some time, so please wait

8. After it's done, Press `X` to delete the `.utheme` file

    ![image](imgs/t6.png)

9. Press `Home` or `B` to quit

    ![image](imgs/t2.png)

10. The SDCafiine plugin menu will show up, select the theme you want to use and press `A`

    ![image](imgs/t8.png)

!!! success

    You have succesfully installed a custom theme

    ![image](imgs/r.png)

??? info "Fonts"

    If you want to use custom fonts, follow [Fonts](fonts.md)

??? warning "Troubleshooting"

    - If you're stuck on a black screen follow [Black Screen](../troubleshooting.md#black-screen)

    - If your console freezes on the Wii U Menu loading screen follow [Freezing](../troubleshooting.md#freezing)

    - If your theme didn't load and it's showing the stock one follow [Theme not loading](../troubleshooting.md#theme-not-loading)

    - If the console is bootlooping on the "Wii U Menu" splash screen, you can follow [Wii U Menu Bootloop](../troubleshooting.md#wii-u-menu-bootloop)
