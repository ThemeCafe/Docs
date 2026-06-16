---
icon: fontawesome/solid/brush
---

# Themiify

Themiify is a homebrew application that allows for on the fly installation of Wii U Menu themes via the internet. Once a theme is installed [StyleMiiU](https://github.com/Themiify-hb/StyleMiiU-Plugin/releases) will read the theme and show it next time the Wii U Menu is loaded.

!!! info "**No system file is modified by this app.**"

## What you need

- A modded Wii U with [Aroma](https://wiiu.hacks.guide/aroma/getting-started.html).
- [Themiify](https://github.com/Themiify-hb/Themiify/releases).
- [StyleMiiU Plugin](https://github.com/Themiify-hb/StyleMiiU-Plugin/releases).
- Your theme with the extension `.utheme`. (Optional)
    - These can be obtained in [Themezer](https://themezer.net/wiiu/themes).

## Installation

1. Download [Themiify](https://github.com/Themiify-hb/Themiify/releases) and copy the `Themiify.wuhb` file to `SD:/wiiu/apps`.
2. Download [StyleMiiU Plugin](https://github.com/Themiify-hb/StyleMiiU-Plugin/releases) and copy the file `stylemiiu.wps` to `SD:/wiiu/environments/aroma/plugins`.
3. If you have it, copy your `.utheme` file to `SD:/wiiu/themes` (This is used for [Local Installation](#local-installation)).

## Installing Themes

=== "Network Installation"

    ### Downloading and Installing Themes (Network)

    1. Turn on your Wii U and boot aroma.
    2. Open Themiify.

        ![Themiify](imgs/t1.png)

    3. Select the Network tab.

        ![Network Tab](imgs/t2.png)

    4. Choose the theme you want to download.
        - You can also see a preview of the theme by selecting Details.

    5. Confirm the download of the theme with `Yes`.

        ![Download Confirmation](imgs/t3.png)

    6. After the download is finished, select `Yes` to install the theme.

        ![Install Confirmation](imgs/t4.png)

        !!! info "If you decide to not install the theme right away, you will be able to install it later via [Local Installation](#local-installation)."

    7. After the installation is finished, you will be asked to delete the `.utheme` file of the theme you just installed, do so to save storage space.

        ![Delete Utheme File](imgs/t5.png)

    8. Press `B` and select the Exit button.

        ![Exit](imgs/t6.png)

=== "Local Installation"

    ### Installing Themes Locally

    You can install themes locally by placing your `.utheme` files in `SD:/wiiu/themes`.

    1. Open Themiify.
    2. Select the Theme Management Tab and select Local Theme Installation.

        ![Local Theme Installation Tab](imgs/t7.png)

    3. Install your previously downloaded `.utheme` file.
    4. After the installation is finished, you will be asked to delete the `.utheme` file of the theme you just installed, do so to save storage space.

        ![Delete utheme](imgs/t8.png)

    5. Press `B` and select the Exit button.

        ![Exit](imgs/t6.png)

!!! success

    You have succesfully installed a Custom Theme for your Wii U.

    ![image](imgs/r.png)

!!! info "If you want to use custom fonts, follow [Fonts](fonts.md)"

!!! warning "Troubleshooting"

    If you have any issues while using Themiify, please join our [Discord Server](https://discord.com/invite/2DNvH9db2A) for support.
    