# Loading the Wii U menu with Cemu

This is useful in case you are creating themes and want to quickly test your changes without having to turn on your Wii U.

## What you need

- [Dumpling](https://hb-app.store/wiiu/dumpling)
- A USB / SD Card (You will need 8-32GB Free)
- [Cemu](https://github.com/cemu-project/Cemu/releases)

## Guide

1. Open Dumpling
2. Select `Dump whole MLC (everything stored on internal Storage)`

    !!! warning "**Dumping the MLC can take 6-20 hours depending on it's contents!**"
    
        Make sure you have enough space available
            - At least 8GB for a basic white Wii U
            - At least 32GB for a premium pack Wii U (Black Wii U or some White JP ones)

3. Select Proceed
4. Select your Dump Destination
5. Select Confirm

    This will take a while

6. After it's finished, close dumpling and copy the MLC Dump folder to your device

## Loading the Wii U Menu on Cemu

1. Open Cemu

    If you are starting Cemu for the first time, click next, then close

2. Go to `Options > General Settings`
3. In `Custom MLC Path` click `Change` and select your MLC Dump folder
4. After confirming, Cemu will restart
5. Open Cemu, and open the `Wii U Menu` title

!!! success "The Wii U menu should boot on Cemu!"

## Modifying the Wii U Menu

1. Right click the `Wii U Menu` title and select `Game Directory`

    - It is recommended that you make a backup of the 3 folders (`code`,`content`,`meta`) in case something breaks

2. Go to the files you want to modify (eg. Men.pack and Men2.pack)

    - In this case they are in `content > Common > Package > Men.pack, Men2.pack`

3. Replace the files with your modified ones

!!! success "You are now ready to test Themes on Cemu"

??? Warning "Cemu Innacuracies"

    Cemu has some innacuracies that make it not match 1:1 with the behaviour of a real console, some of these include.

    - Music not looping properly on emulator.
    - Graphics breaking.
    - Emulator not crashing when the console does.

    So make sure to test on real hardware from time to time