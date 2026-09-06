<link rel="stylesheet" href="stylesheets/anim.css" />

# Color Animations

<video autoplay loop muted playsinline>
<source src="imgs/color/vc.mp4" type="video/mp4">
</video>

You can add color animations which will multiply the texture color by the animation color.

- Color animations will gradually transition between each keyframe.
- These animations are for `.BFRES` (3D Models) and not `.BFLYT` (Layout)
- For better results use black and white textures.

-----------------------

## What you need

- [Switch Toolbox](https://github.com/KillzXGaming/Switch-Toolbox/releases/tag/Final).


### Color Animation generator

The following Script allows you to generate a Color Animation for `LoungeVR`, `FloatIcon00`, and `LoungeFloor`. 
However you can manually edit the name of the model and material on the generated animation to use them for something else.

!!! script "Color Animation Generator"

    <div class="formContainer">
        <form id="gen-color" class="animForm" autocomplete="off">
            <div class="formHdr">Model</div>
            <div>
                <input type="radio" id="vr-color" name="model" value="vr" required/>
                <label for="vr-color">LoungeVR</label>
            </div>
            <div>
                <input type="radio" id="float-color" name="model" value="float" required/>
                <label for="float-color">FloatIcon00</label>
            </div>
            <div>
                <input type="radio" id="floor-color" name="model" value="floor" required/>
                <label for="floor-color">LoungeFloor</label>
            </div>
            <div>
                <label for="color-keyframes" class="formLbl">
                    Keyframe, #HexColor
                </label>
                <textarea class="formInp" id="color-keyframes" rows="10" required >0, #FF0000&#10;60, #FFA600&#10;120, #FFFF00&#10;180, #00FF00&#10;240, #0000FF&#10;300, #800080&#10;360, #FF0000</textarea>
            </div>
            <button class="btnanim" type="submit">
                Generate Color Animation
            </button>
        </form>
    </div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js"></script>
<script src="scripts/color.js"></script>

### Importing Animations

- Go to your model file.
- Right Click the Animations folder.
- Select Import -> `Color Animation`.
- Open your `.yaml` animation from before.

!!! success

    Your custom animation has been added and you can now test it [StyleMiiU](../../install/loading.md#stylemiiu-plugin).