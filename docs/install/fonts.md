# Fonts

You can use custom fonts on your Wii U using [System Font Replacer](#system-font-replacer)

!!! abstract

    Credits to [Daniel K.O](https://github.com/dkosmari/) for the information in this page

--------------

## ***System Font Replacer***

This is an Aroma plugin to safely temporarily replace the Wii U's system font.

The perfect solution for completing your custom Wii U Menu theme, without having to modify
anything in your NAND.

!!! info

    **No system file is modified by this plugin. All changes are done in RAM only.**

### What you need

- [System Font Replacer](https://github.com/dkosmari/System-Font-Replacer/releases)

### Installation

1. Download the `system-font-replacer.wps` file and copy it to `SD:/wiiu/environments/aroma/plugins`.
2. Download the `system-font-replacer-helper.wuhb` file and copy it to `SD:/wiiu/apps`.

- Create a `fonts` folder inside your `wiiu` folder.
- Place your fonts inside the `fonts` folder

### Usage

The plugin can load TrueType fonts from anywhere in the SD card, but it's a good idea to have
them in `SD:/wiiu/fonts/`; that's the default location the plugin looks for fonts.

1. Open up the WUPS menu (**L + ↓ + SELECT**) and enter the **System Font
   Replacer** menu.

2. Ensure the "Enabled" option is set to "*yes*", otherwise the plugin won't do anything.

3. Select the "Std Font" option, and press **A** to start editing it:

   - Press **→** to enter a folder;
   - Press **←** to leave a folder;
   - Press **↑** or **↓** to change the file;
   - Press **X** to reset back to the default value (`SD:/wiiu/fonts/`);
   - Press **A** to confirm, or **B** to cancel the change.

   Use it to navigate to the desired `.ttf` font you want to use, then press **A** to
   confirm it.

   Note that, if you select a directory (like the default, `SD:/wiiu/fonts`) the font will
   not be replaced, and the original system font is used instead.

4. Exit the plugin menu.

5. Reboot your Wii U.

!!! success

    You should now see your custom font

!!! warning

    If you have any issues getting your fonts to work check [Issues](#issues)

--------------

### Helper App

If you get a custom font in the form of a `.bps` patch, to be applied to one of the system
fonts, you can use the [System Font Replacer Helper](#system-font-replacer-helper) to easily convert them.

Simply put your `.bps` patches in `SD:/wiiu/fonts/`, and run the Helper app. It will then
automatically convert all `.bps` patches in that folder into `.ttf` fonts.

### "Use custom fonts only for Wii U Menu"

If you disable this option, the font will show up in any other software that requests the
system font. Some of them may crash, or might not render properly. To avoid surprises,
leave this option enabled ("*yes*"), so only the Wii U Menu is affected by the custom
font. If you trust your custom font to not crash the on-screen keyboard, the System
Settings, the Friends List, etc, you can disable this option ("*no*").

--------------

### Issues

#### Freezes/Crashes and text glitches

Not every game/app has good a font rendering implementation. Some cannot handle more
"advanced" TTF fonts, and will either render it incorrectly, or outright crash.

#### Large font files

Aroma plugins have very limited amount of memory to use. If the font file is too large, it
might use too much memory, and other plugins might stop working. Fonts up to 2.5 MiB in
size seem to work fine; larger fonts have not been tested.

#### Missing symbols

Some Wii U software make use of the system font's Private Use Area (PUA) block (from
`U+E000` to `U+E099`), to show symbols for gamepad buttons, sticks, etc. If the
replacement font doesn't have the correct symbols in that block, the text might be
rendered incorrectly. To get correct text rendering you have to edit your custom font, to
add the correct symbols to that block.

In [this repository](https://github.com/dkosmari/System-Font-Replacer/) you can find a Python script, [`merge-fonts.py`](https://github.com/dkosmari/System-Font-Replacer/blob/main/merge-fonts.py), that
uses the [FontForge](https://fontforge.org/) program to do that automatically, copying the
PUA block (and any other missing symbol) from the original system font into your custom
font.

1. Start by getting a copy of the original system fonts on your Wii U. The [System Font
   Replacer Helper](#system-font-replacer-helper) can do that for you, with a single button press.

2. Assuming the font you want to use on your Wii U is called `myfont.ttf`, and you want to
   use it as the "Std Font" font (replacing `CafeStd.ttf`), you can execute the script
   like this:

        ./merge-fonts.py  myfont.ttf  path/to/original/CafeStd.ttf  myfont+CafeStd.ttf

    or

        fontforge  merge-fonts.py  myfont.ttf  path/to/original/CafeStd.ttf  myfont+CafeStd.ttf

    - The first font has priority, all symbols from it will be copied to the output.

    - The PUA block (if it exists) is removed from the output.

    - Every missing symbol (including the PUA block) in the output will be filled in with
        symbols from the second font.

    - The last argument is optional, it's the name of the output file. It's a good idea to
        use the names of both source fonts, so you remember what's in the output.

    - There's also the [`copy-pua.py`](https://github.com/dkosmari/System-Font-Replacer/blob/main/copy-pua.py) script, that only copies in the PUA
    symbols from the second font, and nothing else. The result is a much smaller output
    font, but it might still be missing some symbols; it depends on how "complete" your
    source font is.

3. Copy the output font to your SD card, into `SD:/wiiu/fonts/`, then configure the plugin
   to use it.

--------------

## ***System Font Replacer Helper***

This is a companion app for the System Font Replacer plugin.

With it you can:

  - process `.bps` font patches in `SD:/wiiu/fonts/` to create `.ttf` fonts;

  - export the system fonts to `SD:/wiiu/fonts/`.

!!! info

    **No system file is modified by this application. All changes are done to the SD card only.**


### Creating `.ttf` fonts from `.bps` patches

1. Copy the font `.bps` patches to `SD:/wiiu/fonts/`.

2. Run the app by tapping on the **System Font Replacer Helper** icon.

3. When prompted, press **A** to process all the `.bps` patches.

4. At the end, press the **HOME** button and close the app.

You will now find the corresponding `.ttf` fonts in `SD:/wiiu/fonts/`, ready to be used in
the plugin configuration.


### Exporting the system fonts

1. Run the app, by tapping on the **System Font Replacer Helper** icon.

2. When prompted, press **+** to export the system fonts.

3. At the end, press the **HOME** button and close the app.

You will now find copies of the system fonts (`CafeCn.ttf`, `CafeKr.ttf`, `CafeStd.ttf`,
`CafeTw.ttf`) in `SD:/wiiu/fonts/`.