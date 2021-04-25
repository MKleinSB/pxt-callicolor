let Richtung2 = 0
let PunkteB = 0
let PunkteA = 0
let Position = 0
let SpielerB = 0
let SpielerA = 0
let Verzögerung = 0

Verzögerung = 200
SpielerA = 9
SpielerB = 3
Position = SpielerB
PunkteA = 0
PunkteB = 0
Richtung2 = 1
CalliColor.ShowColorOnPixelbright(CalliColor.CalliColorNumberPicker(0x000000), Position)
basic.forever(function () {
    basic.pause(Verzögerung)
    CalliColor.ShowColorOnPixelbright(CalliColor.CalliColorNumberPicker(0x00000), Position)
    Position += Richtung2
    CalliColor.ShowRainbowColorOnPixelbright(Position)
    if (Position > 9 || Position < 3) {
        Richtung2 = Richtung2 * -1
    }
})

