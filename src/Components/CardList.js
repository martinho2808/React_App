import Card from "./Card";
export default function CardList(props) {
  const sorted = props.list.sort((a, b) => b.votes - a.votes);
  return (
    <div>
      {sorted.map((element, i) => {
        console.log(element);
        return (
          <Card
            index={i}
            key={i}
            name={element.name}
            votes={element.votes}
            deleteItem={props.deleteItem}
            downvote={props.downvote}
            upvote={props.upvote}
          />
        );
      })}
    </div>
  );
}

// See if you can turn this into a class based component
