import Item from "./Item";

function Menu({ items }) {
  return (
    <div className="menu">
      {items.map((item) => {
        return <Item {...item} key={item.id} />;
      })}
    </div>
  );
}

export default Menu;
