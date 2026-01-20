const yamlSrt = `
Name: {}
Path:
Loop: true
FrameCount: {}
MaterialAnimConfigs:
  - Name: {}
    TexturePatternInfos: []
    ParamInfos:
      - Name: tex_mtx0
        IsConstant: true
        Constants:
          - Offset: Mode
            Value: 0.0
        CurveData:
          - KeyFrames:
              0: 0
            Offset: {}
`;

function genSrtYaml(model, speed, type, reverse, rotate) {
	const srtAnim = jsyaml.load(yamlSrt);
	srtAnim.Name = Object.keys(model)[0];
	srtAnim.MaterialAnimConfigs[0].Name = Object.values(model)[0];
	srtAnim.FrameCount = speed;
	keyframes = srtAnim.MaterialAnimConfigs[0].ParamInfos[0].CurveData[0].KeyFrames;

    if (rotate) {
        if (reverse) {
            keyframes[0] = 6.2832;
        };

        keyframes[speed] = reverse ? 0: 6.2832;
    }else{
        if (reverse) {
            keyframes[0] = 1;
        };

        keyframes[speed] = reverse ? 0: 1;
    }
	
	srtAnim.MaterialAnimConfigs[0].ParamInfos[0].CurveData[0].Offset = `${type}`;

	return jsyaml.dump(srtAnim).replace(/'(\w+)':/g, "$1:");
}

function getModel(form) {
	const selected = form.querySelector('input[name="model"]:checked')?.value;

	switch (selected) {
		case "vr":
			return {
				LoungeVR: "m_00",
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
	.getElementById("gen-scr")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		console.log(event.target)
		const model = getModel(event.target);
		const scrollSpeed = 60*(parseInt(document.getElementById("scr-speed").value));
		const scrollDir = document.getElementById("scr-direction").value;
		const isReverse = document.getElementById("scr-reverse").checked;
		const isRotate = false;
		const yamlData = genSrtYaml(model, scrollSpeed, scrollDir, isReverse, isRotate);

		exportAnim(`${Object.keys(model)[0]}_auto.yaml`, yamlData);
	});

document
	.getElementById("gen-rot")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		console.log(event.target)
		const model = getModel(event.target);
		const scrollSpeed = 60*(parseInt(document.getElementById("rot-speed").value));
		const scrollDir = document.getElementById("rot-direction").value;
		const isReverse = document.getElementById("rot-reverse").checked;
		const isRotate = true;
		const yamlData = genSrtYaml(model, scrollSpeed, scrollDir, isReverse, isRotate);

		exportAnim(`${Object.keys(model)[0]}_auto.yaml`, yamlData);
	});