import { Card } from "./Card"
import { useEffect, useState } from "react"

export const Home = () => {

    const [userList, setUserList] = useState([]);
    useEffect(() => {

        fetch('http://localhost:7000/awesome/applicant')
            .then((response) => (response.json()))
            .then((data) => setUserList(data))

    }, [])



    return (
        <div className="container">
            {userList && userList.map((item) => {

                return (
                    <Card listItem={item} />
                )
            })
            }

        </div>
    )
}