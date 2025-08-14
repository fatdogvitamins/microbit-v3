function H0 (num: number) {
    WiFiBit.executeHttpMethod(
    HttpMethod.GET,
    "edge.com",
    80,
    "https://makecode.microbit.org/#editor"
    )
    WiFiBit.executeHttpMethod(
    HttpMethod.GET,
    "edge.com",
    80,
    WiFiBit.readBlynkPinValue(DS, "14dabda3551b4dd5ab46464af582f7d2")
    )
    return num
}
let num = 0
let TY = 0
let ET = ""
let DS = ""
basic.showArrow(ArrowNames.East)
basic.showLeds(`
    . . . # .
    . . . . #
    . # # # #
    . . . . #
    . . . # .
    `)
basic.showLeds(`
    . . . . #
    . . . . .
    . . # # #
    . . . . .
    . . . . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . # #
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . #
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    WiFiBit.connectToWiFiBit()
    WiFiBit.connectToWiFiNetwork(esp8266.readBlynk(ET, ET), esp8266.readBlynk(ET, ET))
    if (ET == "0") {
        ET += 1
    }
    DS += pins.analogReadPin(AnalogPin.P0)
    ET += ET
    H0(1)
    TY = H0(num)
    num = pins.digitalReadPin(num) + pins.analogReadPin(num)
    pins.digitalWritePin(DigitalPin.P0, pins.digitalReadPin(DigitalPin.P0))
    pins.digitalWritePin(DigitalPin.P0, 1)
})
basic.forever(function () {
    servos.P0.run(10000000)
})
