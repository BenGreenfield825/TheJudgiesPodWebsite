async function SoundPlayer(soundName) {
    var player = require('play-sound')(opts = {})
    player.play('Vsauce.mp3', function(err){
        if (err) throw err
      })
}

export default SoundPlayer;