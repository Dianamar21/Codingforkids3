basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() >= 26 && input.temperature() <= 34) {
        basic.showString("T.Normal")
    }
    while (input.temperature() > 34) {
        basic.showString("T. Alta")
        music.playTone(208, music.beat(BeatFraction.Whole))
    }
    while (input.temperature() < 26) {
        basic.showString("T. Baja")
        music.playTone(988, music.beat(BeatFraction.Whole))
    }
})
