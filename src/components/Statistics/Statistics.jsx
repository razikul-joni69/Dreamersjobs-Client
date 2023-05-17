import React from "react";
import { Container } from "react-bootstrap";
import {
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const Statistics = () => {
    const data = [
        {
            id: 1,
            name: "Assignment 01",
            mark: 30,
            submittedOnMark: 30,
        },
        {
            id: 2,
            name: "Assignment 02",
            mark: 28,
            submittedOnMark: 30,
        },
        {
            id: 3,
            name: "Assignment 03",
            mark: 30,
            submittedOnMark: 30,
        },
        {
            id: 4,
            name: "Assignment 04",
            mark: 30,
            submittedOnMark: 30,
        },
        {
            id: 5,
            name: "Assignment 05",
            mark: 29,
            submittedOnMark: 30,
        },
    ];
    return (
        <div>
            <Container>
                <h1 className="text-center mt-5 mb-5">Assignment Marks</h1>
                <ResponsiveContainer width="100%" height={600}>
                    <ComposedChart
                        width={600}
                        height={500}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="mark" barSize={20} fill="#413ea0" />
                        <Line
                            type="monotone"
                            dataKey="submittedOnMark"
                            stroke="#ff7300"
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </Container>
        </div>
    );
};

export default Statistics;
