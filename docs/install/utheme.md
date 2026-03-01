---
icon: fontawesome/solid/brush
---

# Utheme

Utheme is a homebrew application that allows for on the fly installation of Wii U System Menu themes without the need for users to use external tools, and browse/install themes directly from the internet to your console. Once a theme is installed [StyleMiiU-Plugin](https://github.com/Themiify-hb/StyleMiiU-Plugin/releases) will read the theme and show it next time the Wii U Menu is loaded.

!!! info "**No system file is modified by this app.**"

## What you need

- A modded Wii U with [Aroma](https://wiiu.hacks.guide/aroma/getting-started.html).
- [Utheme](https://github.com/xziip/UTheme) (Also on the [Homebrew App Store](https://hb-app.store/wiiu/UTheme)).
- [StyleMiiU Plugin](https://github.com/Themiify-hb/StyleMiiU-Plugin/releases) (Downloaded automatically when opening Utheme).

## Installation

1. Download [Utheme](https://github.com/Xziip/UTheme/releases) and copy the `Utheme.wuhb` file to `SD:/wiiu/apps`.
2. Turn on your Wii U and boot aroma.
3. Open Utheme.
4. Select "Download Themes".
5. Select the theme you want to install.
6. Press `A` to continue with the installation (This will take a couple of seconds).
7. Go back to the main menu and quit the app.

!!! success

    You have succesfully installed a custom theme.

??? question "If you are using an older version of UTheme (0.2B) or your theme does not load"

    - Open the WUPS menu (L + ↓ + SELECT)
    - Select StyleMiiU.
    - Select "Available Themes".
    - Press A on the theme you want to set as your current one.
    - Go back and close the WUPS menu.

    This should reboot your console and load your theme

??? warning "Having Issues?"

    - If you used to load themes with `SDCafiine` remove every theme from `SD:/wiiu/sdcafiine/0005001010040X00/` (X = depends on your console region , USA = 1, EUR = 2, JPN = 0) or move them to `SD:/wiiu/themes`

    - If your theme is crashing your console go to `SD:/wiiu/themes` and delete the theme you just installed.

    - If you have any more issues you can join the [Theme Café Discord Server](https://discord.com/invite/2DNvH9db2A) and ask for help there.

----------------------------

## Install .utheme files

You can get `.utheme` files from [Themezer](https://themezer.net/wiiu/themes) and install them locally on your console

1. Place your `.utheme` file in `SD:/wiiu/themes`.
2. Turn on your Wii U and boot aroma.
3. Open UTheme.
4. Select "Manage Themes".
5. Press `X` and select the theme you want to install.
6. Go back to the main menu and quit the app.

!!! success

    You have succesfully installed a theme from a `.utheme` file.

!!! abstract "Special thanks to [Xziip](https://github.com/Xziip), [Nathaniel](https://github.com/Fangal-Airbag), [AlphaCraft](https://github.com/AlphaCraft9658), [Migush](https://github.com/Migushthe2nd) and everyone in the Theme Café Discord Server"