# Sound Effects (Misc)

This exist mainly to keep notes, if you are reading this be aware that some things may be missing context or make no sense

Sequence File Notes

- `prg` = PROGRAM
    - Used to know which instrument to play, each instrument has it's own assigned, two instruments cannot have the same program value
- Instrument Pitch
    - For example: `cn4 127, 0`
    - `cn4` is the note played where `C` is the note, `N` means normal (`S` for sharp) and `4` is the octave
    - `127` is the volume of the note
    - `0` is the duration, if set to 0 the note will play in it's entirety
- `wait` time to wait before the next instruction (100 = 1s)
- `call` calls a sequence to be played

GUESS_SE_CMN_DEBUG_BEGIN.bfseq

| Sequence Name            | Instrument | Program | Wave     |
|--------------------------|------------|---------|----------|
| SEQ_CMN_BTN              | 2          | 1       | 242      |
| SEQ_CMN_BTN_CHECK        | 3          | 2       | 243      |
| SEQ_CMN_BTN_CHECKOFF     | 3          | 2       | 243      |
| SEQ_CMN_CANCEL           | 8          | 5       | 248      |
| SEQ_CMN_DECIDE           | 5          | 4       | 245      |
| SEQ_CMN_DECIDE_SUB       | 4          | 3       | 244      |
| SEQ_CMN_FINISH           | 7          | 12      | 247      |
| SEQ_CMN_SE               | 0          | 9       | 240      |
| SEQ_CMN_SE_WAIT          |            |         |          |
| SE_CMN_BTN               | 2, 0       | 1, 9    | 242, 240 |
| SE_CMN_BTN_CHECK         | 3, 0       | 2, 9    | 243, 240 |
| SE_CMN_BTN_CHECKOFF      | 3, 0       | 2, 9    | 243, 240 |
| SE_CMN_BTN_CHECKOFF_OFF  | 3          | 2       | 243      |
| SE_CMN_BTN_CHECKOFF_WAIT | 3          | 2       | 243      |
| SE_CMN_BTN_CHECK_OFF     | 3          | 2       | 243      |
| SE_CMN_BTN_CHECK_WAIT    | 3          | 2       | 243      |
| SE_CMN_BTN_OFF           | 2          | 1       | 242      |
| SE_CMN_BTN_WAIT          | 2          | 1       | 242      |
| SE_CMN_CANCEL            | 8, 0       | 5, 9    | 248, 240 |
| SE_CMN_CANCEL_OFF        | 8          | 5       | 248      |
| SE_CMN_CANCEL_WAIT       | 8          | 5       | 248      |
| SE_CMN_DEBUG             | 6          | 13      | 246      |
| SE_CMN_DECIDE            | 5, 0       | 4, 9    | 245, 240 |
| SE_CMN_DECIDE_OFF        | 5          | 4       | 245      |
| SE_CMN_DECIDE_SUB        | 4, 0       | 3, 9    | 244, 240 |
| SE_CMN_DECIDE_SUB_OFF    | 4          | 3       | 244      |
| SE_CMN_DECIDE_SUB_WAIT   | 4          | 3       | 244      |
| SE_CMN_DECIDE_WAIT       | 5          | 4       | 245      |
| SE_CMN_ERROR             | 6          | 13      | 246      |
| SE_CMN_FINISH            | 0, 7       | 9, 12   | 240, 247 |
| SE_CMN_FINISH_OFF        | 7          | 12      | 247      |
| SE_CMN_FINISH_WAIT       | 7          | 12      | 247      |
| SE_CMN_SCROLL            | 10         | 11      | 250      |
| SE_CMN_SCROLL_LIMIT      | 11         | 8       | 251      |
| SE_CMN_SELECT_CURSOR     | 0          | 9       | 240      |
| SE_CMN_SELECT_DPD        | 0          | 9       | 240      |
| SE_CMN_SELECT_TOUCH      | 0          | 9       | 240      |
| SE_CMN_UNSELECT          | 1          | 0       | 241      |
| SE_CMN_WAITING           | 9          | 6       | 249      |

GUESS_SE_MEN_DEBUG_BEGIN.bfseq

