import React, { useRef, useState } from 'react';

export function TempPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [volume, setVolume] = useState(1);
    const [currentTrack, setCurrentTrack] = useState(1);
    const tracks = [
        "http://mds.kallisto.ru/hell/2020/02/Devid_Keller_-_Vosstanie_peshehodov.mp3",
        'http://mds.kallisto.ru/hell/2020/02/Devid_Keller_-_Vosstanie_peshehodov.mp3',
        'http://mds.kallisto.ru/hell/2020/02/Devid_Keller_-_Vosstanie_peshehodov.mp3',
    ];

    function play() {

        if (audioRef.current?.paused) {
            audioRef.current.play();
        } else {
            audioRef.current?.pause();
        }
    }

    function changeVolume(newVolume: number) {
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
            setVolume(newVolume);
        }
    }

    function switchToPreviousTrack() {
        if (currentTrack > 0) {
            setCurrentTrack(currentTrack - 1);
            audioRef.current!.src = tracks[currentTrack - 1];
            play();
        }
    }

    function switchToNextTrack() {
        if (currentTrack < tracks.length - 1) {
            setCurrentTrack(currentTrack + 1);
            audioRef.current!.src = tracks[currentTrack + 1];
            play();
        }
    }


    return (
        <div>
            <audio ref={audioRef} src={tracks[currentTrack]} />
            <button onClick={play}>Play</button>
            <button onClick={switchToPreviousTrack}>Previous</button>
            <button onClick={switchToNextTrack}>Next</button>
            <br />
            <label htmlFor="volume-range">Volume:</label>
            <input
                id="volume-range"
                type="range"

                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(event) => changeVolume(event.target.valueAsNumber)}
            />
        </div>
    );
}
