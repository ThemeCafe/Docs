---
icon: fontawesome/solid/arrows-rotate
---

# Moving to Themiify

If you currently have themes installed and want to start using Themiify, you can do the following depending on your case

=== "SDCafiine Plugin"

    Move your themes from `SD:/wiiu/sdcafiine/[TITLEID]` to `SD:/wiiu/themes/`

    - For [TITLEID] use your Wii U Menu's title ID. This will vary on your consoles region: 
        - USA: `0005001010040100`
        - EUR: `0005001010040200`
        - JPN: `0005001010040000`
    
    With this you will be able to keep your themes and manage them with StyleMiiU and Themiify.

=== "System Memory"

    If you have previously installed a theme to your NAND, you will need the original Wii U Menu files 
    before proceeding, otherwise Themiify will not work.

    You can either restore the Wii U Menu files in the NAND with the original ones or manually place
    the original files in the SD Card for Themiify to use, this will only cover the latter.

    1. Use [JNUSTool](files.md) to obtain the original Wii U Menu files.
    2. Copy `Men.pack`, `Men2.pack` to `SD:/themiify/cache/Common/Package/`.
    3. Copy `cafe_barista_men.bfsar` to `SD:/themiify/cache/Common/Sound/Men/`.

    This will allow you to use Themiify to manage and install themes.

=== "UTheme App"

    No action is needed before proceeding with Themiify.

=== "StyleMiiU"

    No action is needed before proceeding with Themiify.

[You can continue to install Themiify →](themiify.md){ .md-button .md-button--primary }
