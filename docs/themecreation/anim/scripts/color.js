const YamlColor = `
Name: {}
Path: null
Loop: true
FrameCount: {}
MaterialAnimConfigs:
  - Name: {}
    TexturePatternInfos: []
    ParamInfos:
      - Name: albedo_tex_color
        IsConstant: false
        Constants: []
        CurveData:
          - Offset: R
            KeyFrames: {}
          - Offset: G
            KeyFrames: {}
          - Offset: B
            KeyFrames: {}
`;

function parseColors(input) {
    const lines = input.split("\n");
    const colors = [];

    for (const line of lines) {
        const match = line.trim().match(/^(\d+),\s*#([0-9a-fA-F]{6})$/);

        if (!match) {
            throw new Error(
                `Invalid: "${line}"\nPlease use: KeyFrame, #HexColor`
            );
        }

        const frame = parseInt(match[1], 10);
        const hex = match[2];
        const r = parseInt(hex.substring(0, 2), 16) / 255;
        const g = parseInt(hex.substring(2, 4), 16) / 255;
        const b = parseInt(hex.substring(4, 6), 16) / 255;

        colors.push({
            frame,
            r,
            g,
            b
        });
    }
    
    return colors;
}

function genColorYaml(model, colors) {
    const colorAnim = jsyaml.load(YamlColor);
    modelName = Object.keys(model)[0];
    colorAnim.Name = `${modelName}_auto`;
    colorAnim.MaterialAnimConfigs[0].Name = Object.values(model)[0];
    colorAnim.FrameCount = colors[colors.length - 1].frame;
    curveData = colorAnim.MaterialAnimConfigs[0].ParamInfos[0].CurveData;
    rKeyframes = {};
    gKeyframes = {};
    bKeyframes = {};

    for (const color of colors) {
        rKeyframes[color.frame] = color.r;
        gKeyframes[color.frame] = color.g;
        bKeyframes[color.frame] = color.b;
    }

    curveData[0].KeyFrames = rKeyframes;
    curveData[1].KeyFrames = gKeyframes;
    curveData[2].KeyFrames = bKeyframes;

    return jsyaml.dump(colorAnim).replace(/'(\w+)':/g, "$1:");
}

function getModel(form) {
    const selected = form.querySelector('input[name="model"]:checked')?.value;

    switch (selected) {
        case "vr":
            return {
                LoungeVR: "m_00",
            };
        case "float":
            return {
                FloatIcon00: "m_FloatIcon1",
            };
        case "floor":
            return {
                LoungeFloor: "m_floor",
            };
        default:
            return null;
    }
}

function exportAnim(filename, content) {
    const blob = new Blob([content], {
        type: "text/yaml",
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

document
    .getElementById("gen-color")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        const form = event.target;
        const model = getModel(form);
        const colorInput = document.getElementById("color-keyframes").value;
        const colors = parseColors(colorInput);
        const yamlData = genColorYaml(model, colors);

        exportAnim(`${Object.keys(model)[0]}_auto.yaml`, yamlData);
    });