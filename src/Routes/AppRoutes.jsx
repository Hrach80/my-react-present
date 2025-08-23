import { Route, Routes } from "react-router-dom";
import KarucPages from "../Components/Pages/KarucPages/KarucPages";
import Xoroch from "../Components/Pages/XorochPages/Xoroch";
import Pakan from "../Components/Pages/Pakan/Pakan";
import Aryun from "../Components/Pages/Aryun/Aryun";
import Mkan from "../Components/Pages/Mkan/Mkan";
import Hivand from "../Components/Pages/Hivand/Hivand";
const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<KarucPages />} />
                <Route path="/chambers-septa" element={<Xoroch />} />
                <Route path="/valves" element={<Pakan />} />
                <Route path="/circulation" element={<Aryun />} />
                <Route path="/myocardium" element={<Mkan />} />
                <Route path="/prevention" element={<Hivand/>} />
            </Routes>
        </div>
    )
}
export default AppRoutes;