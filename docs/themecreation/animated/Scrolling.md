# Scrolling

This is a Scrolling Animated Theme

<video controls>
<source src="../imgs/scrolling/vs.mp4" type="video/mp4">
</video>

## What you need.

- [Switch Toolbox](https://github.com/KillzXGaming/Switch-Toolbox/releases/tag/Final)

### Base

We will be working with this base

[Download Base (Scrolling)](bases/scrolling/Men2.bps){ .md-button .md-button--primary }

Apply the patch to a copy of your `Men2.pack` file ([Patching](../../install/patching.md)) and come back here when you're done

### Replacing Textures

Open the patched base with [Switch Toolbox](https://github.com/KillzXGaming/Switch-Toolbox/releases/tag/Final)

- Go inside Common
- Go inside Model
- Double click `LoungueVR.szs`
- Double click`gsys.bfres`
- Go inside Textures

- Now replace the textures `1, 2, 3, 4, 5, 6` with your images

    ??? info "Recommended Image Resolution"

        1280x720 or less, anything higher is more likely to crash on console

    - Right click the texture you are going to replace
    - Click Replace
    - Select your image

    - Make sure the format is set to `BC1_SRGB`
    - Click OK

    And repeat with the other textures

    ???+ tip "Using less frames"

        If you are using less than 6 images you need to follow [Scrolling Speed](#scrolling-speed) to change the animation file


After replacing the textures

- Save
- You can now close Switch Toolbox

!!! success

    Your Scrolling animation is done and you can now test it [SDCafiine](../../install/loading.md#sdcafiine)

## Scrolling Speed

If you want to change the Scrolling Speed of your theme you need to follow a few more steps

### What you need

- [TrackStudio](https://github.com/MapStudioProject/Track-Studio/releases)

Open your scrolling theme with [Switch Toolbox](https://github.com/KillzXGaming/Switch-Toolbox/releases/tag/Final)

- Go inside Common
- Go inside Model
- Right click `LoungueVR.szs`
- Select *Export Raw Data*

    ![image](imgs/frame/f1.png)

- Save it

You can close Switch Toolbox for now

Use the following Scrolling Animation Generator tool

- In `Amount of seconds` set the amount of seconds you want before the animation loops
- In `Amount of panels` set the amount of panels you are using (6 is default)
- After you set your values click on `Generate Wait.json`

<div>
    <label for="seconds">Amount of seconds:</label>
    <input type="number" id="seconds" placeholder="Enter seconds">
    <br><br>
    <label for="panels">Amount of panels:</label>
    <select id="panels">
        <option value="6">6</option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
    </select>
    <br><br>
    <button id="generate"><b>Generate Wait.json</b></button>
    <script src="../scripts/scroll.js"></script>
</div>

This will generate a `Wait.json` file

??? question "Using less panels"

    If you are using less panels, the animation will end prematurely and will loop back to the beggining, the script is made to have a seamless loop as long as you replace the next texture after the amount of panels you are using with the texture of the first panel

    If you are using 6 panels, you don't need to worry about this

Open `LoungueVR.szs` with [TrackStudio](https://github.com/MapStudioProject/Track-Studio/releases)

- Double click `gsys.bfres`
- Go inside Animations
- Go inside Skeletal Animations
- Right click `Wait`
- Click Replace
- Replace it with the `Wait.json` file you just generated

You can preview the animation by clicking the *Play* button

Finally save

- Click File
- Click Save

After saving, you can close TrackStudio

Now open your scrolling theme with Switch Toolbox

- Go inside Common
- Go inside Model
- Right click `LoungueVR.szs`
- Select *Replace Raw Data*
- Replace it with the `LoungueVR.szs` we just saved
- Now click Save

You might want to change the background for the transition and the WaraWara plaza's floor

If so click below to expand

??? info "Click here to expand"

    - Go back the `Models` folder
    - Double click `FloatIcon00.szs`
    - Double click `gsys.bfres`
    - Go inside Textures
    - Right click `White_00` and select `Replace`
    - Choose the image you want to use as background for the Menu

        ??? info "Recommended Image Resolution"

            1280x720

    - Save

    ??? question "Where is this image displayed?"

        This image will be displayed here

        ![image](../static/imgs/static/s3.png)

    We still need to change one more image

    - Close `FloatIcon00.szs`
    - Go back to the `Models` folder
    - Double click `LoungeFloor.szs`
    - Double click `gsys.bfres`
    - Go inside Textures
    - Right click `Floor_Alb` and select `Replace`
    - Choose the image you want to use as background for the Menu

        ??? info "Recommended Image Resolution"

            2000x2000

    - Save

    ??? question "Where is this image displayed?"

        This image will be displayed here

        ![image](../static/imgs/static/s4.png)
        
    !!! success

        You are done

!!! success

    Your Scrolling animation is done and you can now test it [SDCafiine](../../install/loading.md#sdcafiine)