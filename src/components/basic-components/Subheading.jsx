import cn from "clsx"

function Subheading(
    { isIcon,
        text,
        icon,
        className

    }
   
){
return(
    <div className={cn(" font-light text-xs flex gap-x-2",className)}>
        {
            isIcon && (
                <img src={icon} alt="" />
            )
        }
       <span>{text}</span>
       
    </div>
)
}
export default Subheading;