radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.No)
    music.playTone(880, music.beat(BeatFraction.Sixteenth))
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
radio.setGroup(1)
radio.setTransmitPower(0)
basic.forever(function () {
    radio.sendNumber(0)
    basic.pause(2000)
})
