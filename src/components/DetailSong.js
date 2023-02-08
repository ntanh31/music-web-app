import React, { useContext } from "react";
import { Songs } from "../Context";

export default function DetailSong() {
    const { song } = useContext(Songs)
    return (
        <div className="col-span-1">
            <div className="mt-5">
                <h2 className="text-white text-center">Now playing</h2>
                <h2 className="text-black text-2xl text-center">{song.name}</h2>
            </div>
            <div className="w-[240px] m-auto mt-10">
                <img className="w-full" src={song.links.images[0].url} alt="avatar" />
            </div>
            <div className="flex justify-evenly items-center mt-10">
                <img className="w-[70px] rounded-full" src={song.links.images[1].url} alt="avatar" />
                <span className="text-xl text-white">{song.author}</span>
            </div>
        </div>
    )
}