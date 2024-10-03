import cn from "clsx"


function Heading(
    {isIcon,
    text,
    icon,
    iconSize,
    className}
){
return(
    <div className={cn("flex gap-x-2",className)}>
        {
            isIcon && (
                <img src={icon} alt="" className={cn("w-9 h-8 text-center self-center", iconSize)}/>
            )
        }
       <span>{text}</span>

    </div>
)
}
export default Heading;