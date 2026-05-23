---
hide:
  - toc
icon: fontawesome/solid/wrench
---

# Patching

--------------

Now we will use the Menu files you obtained from the previous step and patch them with the theme of your liking.

You will need:

- [Rom Patcher JS](https://www.marcrobledo.com/RomPatcher.js/) or [Flips](https://github.com/Alcaro/Flips).
- Original `Men.pack`, `Men2.pack`, and/or `cafe_barista_men.bfsar`.
    - If you do not have your original files please follow [Menu Files](files.md).
- A theme patch file.
    - It can be any of the following formats `.ips, .bps, .ups, .ppf, .aps, .rup`.

!!! info "Save your original `Men.pack`, `Men2.pack`, `cafe_barista_men.bfsar` files somewhere safe so you don't have to get your files again in the future"

--------------

### Getting a theme patch file

You can obtain `.bps` theme patch files via

- [Themezer](https://themezer.net/wiiu/themes) (Using the View Assets button)
- The [Theme Café Discord Server](https://discord.com/invite/2DNvH9db2A)

### Applying patches

1. In `Original file` select your **ORIGINAL UNMODIFIED** `Men.pack` / `Men2.pack` / `cafe_barista_men.bfsar` file you want to patch.

2. For the Patch File select the `.ips, .bps, .ups, .ppf, .aps, .rup` file you got from downloading the theme that matches the name of the ROM file.

3. Click Apply patch.

<div id="rom-patcher-container">
    <div>
        <label for="rom-patcher-input-file-rom">Original file:</label>
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
        <label for="rom-patcher-input-file-patch">Patch File:</label>
        <input type="file" id="rom-patcher-input-file-patch">
    </div>
    <div id="rom-patcher-row-error-message">
        <span id="rom-patcher-error-message"></span>
    </div>
        <div class="row m-b text-selectable text-mono" id="rom-patcher-row-patch-requirements">
        <div class="text-right text-mono" id="rom-patcher-patch-requirements-type"></div>
        <div class="text-truncate" id="rom-patcher-patch-requirements-value"></div>
    </div>
    <div>
        <br><button id="rom-patcher-button-apply">Apply Patch</button>
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

!!! abstract "Credits to [Marcrobledo](https://www.marcrobledo.com/) for RomPatcher.js"

??? failure "Having issues?"

    - If you're getting a Source ROM checksum mismatch or a red "X", you can follow [Troubleshooting](../troubleshooting.md#checksum-mismatch). 

- Finally remove the `(Patched)` from the name.

    - `Men2 (Patched).pack` -> `Men2.pack`

Repeat this process for every file you want to patch.  

--------------------------------

[Continue to Loading Custom Themes →](loading.md){ .md-button .md-button--primary }

<script src="patching/rom-patcher-js/RomPatcher.webworker.apply.js"></script>
<script src="patching/rom-patcher-js/RomPatcher.webworker.crc.js"></script>
<script src="patching/rom-patcher-js/RomPatcher.webapp.js"></script>
