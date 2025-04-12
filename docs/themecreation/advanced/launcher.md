![Image title](imgs/launchertutorial.png)

## Table of contents

1 - [Background](#1-background)

2 - [Applets](#2-applets)

3 - [Usb Indicator](#3-usb-indicator)

4 - [Start (Applets)](#4-start-applets)

5 - [Select Frame](#5-select-frame)

6 - [Active Frame](#6-active-frame)

7 - [Button Swap](#7-button-swap)

8 - [Button Swap Icons](#8-button-swap-icons)

9&10 - [Arrows](#9-10-arrows)

11 - [Page Indicator](#11-page-indicator)

12 - [Folder](#12-folder)

13 - [Folder Create](#13-folder-create)

14 - [LauncherIcon](#14-launcher-icon)

15 - [Wii Menu Icon](#15-wii-menu-icon)

16 - [Disc Icon](#16-disc-icon)

17 - [Network Icon](#17-network-icon)

18 - [Account Button](#18-account-button)

19 - [Wii Cursor](#19-wii-cursor)

20 - [Balloon Text](#20-balloon-text)

--------------------------------

### 1. Background
    
`Men2.pack` > `Model` > `LoungeVR.szs`

This is where the background image/animation is located

Static

![image](../themes/static/imgs/static/s1.jpg){ width="426" height="240" }

[Static](../themes/static/index.md){ .md-button .md-button--primary }

Animated

Frame-based

<video controls width="426" height="240">
<source src="../../themes/animated/imgs/frame/vf.mp4" type="video/mp4">
</video>

[Frame-based](../themes/animated/Frame.md){ .md-button .md-button--primary }

Scrolling

<video controls width="426" height="240">
<source src="../../themes/animated/imgs/scrolling/vs.mp4" type="video/mp4">
</video>

[Scrolling](../themes/animated/Scrolling.md){ .md-button .md-button--primary }


??? info "Info"

    This only applies when using patches provided by the docs

----------------------

### 2. Applets

![Image title](imgs/applets/appg.png)

`Men2.pack` > `Layout` > `OverlayAppBase.szs`

This is where the App Icons at the bottom of the menu are located

You can change the [Color](../general/colors.md) / [Texture](../general/textures.md) of this by changing the material `P_base` of each applet

----------------------

### 3. Usb Indicator

![Image title](imgs/usbindicator/u1.png)

`Men2.pack` > `Layout` > `UsbIndicatorDrc.szs`

This is where the Usb Indicator is located

You can change the [Color](../general/colors.md) / [Texture](../general/textures.md) of this by changing the material `P_Usb`

----------------------

### 4. Start (Applets)

![Image title](imgs/applets/app2.png)

`Men2.pack` > `Layout` > `BtnOverlayApp_01.szs`

This is where `Start` from the applets is located

If you want to change the `Start` Color

Located on Men2.pack > BtnOverlayApp_01.szs

Change the [Color](../general/colors.md) of the material `T_title` and `OLAActiveFrame_00`

----------------------

### 5. Select Frame

![Image title](imgs/selectframe/sfg.png)

`Men.pack` > `Layout` > `SelectFrame.szs`

You can change the [Color](../general/colors.md) / [Texture](../general/textures.md) of this by changing the material `W_SelectFrame_01LT` and `W_SelectFrame_00LT`

----------------------

### 6. Active Frame

![Image title](imgs/activeframe/ag.png)

`Men2.pack` > `Layout` > `LauncherIcon.szs`

This is the frame that shows up for creating a folder or starting an application

You can change the [Color](../general/colors.md) of this by changing the material `ActiveFrame_01`

----------------------

### 7. Button Swap

![Image title](imgs/swap/swapg.png)

`Men.pack` > `Layout` > `BtnSwap_00.szs` , `BtnSwapDRC.szs`

??? note "***TV***"

    `BtnSwap_00.szs`

    You can change the [Color](../general/colors.md) / [Texture](../general/textures.md) of this by doing changes to the materials inside of the bflyt file 

??? note "***Gamepad***"

    `BtnSwapDRC.szs`

    You can change the [Color](../general/colors.md) of this by doing changes to the materials inside of the bflyt file

----------------------

### 8. Button Swap Icons

![Image title](imgs/swap/swapg.png)

`Men.pack` > `Layout` > `BtnSwap_00.szs`

You can change the [Color](../general/colors.md) / [Texture](../general/textures.md) of this by doing changes to the materials inside of the bflyt file 

----------------------

### 9 10. Arrows

![Image title](imgs/arrows/arrg.png)

`Men2.pack` > `Layout` > `BtnSlideLauncher.szs`

`P_BtnSlideR`, `P_BtnSlideL`

??? note "Outside folders"

    Located in Men2.pack > BtnSlideLauncher.szs

    You can change the [Color](../general/colors.md) / [Texture](../general/textures.md) of this by changing the material `P_BtnSlideR` and `P_BtnSlideL`

    ??? info "Removing the weird blur"

        Right arrow

        - Go to `RootPane > PF_RBtnMask > P_Pict`
        - Click on the `Pane` tab
        - Uncheck `Pane visible`    

        Left arrow

        - Go to `RootPane > PF_LBtnMask > P_Pict_0`
        - Click on the `Pane` tab
        - Uncheck `Pane visible`

??? note "Inside folders"

    Located in Men2.pack > BtnSlideFolder.szs

    You can change the [Color](../general/colors.md) / [Texture](../general/textures.md) of this by changing the material `P_BtnSlideR` and `P_BtnSlideL`

    ??? info "Removing the weird blur"

        Right arrow

        - Go to `RootPane > PF_RBtnMask > P_Pict`
        - Click on the `Pane` tab
        - Uncheck `Pane visible`    

        Left arrow

        - Go to `RootPane > PF_LBtnMask > P_Pict_0`
        - Click on the `Pane` tab
        - Uncheck `Pane visible`

----------------------

### 11. Page Indicator

![Image title](imgs/pageindicator/pg.png)

`Men2.pack` > `Layout` > `PageIndicator.szs`

??? "Active tab"

    You can change the [Color](../general/colors.md) of this by changing the material `P_Color`

??? "Inactive tab"

    You can change the [Color](../general/colors.md) of this by changing the material `P_Base`

----------------------

### 12. Folder

![Image title](imgs/foldericon/f1.png)

`Men2.pack` > `Layout` > `LauncherIcon.szs`

You can change the [Texture](../general/textures.md) of this by changing the material `P_IconFolder_01`

----------------------

### 13. Folder Create

![Image title](imgs/foldericon/f2.png)

`Men2.pack` > `Layout` > `LauncherIcon.szs`

You can change the [Texture](../general/textures.md) of this by changing the material `P_Folder`

----------------------

### 14. Launcher Icon

![image](imgs/launchericon/image.png)

`Men2.pack` > `Layout` > `LauncherIcon.szs`

You can change the [Color](../general/colors.md) of this by changing the material `PF_LauncherBtnSpec_00`

----------------------

### 15. Wii Menu Icon

![Image title](imgs/menuicons/AppIconWii.png)

`Men2.pack` > `Model` > `SystemAppIcon.szs` > `Textures` > `AppIconWii`

You can change the [Texture](../general/textures.md) of this by [replacing](../general/exportimport.md#replace) the texture `AppIconWii`

----------------------

### 16. Disc Icon

![Image title](imgs/menuicons/AppIconDisc.png)

`Men2.pack` > `Model` > `SystemAppIcon.szs` > `Textures` > `AppIconDisc`

You can change the [Texture](../general/textures.md) of this by [replacing](../general/exportimport.md#replace) the texture `AppIconDisc`

----------------------

### 17. Network Icon

![Image title](imgs/network/n1.png)

`Men2.pack` > `Layout` > `BtnAccountSelect.szs`

You can change the [Texture](../general/textures.md) of this by changing the material `P_NetworkAccountMark_00`

----------------------

### 18. Account Button

![Image title](imgs/btnaccselect/btnaccsg.png)

`Men2.pack` > `Layout` > `BtnAccountSelect.szs`

You can change the [Texture](../general/textures.md) of this by doing changes to the materials inside of the bflyt file

If you want to change the color

- Open the `bflyt` file
- Go to `Rootpane > N_Active > N_Btn > P_Base`
- Select the `Picture pane` tab
- On `Vertex Colors` click `All`
- Change the color

If you want to change the color of the blue glow

- Change the [Color](../general/colors.md) of the material ActiveFrame_01

----------------------

### 19. Wii Cursor

`Men.pack` > `Layout` > `Cursor.szs` > `Cursor.bflyt`

??? note "Changing Textures"

    Go to `Men.pack` > `Layout` > `Cursor.szs` > `Cursor.bflyt`

    Add your [textures](../general/textures.md)

    Change the texture of the materials:

    - CursorBase
    - CursorBaseShadow
    - CursorBaseAlpha
    - CursorBaseBlur

    Go to animation hierarchy > Cursor_CursorNumber.bflan

    Go to Animation Info and in

    - CursorBaseAlpha
    - CursorBaseBlur
    - CursorBase
    - CursorBaseShadow

    in all of them change target from "Material" to "Pane"

    Save

??? note "Changing Colors"

    !!! abstract "Credits to the discord user *@dot0451* for the information in this section"

    Requirements:

    - [Switch Toolbox](https://github.com/KillzXGaming/Switch-Toolbox?tab=readme-ov-file)
    - Your original Men.pack file

    To get your original Men.pack file you will need to follow the tutorial on [Menu Files](../../install/files.md) and come back 

    --------------

    Instructions:

    - Drag Men.pack Into Swich Toolbox

    - Search for "Cursor.szs"

    ![Image title](imgs/cursor/c1.png)

    Once you find it, double click it to reveal '**Cursor.arc**,  and double click '**Cursor.arc** to reveal more folders.

    We will be focusing on two folders.
    - **blyt**
    - **anim**

    And the files inside of them. **(Cursor.bflyt, Cursor_CursorNumber.bflan)**

    ![Image title](imgs/cursor/c2.png)

    We will focus on **blyt** folder for now. 

    Double click the file **Cursor.bflyt**

    Inside of it, there will be a **Materials** folder.

    Open it, and it should reveal 4 files inside: **(CursorBase, CursorBaseShadow, CursorBaseAlpha, CursorBaseBlur)**

    ![Image title](imgs/cursor/c3.png)

    I recommend you start from top to bottom. 

    You want to click on any of the four files, and click **color** at the bottom

    **Editing Cursor Colors**

    **Left Side Colors:**

    When editing the colors on the left side of the cursor:

    - ***Save your hex codes.*** 

    Use a Notes app or a similar tool to record them. Your hex code(s) should be exactly 8 characters long. **This step is crucial for later on in the tutorial**, additionally, it ensures consistency across all four base files, especially if you’re creating a solid-colored cursor like the one in this tutorial, which is what most people go for.

    **Right Side Colors**:

    The colors on the right side of the cursor should **always** be **black or white**.

    - If these colors change while editing the left side colors, simply **change them back to black (00000000) or white**(FFFFFFFF). 
    - Not doing so may cause the cursor to look weird. 

    - Uncertain Changes:

        At times, you might notice no visible change after editing the cursor color.

        - It’s up to you to either leave it as is or revert it to its original state.
        - Currently, it’s unclear if this has a significant impact, but it’s worth noting.

    These guidelines may be updated in the future. For now, adhering to them should make the editing process smoother."

    ![Image title](imgs/cursor/c4.png)

    In CursorBaseAlpha, the upper-left color is arguably the most important hex code. This color serves as a reference when updating the RGB (Red, Green, Blue) values in Cursor_CursorNumber.bflan within the anim folder. If the RGB colors in both files do not align, the changes made to the cursor’s outline in CursorBaseAlpha will not be properly reflected.

    ![Image title](imgs/cursor/CursorBaseAlpha.gif)

    ![Image title](imgs/cursor/c12.png)

    ![Image title](imgs/cursor/RGB_Change.gif)

    Here’s how I edited the colors for this particular cursor. There’s no right or wrong way to approach this—you can follow my method or take a completely different approach when editing the colors; the choice is yours. However, I recommend following my method if you're a beginner and just getting started.

    ![Image title](imgs/cursor/BaseColorEdits.gif)

    After you are satisfied with how the cursor looks, click the save button located at the top left. It should say **Saved Cursor.bflyt to archive** and make sure you save the project in case anything happens.

    ![Image title](imgs/cursor/c5.png)

    --------------

    Animation Folder

    Now time for the anim folder. There is a file called **Cursor_CursorNumber.bflan** double click it to open it.

    ![Image title](imgs/cursor/c6.png)

    Expand that window.

    ![Image title](imgs/cursor/c7.png)

    We will be focusing on these. They have RGB color coding that we need to change.

    **Remember when I asked you to keep your hex codes somewhere? This is where they come in.**

    A good website to change hex colors to RGB: [Click here!](https://www.rapidtables.com/convert/color/hex-to-rgb.html)

    ![Image title](imgs/cursor/c8.png)

    As you see, I'm using white so the RGB for Red, Green, and Blue are all 255

    They will differ depending on your hex code.

    **We will only change the Value of KeyFrame0, and KeyFrame1 for Red, Green, and Blue respectively**

    ![Image title](imgs/cursor/c9.png)

    Edit the values with the corresponding numbers that you get from that website.

    Without closing the tab, save it.

    ![Image title](imgs/cursor/c10.png)

    Then close that window and save the project again.

    ![Image title](imgs/cursor/c11.png)

    !!! success

        That's it, you're done!

        Here's how it turned out

        ![Image title](imgs/cursor/result.png)

----------------------

### 20. Balloon Text

![image](imgs/balloon/image.png)

`Men2.pack` > `Layout` > `Balloon.szs` > `Balloon.bflyt`

You can change the [Color](../general/colors.md) of this by changing the materials:

- `W_BalloonC`
- `W_BalloonLT`
- `P_Tip`

----------------------