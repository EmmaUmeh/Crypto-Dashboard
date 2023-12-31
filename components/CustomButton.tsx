


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
                <button className="bg-gradient-to-r from-[#FE9515] via-[#FDC401] to-[#FE9E11] text-white py-2 px-4 rounded-md font-bold">{label}</button>
            </div>
        </>
    )
}

export default CustomButton;