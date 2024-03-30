'use client'

import { useState } from "react"
import avatarImg from 'app/avatar.jpg'
import logoImg from 'app/logo.jpg'
import Image from "next/image"

export default function Avatar() {
    const [isLogo, setIsLogo] = useState(false)
    return (
        <div
            className="flex justify-center items-center group relative w-fit aspect-square p-0 m-0 cursor-pointer mx-auto"
            onClick={() => setIsLogo((v) => !v)}
        >
            <Image
                src={isLogo ? logoImg :avatarImg}
                height={256}
                width={256}
                alt="fiezt avatar"
                aria-label="fiezt avatar"
                className="border-2 border-mine-shaft-200 dark:border-mine-shaft-700 min-w-32 min-h-32 rounded-full"
                priority
            />
            <div className="scale-0 group-hover:scale-100 w-fit flex absolute bottom-0 h-fit group-hover:w-fit bg-mine-shaft-800 bg-opacity-80 backdrop-blur-sm backdrop-filter justify-center rounded-md border border-mine-shaft-600 px-4 py-2 transition-all">
                <span>{isLogo ? "Fiezt" : "Tien Dat Hoang"}</span>
            </div>
        </div>
    )
}