| Sequence Name                    | Instrument/s| Program | Wave          |
|----------------------------------|-------------|---------|---------------|
| SEQ_CMN_SE                       | 0           | 0       | 240           |
| SEQ_CMN_SE_WAIT                  | N/A         | N/A     | N/A           |
| SEQ_MEN_CHECKBOX_OFF             | 2           | 3       | 243           |
| SEQ_MEN_CHECKBOX_ON              | 2           | 3       | 243           |
| SEQ_MEN_DECIDE_APP               | 11          | 11      | 259           |
| SEQ_MEN_DECIDE_OVERRAY           | 14          | 16      | 262           |
| SEQ_MEN_DISPLAY_CHANGE           | 1, 9        | 2, 4    | 242, 257      |
| SEQ_MEN_FOLDER_BACK              | 3, 16       | 20, 21  | 248, 264      |
| SEQ_MEN_FOLDER_BTN               | 1, 16       | 2, 21   | 242, 264      |
| SEQ_MEN_RADIO_BTN                | 2           | 3       | 243           |
| SE_MEN_ACCOUNT_SLIDE             | 0           | 0       | 240           |
| SE_MEN_APPEAR_WINDOW_INFO        | 7           | 12      | 255           |
| SE_MEN_APP_REPLACE               | 2           | 3       | 243           |
| SE_MEN_APP_REPLACE_OUTSIDE       | 2           | 3       | 243           |
| SE_MEN_CHECKBOX_OFF              | 0, 2        | 0, 3    | 240, 243      |
| SE_MEN_CHECKBOX_OFF_OFF          | 2           | 3       | 243           |
| SE_MEN_CHECKBOX_ON               | 0, 2        | 0, 3    | 240, 243      |
| SE_MEN_CHECKBOX_ON_OFF           | 2           | 3       | 243           |
| SE_MEN_CUBE_APPEAR               | 13          | 15      | 261           |
| SE_MEN_CUBE_APPEAR_DRC           | 13          | 15      | 261           |
| SE_MEN_CUBE_MOVE                 | 5           | 33      | 253           |
| SE_MEN_CUBE_SELECT               | 0           | 0       | 240           |
| SE_MEN_CUBE_ZOOM                 | 4           | 29      | 252           |
| SE_MEN_DECIDE_APP                | 0, 11       | 0, 11   | 240, 259      |
| SE_MEN_DECIDE_APP_OFF            | 11          | 11      | 259           |
| SE_MEN_DECIDE_OVERRAY            | 0, 14       | 0, 16   | 240, 262      |
| SE_MEN_DECIDE_OVERRAY_OFF        | 14          | 16      | 262           |
| SE_MEN_DIALOG_PRESENT            | 15          | 9       | 263           |
| SE_MEN_DIALOG_SCROLL             | 10          | 10      | 258           |
| SE_MEN_DISPLAY_CHANGE            | 0, 1, 9     | 0, 2, 4 | 240, 242, 257 |
| SE_MEN_DISPLAY_CHANGE_OFF        | 1, 9        | 2, 4    | 242, 257      |
| SE_MEN_DISPLAY_CHANGE_WAIT       | 1, 9        | 2, 4    | 242, 257      |
| SE_MEN_FOLDER_BACK               | 0, 3, 16    | 0,20,21 | 240, 248, 264 |
| SE_MEN_FOLDER_BACK_OFF           | 3, 16       | 20, 21  | 248, 264      |
| SE_MEN_FOLDER_BTN                | 0, 1, 16    | 0, 2,21 | 240, 242, 264 |
| SE_MEN_FOLDER_BTN_OFF            | 1, 16       | 2, 21   | 242, 264      |
| SE_MEN_FOLDER_CLOSE              | 16          | 21      | 264           |
| SE_MEN_FOLDER_OPEN               | 16          | 21      | 264           |
| SE_MEN_FOLDER_THROW              | 2, 16       | 3, 21   | 243, 264      |
| SE_MEN_FOLDER_THROW_BACK         | 2, 16       | 3, 21   | 243, 264      |
| SE_MEN_FOLDER_THROW_BACK_OUTSIDE | 2, 16       | 3, 21   | 243, 264      |
| SE_MEN_ICON_BALLOON              | 6           | 6       | 254           |
| SE_MEN_ICON_FLOAT                | 6           | 6       | 254           |
| SE_MEN_LIST_SLIDE                | 9           | 4       | 257           |
| SE_MEN_MII_GET                   | 12          | 13      | 260           |
| SE_MEN_MII_SELECT                | 8           | 1       | 256           |
| SE_MEN_OPEN_MII_WINDOW           | 6           | 6       | 254           |
| SE_MEN_RADIO_BTN                 | 0, 2        | 0, 3    | 240, 243      |
| SE_MEN_RADIO_BTN_OFF             | 2           | 3       | 243           |
| SE_MEN_SCROLL_ACCOUNT            | 1           | 2       | 242           |
| SE_MEN_SCROLL_ICON               | 0           | 0       | 240           |
| SE_MEN_SCROLL_ICON_LIMIT         | 0           | 0       | 240           |
| SE_MEN_ZOOM_IN                   | 4           | 29      | 252           |
| SE_MEN_ZOOM_OUT                  | 5           | 33      | 253           |
