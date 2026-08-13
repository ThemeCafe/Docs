# Color Animations

-----------------------

## What you need

- [Switch Toolbox](https://github.com/KillzXGaming/Switch-Toolbox/releases/tag/Final).
- [Template](../template/index.md#template).

WIP

### YAML Template

``` YAML title="LoungeFloor_auto.yaml"
Name: LoungeFloor_auto
Path: null
Loop: true
FrameCount: 200
MaterialAnimConfigs:
  - Name: m_floor
    TexturePatternInfos: []
    ParamInfos:
      - Name: albedo_tex_color
        IsConstant: false
        Constants: []

        CurveData:
          - Offset: R
            KeyFrames:
              0: 0.0
              100: 1.0
              200: 0.0

          - Offset: G
            KeyFrames:
              0: 1.0
              100: 0.0
              200: 1.0

          - Offset: B
            KeyFrames:
              0: 0.0
              100: 0.0
              200: 0.0
```

- Has offsets R, G and B for RED, GREEN and BLUE respectively
- The value of each keyframe represents the strenght of the color channel where 0 = 0 and 1 = 255
- this template goes from 255 GREEN to 255 RED after 100 frames, then goes back to 255 GREEN after another 100 frames
- Switch toolbox for some reason does not allow exporting the animation but it does allow importing it

WIP