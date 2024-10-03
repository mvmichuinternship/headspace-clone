import cn from "clsx"


function Heading(
    {isIcon,
    text,
    icon,
    className}
){
return(
    <div className={cn("flex gap-x-2",className)}>
        {
            isIcon && (
                <img src={icon} alt="" className="w-9 h-8 text-center self-center"/>
            )
        }
       <span>{text}</span>

    </div>
)
}
export default Heading;