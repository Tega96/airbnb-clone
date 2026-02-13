import Bed from "/assets/icons/bed.png"
import Bath from "/assets/icons/bathtub.png"
import People from "/assets/icons/people.png"


const PillCategory = ({bed, bath, people}) => {
    return (
        <div className="grid grid-cols-3 w-[156px] h-[37px] rounded-full border-[1.3px] border-[#E9E9E9] py-[8.68px] px-[20.84px] gap-[11.2px] ">
            <div className="flex flex-row h-[17.04px] gap-[4.82px] items-center justify-center">
                <img src={Bed} alt="rooms" className="w-4 h-4" />
                <p className="text-[#161117] font-normal text-[12.95px] ">{bed}</p>
            </div>
            <div className="flex flex-row h-[17.04px] gap-[4.82px] items-center justify-center">
                <img src={Bath} alt="rooms" className="w-4 h-4" />
                <p className="text-[#161117] font-normal text-[12.95px]">{bath}</p>
            </div>
            <div className="flex flex-row h-[17.04px] gap-[4.82px] items-center justify-center">
                <img src={People} alt="rooms" className="w-4 h-4" />
                <p className="text-[#161117] font-normal text-[12.95px]">{people}</p>
            </div>
        </div>
    )
}
export default PillCategory;