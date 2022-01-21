import React from "react"
import { Celebrations } from "../Celebrations/Celebrations"
import { EmployeeResources } from "../Resources/EmployeeResources"


export const Profile = () => {
    return (
        <div className="main container">

            <div className="welcome">Welcome!</div>

            <body>
                <div className="announcements container">Announcements</div>
                <div className="dates container">
                    <Celebrations />
                </div>
                <div className="resources container">Employee Resources
                    <EmployeeResources />
                </div>


            </body>
        </div>
    )
}