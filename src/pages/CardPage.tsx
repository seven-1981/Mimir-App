import { useParams } from "react-router-dom";
import { CardEdit } from "../components/CardEdit";

export const CardPage = () => {
  let { cardId } = useParams<string>();

  if (!cardId) {
    cardId = ""; // why is this necessary? how to avoid this shit?
  } // react complains about string | undefined here :(

  return (
    <div>
      <CardEdit id={cardId} />
    </div>
  );
};
