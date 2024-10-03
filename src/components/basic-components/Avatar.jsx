import React from "react"
import cn from 'clsx'

function Avatar({imgSrc, imgAlt, className}){
    return(
        <>
            <img src={imgSrc} alt={imgAlt} className={cn("w-min", className)} />
        </>
    )
}
export default Avatar;