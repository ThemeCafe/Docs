const jsonTemplate = {
    "Name": "Wait",
    "Path": "",
    "FrameCount": 2000,
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
                        "0": { "Value": 0.0, "Delta": -6570.0 },
                        "2000": { "Value": -6570.0, "Delta": 0.0 }
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

    const updatedJson = { ...jsonTemplate };
    updatedJson.FrameCount = newFrameCount;

    const keyFrames = updatedJson.BoneAnims[0].Curves[0].KeyFrames;
    const oldLastKeyFrameTime = Object.keys(keyFrames).pop(); // Get the last keyframe time (e.g., "2000")

    keyFrames[newKeyFrameTime] = keyFrames[oldLastKeyFrameTime]; // Copy last keyframe value to new time
    delete keyFrames[oldLastKeyFrameTime]; // Remove the old keyframe time

    // Automatically download the JSON file
    const blob = new Blob([JSON.stringify(updatedJson, null, 4)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Wait.json';
    link.click();
});