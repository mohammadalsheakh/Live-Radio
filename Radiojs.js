class ScreenHeight{
    constructor(){
        document.body.style.height = screen.height + `px`
        if (screen.width<400) {
            document.getElementById(`logoimage`).style.width = 250 + `px`
        }
    }
}

onload = new ScreenHeight()

class AudioPlayer{
    constructor(){
        this.radio_file = document.getElementById(`radiofile`)
        this.play_pause_button = document.getElementById(`play_pause`)
        this.radio_name = document.getElementById(`songname`)
        this.go_before = document.getElementById(`gobefore`)
        this.go_after = document.getElementById(`goafter`)
        this.isplaying = false
        this.play_pause_button.addEventListener(`click`,() =>{
            this.playing()
        })
        this.raido_number = [`Radio Al-Quds Voice`, `Radio Holy Quran`,`Radio Raya FM`,`Radio Hala`,`Al Fajr Radio`,`Al Borj Radio`,`Al Huda Radio`,`Al Najah Voice Radio`]
        this.radio_src = [`http://live.alboraq.ps:8000/;stream.mp3`,
        `http://www.quran-radio.org:8080/;stream.mp3`,
        `http://live.raya.ps:8064/;stream.mp3`,
        `http://rs.hadara.ps:8010/;stream.mp3&13202692901&duration=99999&id=scplayer&autostart=true`,
        `http://rs.hadara.ps:8004/;stream.mp3&13202692901&duration=99999&id=scplayer&autostart=true`,
        `http://82.213.26.67:8000/;stream.mp3&13202692901&duration=99999&id=scplayer&autostart=true`,
        `http://46.43.64.50:8024/stream.ogg`,
        `http://rs.hadara.ps:8550/stream/;stream.mp3&13202692901&duration=99999&id=scplayer&autostart=true`]
        this.counter = 0
        
        this.go_after.addEventListener(`click`,() =>{
            this.counter++
            if (this.counter == 8) {
                this.counter = 0
            }
            localStorage.setItem(`saveradio`, this.counter)
            this.nameAndSrc()
            this.isplaying = false
            this.playing()
        })
        this.go_before.addEventListener(`click`, () => {
            this.counter -= 1
            if (this.counter == -1) {
                this.counter = 7
            }
            localStorage.setItem(`saveradio`, this.counter)
            this.nameAndSrc()
            this.isplaying = false
            this.playing()
        })
        this.nameAndSrc()
    }
    playing(){
        if (this.isplaying == false) {
            this.radio_file.play()
            this.isplaying = true
            this.play_pause_button.setAttribute(`src`, `./img/a4.png`)
        }
        else{
            this.isplaying = false
            this.play_pause_button.setAttribute(`src`, `./img/a1.png`) 
            this.radio_file.pause()
        }
    }
    nameAndSrc(){
        if (localStorage.getItem(`saveradio`) != null) {
            this.counter = localStorage.getItem(`saveradio`)
        }
        console.log(this.counter);
        this.radio_file.src = this.radio_src[this.counter]
        this.radio_name.innerHTML = this.raido_number[this.counter]
    }
}
onload = new AudioPlayer()


class VolumeControll{
    constructor(){
        this.song_file = document.getElementById(`radiofile`)
        this.song_file.volume= 50/100
        document.getElementById(`volume_range`).onchange = () =>{
            this.song_file.volume = document.getElementById(`volume_range`).value/100
        }
        document.getElementById(`speed_range`).onchange = () =>{
            this.song_file.playbackRate = document.getElementById(`speed_range`).value/100
        }
    }
}
onload = new VolumeControll()

class ColorChanger{
    constructor(){
        
        document.getElementById(`color1`).onclick = () =>{
            document.body.classList.remove(`colore2`,`colore3`,`colore4`)
            document.body.classList.add(`colore1`)
            localStorage.setItem(`savedColor`,document.body.className)
        }
        document.getElementById(`color2`).onclick = () => {
            document.body.classList.remove(`colore1`, `colore3`, `colore4`)
            document.body.classList.add(`colore2`)
            localStorage.setItem(`savedColor`, document.body.className)

            
        }
        document.getElementById(`color3`).onclick = () => {
            document.body.classList.remove(`colore1`, `colore2`, `colore4`)
            document.body.classList.add(`colore3`)
            localStorage.setItem(`savedColor`, document.body.className)

        }
        document.getElementById(`color4`).onclick = () => {
            document.body.classList.remove(`colore1`, `colore2`, `colore3`)
            document.body.classList.add(`colore4`)
            localStorage.setItem(`savedColor`, document.body.className)
        }
    }
}

onload = new ColorChanger()
onload = () => {
    document.body.classList.add(localStorage.getItem(`savedColor`))
}