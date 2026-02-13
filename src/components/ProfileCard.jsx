import { category, PROFILE } from "../utils/data";
import Pills from "./ui/Pills";
import PillCategory from "./ui/PillCategory";
import STAR from "/assets/icons/Star.png"

const ProfileCard = () => {
    return (
        <div className="">
            {PROFILE.map((p) => (
                <div className="flex flex-col w-[378.56px] h-[422.7px] gap-[17.37px]" key={p.id}>
                    <div className="flex flex-col gap-[17.37px] h-[299.37px] w-[378.56px]">
                        <div className="w-[379px] h-[255px] rounded-lg bg-[#EDEDED]">
                            <img src={p.src} alt={p.profileName} className="rounded-lg" />
                        </div>
                        <div className="flex flex-row gap-[9.55px] w-[363px] h-[27px]">
                            <Pills title={category[0]}/>
                            <Pills title={category[1]} />
                            <Pills title={category[2]}/>
                        </div>
                    </div>
                    <div className="flex flex-row w-[378.56px] h-[51.6px] justify-between">
                        <div className="flex flex-col h-[51.6px]">
                            <h3 className="h-[28px] font-bold text-[22px] font-[quicksand] text-[#161117]">{p.profileName}</h3>
                            <p className="h-[21px] text-medium text-[17px] text-[#161117]">{p.location}</p>
                        </div>
                        <div className="flex flex-row m-2 align-right w-4 h-4">
                            <img src={STAR} alt="Rating star" className="w-4 h-4" />
                            <p className="font-bold text-[12px] ">{p.rating}</p>
                        </div>
                    </div>

                    <div className="flex w-full h-[37px] justify-between">
                        <PillCategory bed={p.bed} bath={p.bath} people={p.people} />
                        <p className="font-semibold text-[22px]">${p.price}<span className="text-[#161117] font-semibold text-[14px]">/n</span></p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ProfileCard;