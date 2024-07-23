import { Avatar } from "antd";
import { CardData } from "../../../interfaces/ICard";
import "./Card.scss";

const Card: React.FC<{ data: CardData }> = ({ data }: { data: CardData }) => {
  return (
    <div className="card-column">
      <div className="card-column-title">
        <span>{data.title}</span>
        <span>{data.count}</span>
      </div>
      <div className="card-column-cards">
        {data.items.map((card) => (
          <div className="card">
            <span className="card-title">{card.title}</span>
            <span className="card-info">
              <b> Close Date</b>: {card.closeDate}
            </span>
            <Avatar src={card.avatar} />
          </div>
        ))}
      </div>
      <div className="card-column-total">
        <span>
          <b>Total</b>: ${data.total}
        </span>
      </div>
    </div>
  );
};

export default Card;
