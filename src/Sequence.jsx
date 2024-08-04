import { useEffect, useState } from "react";

export default function Sequence() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const url1 = "https://jsonplaceholder.typicode.com/todos";
    const url2 = "https://jsonplaceholder.typicode.com/users";

    try {
      const response1 = await fetch(url1);
      const data1 = await response1.json();

      const response2 = await fetch(url2);
      const data2 = await response2.json();

      setData([...data1, ...data2]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  console.log(data);

  return (
    <div className="App">
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} - {item.title || item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
