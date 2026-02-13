import { title, PROFILE } from "../utils/data";
import Pills from "./ui/Pills";


const ProfileCard = () => {
    return (
        <div className="">
            {PROFILE.map(p => (
                <div className="flex flex-col w-[378.56px] h-[422.7px] gap-[17.37px]">
                    <div className="flex flex-col gap-[17.37px] h-[299.37px] w-[378.56px]">
                        <div className="w-[379px] h-[255px] rounded-lg bg-[#EDEDED]">
                            <img src={p.src} alt={p.profileName} className="rounded-lg" />
                        </div>
                        <div className="flex flex-row gap-[9.55px] w-[318.1px] h-[27px] rounded-lg">
                            <Pills title={title[0]}/>
                            <Pills title={title[1]} />
                            <Pills title={title[2]}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ProfileCard;