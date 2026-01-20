const yamlPat = `
Name: {}
Path: 
Loop: true
FrameCount: {}
MaterialAnimConfigs:
  - Name: {}
    TexturePatternInfos:
      - Name: _a0
        IsConstant: false
        ConstantValue: null
        CurveData:
          KeyFrames: {}
    ParamInfos: []
`;

function sortFiles(arr) {
	return arr.sort((a, b) =>
		a.localeCompare(b, undefined, {
			numeric: true,
			sensitivity: "base",
		})
	);
}

function processFiles() {
	const fileInput = document.getElementById("fileupload");
	const files = fileInput.files;

	if (!files.length) return false;

	const baseNames = Array.from(files).map((file) => {
		const name = file.name;
		return name.substring(0, name.lastIndexOf(".")) || name;
	});

	return sortFiles(baseNames);
}

function genPatYaml(model, skip, fileNames) {
	const patAnim = jsyaml.load(yamlPat);
	patAnim.Name = Object.keys(model)[0];
	patAnim.MaterialAnimConfigs[0].Name = Object.values(model)[0];

	const keyFrames = {};
	let frame = 0;

	fileNames.forEach((name) => {
		keyFrames[frame] = name;
		frame += skip;
	});

	patAnim.FrameCount = frame;
	patAnim.MaterialAnimConfigs[0].TexturePatternInfos[0].CurveData.KeyFrames =
		keyFrames;

	return jsyaml.dump(patAnim).replace(/'(\w+)':/g, "$1:");
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
	.getElementById("gen-pat")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		const fps = parseInt(document.getElementById("fps").value);
		const model = getModel(event.target);
		const files = processFiles();
		const frameSkip = 60 / fps;
		const yamlData = genPatYaml(model, frameSkip, files);

		exportAnim(`${Object.keys(model)[0]}_auto.yaml`, yamlData);
	});
