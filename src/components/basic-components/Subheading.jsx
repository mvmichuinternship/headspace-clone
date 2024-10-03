import cn from "clsx"

function Subheading(
    { isIcon,
        text,
        icon,
        className

    }
   
){
return(
    <div className={cn(" font-light text-xs text-center flex gap-x-2",className)}>
        {
            isIcon && (
                <img src={icon} alt="" className="w-4 h-4" />
            )
        }
       <span>{text}</span>
       
    </div>
)
}
export default Subheading;