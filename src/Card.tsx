export interface Props {
    id: String
}

export const Card = ({id}: Props) => {

    return (
      <div>
        <label>
            ID: {id}
        </label>
      </div>
    );
}