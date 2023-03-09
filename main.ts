let go_b = 0
radio.onReceivedNumber(function (receivedNumber) {
    pins.analogSetPeriod(AnalogPin.P0, 0)
    basic.pause(500)
    pins.analogSetPeriod(AnalogPin.P0, 180)
    basic.pause(500)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    go_b = 0
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    go_b = 1
})
basic.forever(function () {
    if (go_b == 1) {
        servos.P0.setAngle(0)
        basic.pause(500)
        servos.P0.setAngle(180)
        basic.pause(500)
    }
    if (go_b == 0) {
        servos.P0.setAngle(0)
    }
})
