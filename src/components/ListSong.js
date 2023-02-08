import React, { useContext, useState, useEffect } from "react";
import { Songs } from "../Context";

export default function ListSong() {
    const { DataSong, handleSetSong, song } = useContext(Songs)

    console.log(DataSong)
    const [idSong, setIdSong] = useState(0)

    function handlePlaySong(idSong) {
        setIdSong(idSong)
        handleSetSong(idSong)
    }

    useEffect(() => {
        setIdSong(song.id)
    }, [song])


    return (
        <div div className="col-span-2 bg-green-700 overflow-y-scroll" >
            <table className="table-auto w-full text-white">
                <thead className="h-12">
                    <th className="w-[10%]">#</th>
                    <th className="text-left">Title</th>
                    <th className="w-[10%]">Author</th>
                    <th className="w-[10%]"><i className="fa fa-download" /></th>
                </thead>
                <tbody>
                    {DataSong.map((song, index) => (
                        <tr key={index}
                            className={` h-12 hover:bg-slate-600 ${idSong === song.id && 'bg-slate-600 text-teal-400'}`}
                            onClick={() => handlePlaySong(song.id)}
                        >
                            <td className="text-center">{index + 1}</td>
                            <td>{song.name}</td>
                            <td className="text-center">{song.author}</td>
                            <td className="text-center">
                                <a href={song.url}>
                                    <button><i className="fa fa-download" /></button>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}