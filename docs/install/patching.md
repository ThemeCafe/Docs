# Patching

--------------

You will need:

- [Rom Patcher JS](https://www.marcrobledo.com/RomPatcher.js/) or [Flips](https://github.com/Alcaro/Flips)
- Men.pack, Men2.pack, cafe_barista_men.bfsar
- A patch file
    - It can be one of the following formats .ips, .bps, .ups, .ppf, .aps, .rup

!!! warning

    **Save your unmodified Men.pack, Men2.pack, cafe_barista_men.bfsar files somewhere so you dont need to get your files again**

--------------

### Getting a patch file

You can join the Theme Café [discord server](https://discord.com/invite/2DNvH9db2A) to check for new themes or go to the [Theme Café Wesbsite](https://perrohuevo.wixsite.com/theme-cafe)

If you are in the Theme Café discord server

- You can check for [Static Themes here](https://discord.com/channels/1195784055296381020/1226501319976816671)
- You can check for [Animated Themes here](https://discord.com/channels/1195784055296381020/1233945865312538684)

??? info "Theme Café Website Info"

    The Theme Café website might not upload new themes very often, it's recommended to join the discord server

### Applying patches

1. In `Your original file here` select your **ORIGINAL UNMODIFIED** `Men.pack` / `Men2.pack` / `cafe_barista_men.bfsar` file you want to patch

2. For the Patch File select the **.ips, .bps, .ups, .ppf, .aps, .rup file** you got from downloading the theme that matches the name of the ROM file

3. Press Apply patch

<div id="rom-patcher-container">
    <div>
        <label for="rom-patcher-input-file-rom">Your original file here:</label>
        <input type="file" id="rom-patcher-input-file-rom">
    </div>
    <div class="m-b text-selectable text-mono" id="rom-patcher-rom-info">
        <div class="row">
            <div class="text-left">CRC32: <span id="rom-patcher-span-crc32"></span></div>
        </div>
        <div class="row">
            <div class="text-left">MD5: &nbsp&nbsp<span id="rom-patcher-span-md5"></span></div>
        </div>
        <div class="row">
            <div class="text-left">SHA-1: <span id="rom-patcher-span-sha1"></div>
        </div>
        <div class="row" id="rom-patcher-row-info-rom">
            <div class="text-right">ROM:</div>
            <div class="text-truncate"><span id="rom-patcher-span-rom-info"></span></div>
        </div>
    </div>
    <div>
        <label for="rom-patcher-input-file-patch">Your Patch File here:</label>
        <input type="file" id="rom-patcher-input-file-patch">
    </div>
    <div>
        <button id="rom-patcher-button-apply">Apply Patch</button>
    </div>
    <div>
        <a id="rom-patcher-download-link" style="display:none;">Download Patched ROM</a>
    </div>
</div>

<script type="text/javascript">
    window.addEventListener('load', function(){
        const myPatcherSettings = {
            language: 'en', /* Set default language */
            requireValidation: false, /* Block if checksum mismatch */
            allowDropFiles: true, /* Enable drag-and-drop support */
            displayHashes: true /* Show CRC32, MD5, SHA-1 values */
        };
        RomPatcherWeb.initialize(myPatcherSettings);
    });
</script>   

??? abstract "Credits"

    Credits to [Marcrobledo](https://www.marcrobledo.com/) for RomPatcher.js

It should now look like this

![Image title](install2imgs/p4.png)

??? failure "Having issues?"

    - If you're getting a Source ROM checksum mismatch or a red "X", you can follow [Troubleshooting](../troubleshooting/troubleshooting.md#checksum-mismatch)

Finally remove the `(Patched)` from the name

![Image title](install2imgs/p5.png)

![Image title](install2imgs/p6.png)

Now do the same with the other files


!!! success

    You can now go to [Loading Custom Themes](loading.md)

    [Continue to Loading Custom Themes → ](loading.md){ .md-button .md-button--primary }