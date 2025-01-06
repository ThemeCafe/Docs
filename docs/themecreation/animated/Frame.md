# Frame-based Animation

This is a Frame-based animated theme

<video controls>
<source src="../imgs/frame/vf.mp4" type="video/mp4">
</video>

This guide will be using a new way to make Frame-based animated themes

If you want to follow the old guide go to [Frame by frame](../tutorials_old/framebyframe.md)

-----------------------

## What you need.

- [Switch Toolbox](https://github.com/KillzXGaming/Switch-Toolbox/releases/tag/Final)
- [TrackStudio](https://github.com/MapStudioProject/Track-Studio/releases)
- An animation with less than 38 frames

    ??? info "About more frames"

        Animations longer than 38 frames are possible but are more likely to crash on console, and the provided base only has 38 frames to work with

### Base

We will be working with this base

[Download Base (Frame-based)](bases/frame/Men2.bps){ .md-button .md-button--primary }

Apply the patch to a copy of your `Men2.pack` file ([Patching](../../install/patching.md)) and come back here when you're done

### Exporting

Open the patched base with [Switch Toolbox](https://github.com/KillzXGaming/Switch-Toolbox/releases/tag/Final)

- Go inside Common
- Go inside Model
- Right click `LoungueVR.szs`
- Select *Export Raw Data*

    ![image](imgs/frame/f1.png)

- Save it

You can close Switch Toolbox for now

### Replacing Textures

Open `LoungueVR.szs` with [TrackStudio](https://github.com/MapStudioProject/Track-Studio/releases)

- Go inside gsys.bfres
- Go inside Textures

- Now replace every frame that you are going to use with your images

    ??? info "Recommended Image Resolution"

        1280x720 or less, anything higher is more likely to crash on console

    - Right click the frame you are going to replace
    - Click Replace

        ![image](imgs/frame/f2.png)

    - Select your frame

    - Make sure the format is set to `BC1_SRGB`

        ![image](imgs/frame/f3.png)

    - Click OK

    And repeat with every frame of your animation

Now that you replaced all the textures you need, you need to change the animation file

### Changing the Animation File

This is needed so your animation can work as intended

- Open the following [Animation JSON Generator](framescript/animation.html){:target="_blank"}

Now you can set the framerate of your animation and the amount of frames it has

??? question "Why is this needed"

    If you don't change the animation file, your animation will play slowly and will not loop properly

After you set your framerate and Frame count click on `Generate Wait.json`

This will generate a `Wait.json` file

- Go back to TrackStudio
- Go inside Animations
- Go inside Skeletal Animations
- Right click `Wait`
- Click Replace
- Replace it with the `Wait.json` file you just generated

You can preview the animation by clicking the *Play* button

<video controls>
<source src="../imgs/frame/vf2.mp4" type="video/mp4">
</video>

Finally save

- Click File
- Click Save

After saving, you can close TrackStudio

Now open the patched base with Switch Toolbox

- Go inside Common
- Go inside Model
- Right click `LoungueVR.szs`
- Select *Replace Raw Data*
- Replace it with the `LoungueVR.szs` we just saved
- Now click Save

!!! success

    Your Frame-based animation is done