---
search:
  exclude: true
---

# Scrolling

This is a Scrolling Animated Theme

<video controls>
<source src="../imgs/scrolling/hs.mp4" type="video/mp4">
</video>

## What you need.

- [Switch Toolbox](https://github.com/KillzXGaming/Switch-Toolbox/releases/tag/Final)

### Template

We will be working with this template

[:fontawesome-solid-download: Download template (Scrolling)](base/scrolling/Men2.bps){ .md-button .md-button--primary }

Apply the patch to a copy of your `Men2.pack` file ([Patching](../../install/patching.md)) and come back here when you're done

### Replacing Textures

Open the patched template with [Switch Toolbox](https://github.com/KillzXGaming/Switch-Toolbox/releases/tag/Final)

- Go inside Common
- Go inside Model
- Double click `LoungueVR.szs`
- Double click`gsys.bfres`
- Go inside Textures

- Now replace the textures `1, 2, 3, 4, 5, 6` with your images

    ??? info "Recommended Image Resolution"

        1280x720 or less, anything higher is more likely to crash on console

    - Right-click the texture you are going to replace
    - Click Replace
    - Select your image

    - Make sure the format is set to `BC1_SRGB`
    - Click OK

    And repeat with the other textures

    ???+ tip "Using less frames"

        If you are using less than 6 images you need to follow [Scrolling Speed](#scrolling-speed) to change the animation file


After replacing the textures

- Save
- You can now close Switch Toolbox

!!! success

    Your Scrolling animation is done and you can now test it [SDCafiine](../../install/loading.md#sdcafiine)

## Scrolling Speed

If you want to change the Scrolling Speed of your theme you need to follow a few more steps

### What you need

- [TrackStudio](https://mapstudioproject.github.io/TrackStudioDocs/setup/Setup.html)

Open your scrolling theme with [Switch Toolbox](https://github.com/KillzXGaming/Switch-Toolbox/releases/tag/Final)

- Go inside Common
- Go inside Model
- Right click `LoungueVR.szs`
- Select *Export Raw Data*
- Save it

You can close Switch Toolbox for now

Use the following Scrolling Animation Generator tool

- In `Amount of seconds` set the amount of seconds you want before the animation loops
- In `Amount of panels` set the amount of panels you are using (6 is default)
- After you set your values click on `Generate Wait.json`

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

!!! script "Animation Generator"

    <div>
        <label for="seconds">Amount of seconds:</label>
        <input type="number" id="seconds" placeholder="Enter seconds">
        <br><br>
        <label for="panels">Amount of panels:</label>
        <select id="panels">
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
        </select>
        <br><br>
        <button id="generate"><b>Generate Wait.json</b></button>
    </div>

<script>
const jsonTemplate = {
    "Name": "Wait",
    "Path": "",
    "FrameCount": 0,
    "Loop": true,
    "Baked": false,
    "UseDegrees": true,
    "FlagsScale": "Maya",
    "FlagsRotate": "EulerXYZ",
    "BoneAnims": [
        {
            "Name": "Root",
            "SegmentScaleCompensate": false,
            "UseBaseTranslation": true,
            "UseBaseRotation": true,
            "UseBaseScale": true,
            "Curves": [
                {
                    "Target": "PositionX",
                    "Interpolation": "Linear",
                    "FrameType": "Single",
                    "KeyType": "Single",
                    "WrapMode": "Clamp, Clamp",
                    "Scale": 1.0,
                    "Offset": 0.0,
                    "KeyFrames": {
                        "0": { "Value": 0.0, "Delta": -6570.0 }
                    }
                }
            ],
            "BaseData": {
                "Flags": 0,
                "Scale": "1;1;1",
                "Translate": "0;509;-319",
                "Rotate": "0;0;0"
            }
        }
    ],
    "UserData": {}
};

document.getElementById('generate').addEventListener('click', () => {
    const seconds = parseInt(document.getElementById('seconds').value);
    const panels = parseInt(document.getElementById('panels').value);

    if (isNaN(seconds) || isNaN(panels)) {
        alert('Please use valid values');
        return;
    }

    const frames = Math.floor(seconds * 60);
    let keyframesMultiplier;

    switch (panels) {
        case 6:
            keyframesMultiplier = 1;
            break;
        case 5:
            keyframesMultiplier = 1.2;
            break;
        case 4:
            keyframesMultiplier = 1.5;
            break;
        case 3:
            keyframesMultiplier = 2;
            break;
        case 2:
            keyframesMultiplier = 3;
            break;
        case 1:
            keyframesMultiplier = 6;
            break;
        default:
            alert('Invalid panel selection.');
            return;
    }

    const newFrameCount = Math.floor(frames);
    const newKeyFrameTime = Math.floor(frames * keyframesMultiplier);
    const updatedJson = JSON.parse(JSON.stringify(jsonTemplate));

    updatedJson.FrameCount = newFrameCount;
    updatedJson.BoneAnims[0].Curves[0].KeyFrames[newKeyFrameTime] = { "Value": -6570.0, "Delta": 0.0 };

    const blob = new Blob([JSON.stringify(updatedJson, null, 4)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Wait.json';
    link.click();
});
</script>

This will generate a `Wait.json` file

??? question "Using less panels"

    If you are using less panels, the animation will end prematurely and will loop back to the beggining, the script is made to have a seamless loop as long as you replace the next texture after the amount of panels you are using with the texture of the first panel

    If you are using 6 panels, you don't need to worry about this

Open `LoungueVR.szs` with [TrackStudio](https://mapstudioproject.github.io/TrackStudioDocs/setup/Setup.html)

- Double click `gsys.bfres`
- Go inside Animations
- Go inside Skeletal Animations
- Right click `Wait`
- Click Replace
- Replace it with the `Wait.json` file you just generated

You can preview the animation by clicking the *Play* button

Finally save

- Click File
- Click Save

After saving, you can close TrackStudio

Now open your scrolling theme with Switch Toolbox

- Go inside Common
- Go inside Model
- Right click `LoungueVR.szs`
- Select *Replace Raw Data*
- Replace it with the `LoungueVR.szs` we just saved
- Now click Save

!!! success

    Your Scrolling animation is done and you can now test it [SDCafiine](../../install/loading.md#sdcafiine)