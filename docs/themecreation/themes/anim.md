<link rel="stylesheet" href="../stylesheets/anim.css" />

# Animations


<video controls>
<source src="../imgs/frame/vf.mp4" type="video/mp4">
</video>

-----------------------

## What you need.

- [Switch Toolbox](https://github.com/KillzXGaming/Switch-Toolbox/releases/tag/Final)


### Adding Frames

Open `LoungeVR.szs` with [Switch Toolbox](https://github.com/KillzXGaming/Switch-Toolbox/releases/tag/Final)

- Double click `gsys.bfres`
- Right click the Textures folder
- Press import
- Select all of your frames -> Open

    ![image](imgs/frame/importTex.png)

    ??? info "Recommended Image Resolution"

        1280x720 or less, anything higher is more likely to crash on console

    - Select all textures (with the first frame selected, shift+click the last frame)
    - Change the mip count to 1

        ![image](imgs/frame/mip.png)

    - Make sure the format is set to `BC1_SRGB`
    - Click OK

Now that you've imported your frames, you need to create the animation file

### Generating the Animation File

This step is required for your animation to work correctly

- Choose which model is being animated
- Set the framerate of your animation
- Upload the animation frames

??? info "Script info"

    Due to the way menu animations work, only values divisible by 60 are available.

!!! script "Animation Generator"

    === "Frame By Frame"

        <div class="formContainer">
            <form id="gen-pat" class="animForm" autocomplete="off">
                <div class="formHdr">Model</div>
                <div>
                    <input type="radio" id="vr" name="model" value="vr" required />
                    <label for="vr">LoungeVR</label>
                </div>
                <div>
                    <input type="radio" id="floor" name="model" value="floor" required />
                    <label for="floor">LoungeFloor</label>
                </div>
                <div>
                    <label for="fps" class="formLbl">Framerate (FPS)</label>
                    <select class="formSel" name="fps" id="fps" required>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="30" selected>30</option>
                        <option value="60">60</option>
                    </select>
                </div>
                <div>
                    <label for="fileupload" class="formLbl">Upload Frames</label>
                    <input
                        type="file"
                        id="fileupload"
                        class="formSel"
                        accept=".bftex,.dds,.dds2,.png,.bmp,.tga,.jpg,.tiff,.tif,.gif"
                        multiple
                        required
                    />
                </div>
                <button type="submit">
                    Generate Animation
                </button>
            </form>
        </div>

    === "Scrolling"

        <div class="formContainer">
            <form id="gen-srt" class="animForm" autocomplete="off">
                <div class="formHdr">Model</div>
                <div>
                    <input type="radio" id="vr2" name="model" value="vr" required />
                    <label for="vr2">LoungeVR</label>
                </div>
                <div>
                    <input type="radio" id="floor2" name="model" value="floor" required />
                    <label for="floor2">LoungeFloor</label>
                </div>
                <div>
                    <label for="speed" class="formLbl">Scrolling Speed</label>
                    <select class="formSel" name="speed" id="speed">
                        <option value=1500>Very Slow</option>
                        <option value=800>Slow</option>
                        <option value=300 selected>Default</option>
                        <option value=125>Fast</option>
                        <option value=70>Very Fast</option>
                    </select>
                </div>
                <div>
                    <label for="direction" class="formLbl">Scroll Direction</label>
                    <select class="formSel" id="direction" name="direction">
                        <option value="X" selected>Horizontal</option>
                        <option value="Y">Vertical</option>
                    </select>
                </div>
                <div style="font-weight: bold;">
                    <label for="reverse">Mirror Scroll Direction</label>
                    <input type="checkbox" id="reverse">
                </div>
                <button type="submit">
                    Generate Animation
                </button>
            </form>
        </div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js"></script>
<script src="../scripts/index.js"></script>



!!! warning "Make sure the name of the exported animation ends in _auto or the animation will not work!"
After generating your animation file, go back to ToolBox

- Right click the Animations folder
- Select **Import** -> `Texture Pattern Animation` for frame based animations  
Alternatively, select `Texture SRT Animation` for scrolling animations
- Open the animation file you previously generated


!!! info "You can preview the animation by clicking the *Play* button"

    ![image](imgs/frame/preview.gif)



!!! success

    Your custom animation has been added and you can now test it [SDCafiine](../../install/loading.md#sdcafiine)
    