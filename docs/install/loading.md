---
hide:
  - toc
icon: fontawesome/solid/paint-brush
---

# Loading Custom Themes

--------------

There's two ways to load themes using aroma

!!! info "***No system file is modified by these plugins.***"

- [StyleMiiU-Plugin](#stylemiiu-plugin)
- [SDCafiine](#sdcafiine)

=== "StyleMiiU-Plugin"

    ## Loading with StyleMiiU-Plugin

    ### What you need

    - [StyleMiiU-Plugin](https://github.com/Themiify-hb/StyleMiiU-Plugin/releases).
    - A patched `Men.pack`, `Men2.pack` and/or `cafe_barista_men.bfsar` file.
        - If you do not have a patched menu file, follow [Patching](patching.md).

    ### Installation & Usage

    - Copy the file `stylemiiu.wps` into `SD:/wiiu/environments/aroma/plugins`.
    - Create a `themes` folder in your `wiiu` folder on your SD card.
    - Inside the `themes` folder create a folder with the name of your theme.
    - Copy your patched `Men.pack`, `Men2.pack` and/or `cafe_barista_men.bfsar` files to the folder with the name of your theme.

    A step to step guide on how to use it:

    1. Open the WUPS menu (**L + ↓ + SELECT**) and enter the **StyleMiiU** menu. Make sure StyleMiiU is enabled, otherwise it won't do anything.

    2. Enter the **Available Themes** option and you should see the folders that are in `SD:/wiiu/themes/`, showing up empty if no theme is present. Once there, set whatever theme you want to Current Theme. If no theme it's set, the Wii U's default home menu will be loaded.

    3. Once you exit the WUPS menu, the Home Menu should restart and once it gets restarted, your Home Menu will now have the theme you chose applied to it.

    ??? info "Extra Info"

        - This plugin can detect `Men.pack`, `Men2.pack` and `cafe_barista_men.bfsar` automatically to make the theme have any folder structure you desire, like `SD:/wiiu/themes/[ThemeName]/Men.pack , Men2.pack , cafe_barista_men.bfsar`. SDCafiine's file structure is still compatible with this plugin. 

        - Themes will only load from the `SD:/wiiu/themes` directory, if you used SDCafiine to load themes, it is recommended that you move all your themes from SDCafiine into the themes directory to avoid problems of both plugins trying to patch the Wii U Menu.

        - Additional files like AllMessage.szs do still need to be on their corresponding folder structure, for example: `SD:/wiiu/themes/[ThemeName]/content/[TheLanguageToPatch]/Message/AllMessage.szs`.

        - Shuffle themes: This option tries to mimic the 3DS' option of shuffling themes, you can use it by simply activating the option and then in **Available Themes**, select the themes you want to shuffle through. The themes will change **every time you restart the console**. If you disable this option, then the last theme you selected will become the default theme for it to fallback on.

        - If you happen to have installed an older version of this plugin, delete the previous `theme_manager.wps` and rename `SD:/wiiu/environments/aroma/plugins/config/theme_manager.json` to `style-mii-u.json`.

=== "SDCafiine"

    ## Loading with SDCafiine

    ### What you need

    - [SDCafiine Plugin](https://github.com/wiiu-env/sdcafiine_plugin/releases).
    - A patched `Men.pack`, `Men2.pack` and/or `cafe_barista_men.bfsar` file.
        - If you do not have a patched menu file, follow [Patching](patching.md)

    ### Installation
    1. Download and extract the `.zip` file and copy the `sdcafiine.wps` file to `SD:/wiiu/environments/aroma/plugins`.

    - For SDCafiine to load the files, you will need create the following folders: 
        - Create an `sdcafiine` folder in your `wiiu` folder on your SD card.
        - Inside the `sdcafiine` folder create a folder with your Wii U Menu's title ID. This will vary on your consoles region: 
            - USA: `0005001010040100`
            - EUR: `0005001010040200`
            - JPN: `0005001010040000`
        - Inside your title ID folder, create a folder with the name of your theme.
        - Create a `content` folder inside your theme's name folder.
        - Create a `Common` folder inside your `content` folder.
        - Create a `Package` folder inside your `Common` folder.
        - Place your patched `Men.pack` and `Men2.pack` files inside of the `Package` folder.
        - Create a `Sound` folder inside your `Common` folder.
        - Create a `Men` folder inside your `Sound` folder.
        - Place your patched `cafe_barista_men.bfsar` file inside of the `Men` folder.


    2. Your final paths should be
        - `SD:/wiiu/sdcafiine/[TITLEID]/[ThemeName]/content/Common/Package/Men.pack, Men2.pack`

        and

        - `SD:/wiiu/sdcafiine/[TITLEID]/[ThemeName]/content/Common/Sound/Men/cafe_barista_men.bfsar`

    ### Usage

    - Insert your SD card into your Wii U and boot into CFW.
    - Select your theme with the A button.

    !!! abstract "Credits to [wiki.hacks.guide](https://wiki.hacks.guide/wiki/Wii_U:Custom_themes) for the information in this section."

-----------------

!!! success

    You have successfully installed a Custom Theme on your Wii U.

??? info "Fonts"

    If you want to use custom fonts follow

    [Use Custom Fonts](fonts.md){ .md-button .md-button--primary }

??? info "Splash Screen"

    If you want to use a Splash Screen follow

    [Splash Screen](splash.md){ .md-button .md-button--primary }

??? warning "Troubleshooting"

    - If you're stuck on a black screen: [Black Screen](../troubleshooting.md#black-screen)

    - If your console freezes on the Wii U Menu loading screen: [Freezing](../troubleshooting.md#freezing)

    - If your theme didn't load and it's showing the default one: [Theme not loading](../troubleshooting.md#theme-not-loading)

    - If the console is bootlooping on the "Wii U Menu" screen: [Wii U Menu Bootloop](../troubleshooting.md#wii-u-menu-bootloop)
