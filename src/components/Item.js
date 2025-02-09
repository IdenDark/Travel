export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      {/* the check box checks if the value is checked or not and this comes from the item.checked status either true or false */}
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      {/* () => onDeleteItem(item.id) Avoids immediately calling the function. This means call this function when this event happens */}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
