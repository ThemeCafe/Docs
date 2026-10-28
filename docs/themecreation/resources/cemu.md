# Loading the Wii U Menu with Cemu

This is useful in case you are creating themes and want to quickly test your changes without having to turn on your Wii U.

## What you need

- [Dumpling](https://hb-app.store/wiiu/dumpling)
- A USB / SD Card (You will need 8-32GB Free)
- [Cemu](https://github.com/cemu-project/Cemu/releases)

## Guide

1. Open Dumpling.
2. Select `Dump whole MLC (everything stored on internal Storage)`.

    !!! warning "**Dumping the MLC can take 6-20 hours depending on it's contents!**"

        Make sure you have enough space available.

        - At least 8GB for a basic white Wii U.
        - At least 32GB for a premium pack Wii U (Black Wii U or some White JP ones).

3. Select Proceed.
4. Select your Dump Destination.
5. Select Confirm.

    - This will take a while.

6. After it's finished, close dumpling and copy the MLC Dump folder to your device.

## Loading the Wii U Menu on Cemu

1. Open Cemu.

    - If you are starting Cemu for the first time, click next, then close.

2. Go to `Options > General Settings`.
3. In `Custom MLC Path` click `Change` and select your MLC Dump folder.
4. After confirming, Cemu will restart.
5. Open Cemu, and start the Wii U Menu title.

!!! success "The Wii U menu should boot on Cemu!"

## Modifying the Wii U Menu

1. Click File > Open Cemu Folder.
2. Go to `graphicPacks`.
3. Create the following folders in `graphicPacks`:

    - `WiiUMenu\[ThemeName]\content\Common\Package`.
        - Place your `Men.pack` and `Men2.pack` here.
    - `WiiUMenu\[ThemeName]\content\Common\Sound\Men`.
        - Place your `cafe_barista_men.bfsar` here.
    
    *Rename `[ThemeName]` to the name of your theme.*

4. Go to `WiiUMenu\[ThemeName]`, create a `rules.txt` file and paste the following:

    ``` txt title="rules.txt"
    [Definition]
    titleIds = 0005001010040100,0005001010040200,0005001010040000
    name = Custom Theme
    path = "Wii U Menu/Mods/Custom Theme"
    description = Loads a Custom Wii U Menu Theme
    ```

5. Restart Cemu.
6. Right Click the Wii U Menu Title > Edit Graphic Packs.
7. Enable your Custom Theme in Wii U Menu > Mods > Custom Themes.
8. Start the Wii U Menu title.

!!! success "You are now ready to test Themes on Cemu"

??? Warning "Cemu Innacuracies"

    Cemu has some innacuracies that make it not match 1:1 with the behaviour of a real console, some of these include.

    - Music not looping properly on emulator.
    - Graphics breaking.
    - Emulator not crashing when the console does.

    So make sure to test on real hardware from time to time.
    