import React, { useEffect, useState } from 'react';

export default function DataToRender({ data }) {
    return (
        <>
            <div className="container">
                <img src={data.results[0].picture.large} />
                <div>
                    First name: {data.results[0].name.first}
                </div>
                <div>
                    Last name: {data.results[0].name.last}
                </div>
                <div>
                    Live in: <span>{data.results[0].location.city}</span>
                </div>
                <div>
                    Username: <span>{data.results[0].login.username}</span>
                </div>
                <div>
                    Email: <span>{data.results[0].email}</span>
                </div>

            </div>
        </>
    );
}
