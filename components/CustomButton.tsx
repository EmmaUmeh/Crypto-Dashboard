


interface CustomButtonProps {
    label: string;
  }
// #FE9515
// #FDC401
// #FE9E11
const CustomButton: React.FC<CustomButtonProps> = ({label}) => {
    return(
        <>
            <div>
                <button className="text-nowrap bg-gradient-to-r from-[#FE9515] via-[#FDC401] to-[#FE9E11] text-white py-2 px-7 text-sm rounded-full font-normal">{label}</button>
            </div>
        </>
    )
}

export const BorderCustomButton: React.FC<CustomButtonProps> = ({label}) => {
    return(
        <>
            <div>
                <button className="border-2 border-[#DDD] text-[#555764] py-2 px-7 text-sm rounded-full font-normal">{label}</button>
            </div>
        </>
    )
}

export default CustomButton;

