# Color Animations

<link rel="stylesheet" href="stylesheets/anim.css" />

-----------------------

## What you need

- [Switch Toolbox](https://github.com/KillzXGaming/Switch-Toolbox/releases/tag/Final).
- [Template](../template/index.md#template).

WIP

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
WIP