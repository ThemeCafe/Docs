# Loading Custom Themes

Currently there's two ways to load themes using aroma

- [SDCafiine](#sdcafiine)
- [StyleMiiU-Plugin](#stylemiiu-plugin)

--------------

## ***SDCafiine***

### What you need

- [SDCafiine Plugin](https://github.com/wiiu-env/sdcafiine_plugin/releases/tag/v0.1.5)
- A patched Men.pack, Men2.pack or cafe_barista_men.bfsar
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
    - Place your modified `Men.pack` and `Men2.pack` files inside of the `Package` folder.
    - Create a `Sound` folder inside your `Common` folder.
    - Create a `Men` folder inside your `Sound` folder.
    - Place your modified `cafe_barista_men.bfsar` file inside of the `Men` folder.


2. Your final paths should be
    - `sd:/wiiu/sdcafiine/[TITLEID]/[ThemeName]/content/Common/Package/Men.pack, Men2.pack`
    - and
    - `sd:/wiiu/sdcafiine/[TITLEID]/[ThemeName]/content/Common/Sound/Men/cafe_barista_men.bfsar`

### Usage

Insert your SD card into your Wii U and boot into CFW.

A screen like this will pop up

![Image title](install3imgs/l1.png)

Select your theme with the A button

!!! success

    Your theme should now have loaded

!!! note

    If you want to use custom fonts, follow [Fonts](fonts.md)

!!! warning

    - If you're stuck on a black screen follow [Black Screen](../troubleshooting/troubleshooting.md#black-screen)

    - If your console freezes on the Wii U Menu loading screen follow [Freezing](../troubleshooting/troubleshooting.md#freezing)

    - If your theme didn't load and it's showing the stock one follow [Theme not loading](../troubleshooting/troubleshooting.md#theme-not-loading)

!!! abstract

    Credits to [wiki.hacks.guide](https://wiki.hacks.guide/wiki/Wii_U:Custom_themes) for some of the information in this page

--------------

## ***StyleMiiU-Plugin***

This is an Aroma plugin to safely apply custom themes!

!!! info

    **No system file is modified by this plugin.**

### What you need

- [StyleMiiU-Plugin](https://github.com/Juanen100/StyleMiiU-Plugin/releases/tag/v0.3)
- A patched Men.pack, Men2.pack or cafe_barista_men.bfsar
    - If you do not have a patched menu file, follow [Patching](patching.md)

!!! note

    If you happen to have installed an older version of this plugin, delete the previous `theme_manager.wps` and rename `sd:/wiiu/environments/aroma/plugins/config/theme_manager.json` to `style-mii-u.json`

### Installation
1. Download the `stylemiiu.wps` file and copy it to `SD:/wiiu/environments/aroma/plugins`.

- For StyleMiiU to load the files, you will need create the following folders: 
    - Create a `themes` folder in your `wiiu` folder on your SD card.
    - Inside the `themes` folder, create a folder with the name of your theme.
    - Create a `content` folder inside your theme's name folder.
    - Create a `Common` folder inside your `content` folder.
    - Create a `Package` folder inside your `Common` folder.
    - Place your modified `Men.pack` and `Men2.pack` files inside of the `Package` folder.
    - Create a `Sound` folder inside your `Common` folder.
    - Create a `Men` folder inside your `Sound` folder.
    - Place your modified `cafe_barista_men.bfsar` file inside of the `Men` folder.

- Your final paths should be
    - `sd:/wiiu/themes/[ThemeName]/content/Common/Package/Men.pack, Men2.pack`
    - and
    - `sd:/wiiu/themes/[ThemeName]/content/Common/Sound/Men/cafe_barista_men.bfsar`

### Usage

A step to step guide on how to use it:

1. Open the WUPS menu (**L + ↓ + SELECT**) and enter the **StyleMiiU** menu. Make sure StyleMiiU is enabled, otherwise it won't do anything.
2. Enter the **Available Themes** option and you should see the folders that are in `SD:/wiiu/themes/` (Or `SD:/wiiu/sdcafiine/` in case no themes folder exist), showing up empty if no theme is present. Once there, set whatever theme you want to Current Theme. If no theme it's set, the Wii U's default home menu will be loaded.
3. Once you exit the WUPS menu, the Home Menu should restart and once it gets restarted, your Home Menu will now have the theme you chose applied to it.

!!! success

    Your theme should now have loaded

!!! note

    If you want to use custom fonts, follow [Fonts](fonts.md)

!!! warning

    If your theme didn't load / the console is loading indefinitely, you can follow [Loading Indefinitely](../troubleshooting/troubleshooting.md#loading-indefinitely-stylemiiu-plugin)

Additional options:

- Shuffle themes: This option tries to mimic the 3DS' option of shuffling themes, you can use it by simply activating the option and then in **Available Themes**, select the themes you want to shuffle through. The themes will change **every time you restart the console**. If you disable this option, then the last theme you selected will become the default theme for it to fallback on.

!!! info

    This plugin is only compatible with SDCafiine's folder structure, meaning that you have to put every file on it's corresponding folder. Usually themes will load from `SD:/wiiu/themes/` but, if it detects valid themes in the `SD:/wiiu/sdcafiine/` folder and `SD:/wiiu/themes/` folder exists, it will load the themes from the SDCafiine's folder.