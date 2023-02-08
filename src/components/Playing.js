import React, { useContext } from 'react'
import AudioPlayer from "react-h5-audio-player"
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from "../Context";

export default function Playing() {
    const { song, handleSetSong } = useContext(Songs)

    function handleClickNext() {
        handleSetSong(song.id + 1)
    }

    function handleClickPrevious() {
        handleSetSong(song.id - 1)
    }

    function handleEnd() {
        handleSetSong(song.id + 1)
    }

    return (
        <div>
            <AudioPlayer showSkipControls={true} showJumpControls={false}
                className='player-music'
                src={song.url}
                onClickNext={handleClickNext}
                onClickPrevious={handleClickPrevious}
                onEnded={handleEnd}
            />
        </div>
    )
}
