# Text

![img](imgs/text/prev.webp)

You can follow this guide if you want to modify any of the Wii U Menu's text files.

This example will change the name of "Miiverse" to "Juxtaposition"

## What you need

- [3DLandMSBTeditor](https://github.com/IcySon55/3DLandMSBTeditor).

--------------

### Get your files

You will need the `AllMessage.szs` file for the language you want to edit, if you do not have this file you can obtain it using any of the methods from [Menu Files](../../install/files.md) and get the file from the following location.

- For FTP: `storage_mlc > sys > title > 00050010 > [REGION] > content > [LANGUAGE] > Message > AllMessage.szs`.
    - Depending on the region of your console, in `[REGION]` use
        - `10040100` for USA.
        - `10040200` for EUR.
        - `10040000` for JPN.
    - In `[LANGUAGE]` use the language you want to edit.
        - For example: `UsEnglish`.

- For JNUSTool: `content > [LANGUAGE] > Message > AllMessage.szs`.
    - In `[LANGUAGE]` use the language you want to edit.
        - For example: `UsEnglish`.

--------------

### Before Starting

- Make sure you make a backup of your original `AllMessage.szs` file(s) in case anything goes wrong
- You can load the modified `AllMessage.szs` file(s) with [StyleMiiU-Plugin](../../install/loading.md#stylemiiu-plugin) or [SDCafiine](../../install/loading.md#sdcafiine)

!!! warning "Do **NOT** edit the files using Switch Toolbox, if you do it will cause **A LOT** of issues."

!!! danger "**DO NOT REPLACE THE MODIFIED FILE ON YOUR NAND**, you can risk **bricking** your system if you do, use [StyleMiiU-Plugin](../../install/loading.md#stylemiiu-plugin) or [SDCafiine](../../install/loading.md#sdcafiine) to load the modified file instead."

--------------

### Exporting the text file

- Open your `AllMessage.szs` file with [Switch Toolbox](https://github.com/KillzXGaming/Switch-Toolbox/releases/tag/Final).
- Locate the file you want to edit (In this case `AllMessage.szs` > `SceneMessage.sarc` > `MenuScene.msbt`).
- Right click and `Export Raw Data`.
- Save it on your device.

--------------

### Editting the text file

- Open [MSBTeditor](https://github.com/IcySon55/3DLandMSBTeditor).
- Open the file you exported previously.
- Go to the String you want to edit and change it.
- Save.

![img](imgs/text/edit.webp)

--------------

### Replacing msbt files 

- Go back to Switch Toolbox.
- Locate the file (In this case `AllMessage.szs` > `SceneMessage.sarc` > `MenuScene.msbt`).
- Right click and `Replace Raw Data`.
- Save.

You should now have your modified `AllMessage.szs` file.

### Loading Custom Text

You can load the text using either StyleMiiU-Plugin or SDCafiine.

=== "StyleMiiU-Plugin"

    - Place the modified `AllMessage.szs` file(s) in the following location
        - `SD:/wiiu/themes/[ThemeName]/content/[LANGUAGE]/Message/AllMessage.szs`

    - In `[ThemeName]` use the theme where you want to modify the text.
    - In `[LANGUAGE]` use the language you want to edit.
        - For example: `UsEnglish`.

=== "SDCafiine"

    - Place the modified `AllMessage.szs` file(s) in the following location
        - `sd:/wiiu/sdcafiine/[TITLEID]/[ThemeName]/content/[LANGUAGE]/Message/AllMessage.szs`

    - Replace `[TITLEID]` with the title ID of your region.
        - USA: `0005001010040100`
        - EUR: `0005001010040200`
        - JPN: `0005001010040000`

    - In `[ThemeName]` with the theme where you want to modify the text.
    - In `[LANGUAGE]` with the language you want to edit.
        - For example: `UsEnglish`



!!! success "Your text should now be modified!"

    ![image](imgs/text/result.webp)
