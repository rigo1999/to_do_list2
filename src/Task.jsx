import React from "react";

const Task = ({ text, category, priority, due_date }) => {
    let color = "";
    if (priority === "High") {
        color = "#EFBC9B";
    } else if (priority === "Medium") {
        color = "#FBF3D5";
    } else {
        color = "#D6DAC8";
    }
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
                backgroundColor: color,
                minWidth: 365,
                borderRadius: "10px",
                marginTop: "8px",

                boxShadow: "0 3px 10px rgba(0, 122, 255, 0.2)",
            }}
        >
            <span>
                {text} (category: {category})
            </span>
            {due_date && <span>Due: {due_date}</span>}
        </div>
    );
};
export default Task;
