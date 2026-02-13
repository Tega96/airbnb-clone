import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";


const Dashboard = () => {
    return (
        <div>
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4">
                <ProfileCard />
            </div>
        </div>
    )
}

export default Dashboard;