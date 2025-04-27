# Music

---------------

## What you need

- A program that can export audio file as `.WAV`
    - For example [Audacity](https://www.audacityteam.org/)

- [Citric Composer](https://gota7.github.io/Citric-Composer/) 

### Template

We will be working with this template

[:fontawesome-solid-download: Download template (Music)](templates/cafe_barista_men%20(MII%20SFX).bps){ .md-button .md-button--primary }

???+ info "Music Length"

    With this template you will be able to make custom music up to 1:55 at 32000khz Stereo before the file is too large to work with

    ??? info "I want to make longer music"

        You can also use the following template

        [:fontawesome-solid-download: Download template (Music Without MII SFX)](templates/cafe_barista_men%20(NO%20MII%20SFX).bps){ .md-button .md-button--primary }

        This template does not contain Mii SFX and will get you about 2:26 at 32000khz Stereo

        ??? info "My music is still longer than 2:26"

            If you want to make longer music you can export your music at a lower sample rate and use Mono instead of Stereo, what matters is that the size of the file is not too large

Apply the patch to a copy of your `cafe_barista_men.bfsar` file ([Patching](../../install/patching.md)) and come back here when you're done

### Exporting Music as WAV

Use the program of your choice to export your music as a `.WAV` file

The best settings are

- Sample Rate: 32000 kHz
- Channels: Stereo
- Encoding: Signed 16-bit PCM

### Citric Composer

Adding your music

- Launch Citric Composer
- Open your cafe_barista_men.bfsar already patched with the provided [Template](#template)
- Double click `Wave Archives`
- Double click `[1] WARC_1_GUESS_GROUP_MEN`
- A new window will open

    ![image](imgs/m1.png)

- Double click `Waves`
- Scroll to the bottom to find `[302] WAV_302_GUESS_BANK_MEN_BGM`
- Right click `[302] WAV_302_GUESS_BANK_MEN_BGM`
- Click replace
- Choose your `.WAV` file
- Wait for it to change the name to `[302] {Unknown Wave Name}`

    ![image](imgs/m2.png)

- Click `File` in the top left corner
- Click Save

You can now close this window


- Click `File` in the top left corner
- Save

!!! tip "Extra Info"

    If your wav file has looping points, the music will loop accordingly

!!! success

    You can now test your music [SDCafiine](../../install/loading.md#sdcafiine)

!!! bug "If you are having issues"

    - If the console freezes before loading the Wii U menu follow [Freezing](../../troubleshooting.md#freezing)

Tips by yeetyeeter456

??? info "Tips and Tricks for making Wii U Custom Music"

    !!! abstract "Thanks to the discord user @yeetyeeter456 for these tips and tricks"

        

    Tips and tricks to help you spend just a few minutes per song!

    NOTICE: 

    - This tutorial assumes you already know the basics of making Wii U music. If you have not already, look at this tutorial: [Music](#music)  
    - I am not a pro at this I just have some helpful things I've found and want more people to know about.

    Ok, let us begin

    - If you need a feature rich and free option for converting files to .wav, shortening files, or changing khz, Audacity works very well.

    - Before starting to make something, ALWAYS check the file in Audacity (or another audio tool) to make sure its in stereo and the khz aren't too high. This is just a good routine to get into so that you make sure you never waste your time. 

    - Keep a backup of your patched .bfsar file and just copy it when you want to make a new song. This way you won't have to patch it every time.

    -  Have a place to put your finished music that way you always know where they are.  

    - If you have a fairly short song, convert it into higher khz to make it sound better. If it doesn't work you can always lower the khz again. 

    - If you have a fairly long song, convert it into lower khz to fit the whole thing. This is how I was able to fit the entire 4 minute song for my upside down theme. 

    - Keep websites like: https://www.marcrobledo.com/RomPatcher.js/ saved somewhere for easy access

    alright, hopefully that helped some of you but That's all I can think of on the spot.
            