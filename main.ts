
       
    
   
       //Never Gonna Give You Up
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function() {
    music.stopMelody(MelodyStopOptions.All)
    music.playMelody("D E G E B - B A - D E G E A - A G - D E G E B - A F# - D - D A - G", 400);
})
//Nokia
input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function() {
    music.stopMelody(MelodyStopOptions.All)
    music.playMelody("E6 D6 F#5 - G#5 - C#6 B5 D5 - E5 - B5 A5 C#5 - E5 - A5", 450);
})
//SuperMario
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function() {
    music.playMelody("E4 E4 - E4 - C4 E4 - G4 - - - G3 - - - C4 - - G3 - - E3 - - A3 - B3 - Bb3 A3 - G3 E4 G4 A4 - F4 G4 - E4 - C4 D4 B3",400);
})
//