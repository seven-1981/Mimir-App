import {ChangeEvent, useEffect, useState} from "react";
import { Card, CardProps } from './Card';

const { v4: uuidV4 } = require("uuid")

export interface CardListProps {
    onChangeFront: (text: String) => void,
    onChangeBack: (text: String) => void,
    onClickAddButton: () => void
}

export const CardList = ({ onChangeFront, onChangeBack, onClickAddButton }: CardListProps) => {

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
    }, []);

    const eventChangeFront = (event: ChangeEvent<HTMLInputElement>) => {
        onChangeFront(event.target.value);
    }

    const eventChangeBack = (event: ChangeEvent<HTMLInputElement>) => {
        onChangeBack(event.target.value);
    }

    return (
        <>
            <input type='text' onChange={eventChangeFront} placeholder='FrontInput ?'/>
            <input type='text' onChange={eventChangeBack} placeholder='BackInput ?' />
            <button onClick={onClickAddButton}>Add</button>
            <ul>
            {
                data && data.map((item: CardProps) => {
                    return (
                        <Card
                            id={item.id}
                            key={uuidV4()}
                            front={item.front}
                            back={item.back}
                            isUpdateCard={false}
                            onClickDeleteButton={(id: String) => {
                                console.log("Delete Button clicked with id " + id);
                            }}
                            onClickEditButton={(id: String) => {
                                console.log("Edit Button clicked with id " + id);
                            }}
                            onClickUpdateButton={(id: String) => {
                                console.log("Update Button called with id " + id);
                            }}
                        />
                    )
                })
            }
            </ul>
        </>
    );
}