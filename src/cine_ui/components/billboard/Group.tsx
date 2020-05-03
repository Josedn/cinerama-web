import React from "react";
import Movie from "./Movie";

type GroupProps = {
    title: string,
};

const Group: React.FC<GroupProps> = (props: GroupProps) => {
    const { title } = props;
    return (
        <div className="billboard__group">
            <h2 className="billboard__title">{title}</h2>
            <div className="group__list">
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
            </div>
        </div>
    );
};

export default Group;