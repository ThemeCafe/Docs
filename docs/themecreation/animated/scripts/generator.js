function generateKeyframes(frameCount, framerate) {
    let keyframes = {};
    let value = 0.0;
    let delta = 0.0;

    for (let i = 0; i < frameCount * framerate; i++) {
        keyframes[i] = { Value: value, Delta: delta };

        // Decrease value for every complete frame based on framerate.
        if ((i + 1) % framerate === 0) {
            value -= 1200.0;
        }
    }

    return keyframes;
}

function generateJson(framerate, frameCount) {
    let keyframes = generateKeyframes(frameCount, framerate);

    return {
        Name: "Wait",
        Path: "",
        FrameCount: frameCount * framerate - 1,
        Loop: true,
        Baked: false,
        UseDegrees: true,
        FlagsScale: "Maya",
        FlagsRotate: "EulerXYZ",
        BoneAnims: [
            {
                Name: "Root",
                SegmentScaleCompensate: false,
                UseBaseTranslation: true,
                UseBaseRotation: true,
                UseBaseScale: true,
                Curves: [
                    {
                        Target: "PositionX",
                        Interpolation: "Linear",
                        FrameType: "Byte",
                        KeyType: "Single",
                        WrapMode: "Clamp, Clamp",
                        Scale: 1.0,
                        Offset: 0.0,
                        KeyFrames: keyframes,
                    },
                ],
                BaseData: {
                    Flags: 0,
                    Scale: "1;1;1",
                    Translate: "0;509;-319",
                    Rotate: "0;0;0",
                },
            },
        ],
        UserData: {},
    };
}

function downloadJson(data, filename = "Wait.json") {
    const blob = new Blob([JSON.stringify(data, null, 4)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

// Event listener for form submission
document.getElementById("generate-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const framerate = parseInt(document.getElementById("framerate").value);
    const frameCount = parseInt(document.getElementById("frame-count").value);

    if (60 % framerate !== 0) {
        alert("Please use a value for framerate that is divisible by 60.");
        return;
    }
    if (frameCount > 38) {
        alert("If you are following the Frame-based animated theme tutorial, the provided base does not contain more than 38 frames so please use a lower value.");
        return;
    }

    const fps = 60 / framerate;
    const animationJson = generateJson(fps, frameCount);
    downloadJson(animationJson);
});
