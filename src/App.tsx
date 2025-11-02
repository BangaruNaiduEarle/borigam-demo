
import {  Routes, Route,  } from "react-router-dom";
import { HomePage } from "./screens/HomePage";
import { CourseInnerPage } from "./screens/CourseInnerPage";



export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course" element={<CourseInnerPage />} />
        </Routes>
    )
}
