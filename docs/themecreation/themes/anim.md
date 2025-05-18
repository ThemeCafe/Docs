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

Now that you imported your frames, you need to create the animation file

### Generating the Animation File

This step is required for your animation to work correctly

- Choose which model is being animated
- Set the framerate of your animation
- Upload the animation frames

??? info "Script info"

    Due to the way menu animations work, only values divisible by 60 are available.

<style>
button {
    background-color: #009485;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 16px;
    font-family: Arial, sans-serif; 
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #df41fb;
    transition: 0.1s;
}

button:active {
    background-color: #bc60ff;
}
</style>

!!! quote ""
    <div style="padding: 16px 20px; max-width: 400px;">
        <form id="generate-form" autocomplete="off" style="display: flex; flex-direction: column; gap: 14px;">
            <div style="font-weight: bold;">Model</div>
            <label style="margin-left: 10px;">
                <input type="radio" id="vr" value="vr" name="model" required>
                LoungeVR
            </label>
            <label style="margin-left: 10px;">
                <input type="radio" id="floor" value="floor" name="model">
                LoungeFloor
            </label>
            <div>
                <label for="fps" style="display: block; font-weight: bold; margin-bottom: 6px;">Framerate (FPS)</label>
                <select name="fps" id="fps" required style="width: 100%; padding: 8px; border-radius: 6px; border: 1px solid #ccc;">
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
                <label for="fileupload" style="display: block; font-weight: bold; margin-bottom: 6px;">Upload Frames</label>
                <input
                    type="file"
                    id="fileupload"
                    accept=".bftex,.dds,.dds2,.png,.bmp,.tga,.jpg,.tiff,.tif,.gif"
                    multiple
                    required
                    style="width: 100%; padding: 8px; border-radius: 6px; border: 1px solid #ccc;"
                />
            </div>
            <button type="submit">
                Generate Animation
            </button>
        </form>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js"></script>
        <script src="../scripts/index.js"></script>
    </div>



!!! warning "Make sure the name of the exported animation ends in _auto or the animation will not work!"
After generating your animation file, go back to ToolBox

- Right click the Animations folder
- Select Import -> `Texture Pattern Animation`
- Open the animation file you previously generated


!!! info "You can preview the animation by clicking the *Play* button"

    ![image](imgs/frame/preview.gif)



!!! success

    Your custom animation has been added and you can now test it [SDCafiine](../../install/loading.md#__tabbed_1_1)
    