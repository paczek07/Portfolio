import React from 'react'

const card = ({ projectName }) => {
    return (
        <div id="app" class="h-60 rounded-lg shadow-lg flex transform transition duration-600 hover:scale-105">
            <img class="hidden sm:block  w-60 h-full rounded-l-lg" src="https://bit.ly/2EApSiC" alt="Room" />
            <div class="flex flex-col items-start justify-around p-4">
                <h3 class="text-md">{projectName}</h3>
                <h3 class="text-md">This project consist about the following things blaha yug utfdtxh ytre vyg </h3>
                <h3 class="text-sm">Languages Used: Java, MySQL, Junit</h3>
            </div>
        </div>
    )
}

export default card