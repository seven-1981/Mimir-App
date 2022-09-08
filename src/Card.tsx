export interface CardProps {
    id: String,
    front: String,
    back: String,
    onClickEditButton: (id: String) => void,
    onClickDeleteButton: (id: String) => void,
    isUpdateCard: boolean,
    onClickUpdateButton: (id: String) => void
}

export const Card = ({ id, front, back, onClickEditButton, onClickDeleteButton, isUpdateCard, onClickUpdateButton }: CardProps) => {

    if (isUpdateCard) {
        return (
            <div>
                {front} {back} <button onClick={() => onClickUpdateButton(id)}>Update</button>
            </div>
        )
    } else {
        return (
            <div>
                {front} {back} <button onClick={() => onClickEditButton(id)}>Edit</button> <button onClick={() => onClickDeleteButton(id)}>Delete</button>
            </div>
        )
    }
}