input.onButtonPressed(Button.A, function () {
    num += 1
    // 2是文件夹下歌曲的数量
    num = num % 2
})
input.onButtonPressed(Button.AB, function () {
    mp3Player.execute(
    mp3Player.playType.Stop
    )
})
input.onButtonPressed(Button.B, function () {
    mp3Player.setTracking(num, mp3Player.repeatList.No)
})
let num = 0
mp3Player.MP3SetSerial(SerialPin.P1)
num = 1
basic.forever(function () {
    basic.showNumber(num + 1)
})
