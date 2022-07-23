import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 1, name: "Ненужная вещь", price: "200" },
    { id: 1, value: 2, name: "Ложка" },
    { id: 2, value: 3, name: "Вилка" },
    { id: 3, value: 4, name: "Тарелка" },
    { id: 4, value: 4, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
    console.log("handle reset");
  };
  const handleIncrement = (id) => {
    const newValue = counters.map((c) =>
      c.id === id ? { ...c, value: c.value + 1 } : c
    );

    setCounters(newValue);
  };

  const handleDecrement = (id) => {
    const newValue = counters.map((c) =>
      c.id === id ? { ...c, value: c.value - 1 } : c
    );

    setCounters(newValue);
  };
  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};
export default CountersList;
