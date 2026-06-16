---
search:
  exclude: true
---

# FAQ

## Getting Started

### What do I need to start?

- A modded Wii U with the Aroma Environment.
    - If you have not modded your Wii U follow the [Wii U Homebrew Guide](https://wiiu.hacks.guide/).
- [StyleMiiU-Plugin](https://github.com/Themiify-hb/StyleMiiU-Plugin) to load your custom themes.
    - Copy `stylemiiu.wps` to `SD:/wiiu/environments/aroma/plugins`.
- The latest release of [Themiify](https://github.com/Themiify-hb/Themiify/releases).
    - Copy the `Themiify.wuhb` to `SD:/wiiu/apps`.

Start Themiify, download any theme you like and enjoy!

--------------

### Does Themiify modify my Wii U System Files?

No! Themiify works by loading themes from `SD:/wiiu/themes` with [StyleMiiU-Plugin](https://github.com/Themiify-hb/StyleMiiU-Plugin).

--------------

### My Wii U is EUR, can I use themes normally?

Yes! Keep in mind that european consoles have more language packs built onto the menu meaning the file size on themes needs to be smaller to work properly. This is more likely but not guaranteed to happen with unoptimized or themes with texture pattern animations.

Almost every theme found in [Themezer](https://themezer.net/wiiu/themes) should be optimized to work with European consoles, if you find one that is not, please let us know in our [Discord Server](https://discord.com/invite/2DNvH9db2A)!

--------------

### Will my themes show up if I use Tiramisu?

No. Custom themes will not appear because Themiify relies on [StyleMiiU-Plugin](https://github.com/Themiify-hb/StyleMiiU-Plugin) to load them, which is only available while using Aroma.

--------------

## Troubleshooting

### I have previously installed a theme to my NAND and Themiify won't work

For Themiify to work properly, you will need the original Wii U Menu files.

1. Use [JNUSTool](install/files.md#jnustool) to get the original files.
2. Copy `Men.pack`, `Men2.pack` to `SD:/themiify/cache/Common/Package/`.
3. Copy `cafe_barista_men.bfsar` to `SD:/themiify/cache/Common/Sound/Men/`.

After that, you should be able to use Themiify normally.

### My Wii U crashes when loading the Wii U Menu

You can remove any previously installed theme.

1. Insert the SD Card into your computer.
2. Open `SD:/wiiu/themes/`.
3. Delete the folder with your recently installed theme.

After this, the Wii U will boot using the original theme.

--------------

For further support, visit our [Discord Server](https://discord.com/invite/2DNvH9db2A).