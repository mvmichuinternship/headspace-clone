import cn from "clsx"


function Heading(
    {isIcon,
    text,
    icon,
    className}
){
return(
    <div className={cn("  flex gap-x-2",className)}>
        {
            isIcon && (
                <img src={icon} alt="" />
            )
        }
       <span>{text}</span>

    </div>
)
}
export default Heading;