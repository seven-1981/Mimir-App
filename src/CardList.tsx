import { useEffect, useState } from "react";
import {Card, Props} from './Card';

export const CardList = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            const currentData = await fetch(
                'api/cards'
            ).then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Backend HTTP Error: Status ${response.status}`
                    );
                }
                return response.json();
            }).then((currentData) => {
                setData(currentData);
                setError(null);
                console.log(currentData);
            }).catch((err) => {
                setData([]);
                setError(err.message);
            });
        }
        getData();
    }, [])

    return (
        <>
        <p>Here is our card list:</p>
        <ul>
            {
                data && data.map((item: Props) => {
                    return (
                        <Card id={item.id}/>
                    )
                })
            }
        </ul>
            </>

    );
}