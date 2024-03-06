const TitleShadow = ({text,shadowText}) => {
    return (
        <div className="flex items-center relative px-3 mx-2">
            <h2 className="text-[40px] uppercase font-bold opacity-[0.03] absolute left-0 top-[0] translate-y-[-25%] translate-x-[-20px]">{shadowText ?? text}</h2>
            <h2 className="relative text-blue-400 font-bold text-[40px]">{text}</h2>
        </div>
    );
}

export default TitleShadow;