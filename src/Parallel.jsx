import { useEffect, useState } from "react";

export default function Parallel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const url1 = "https://jsonplaceholder.typicode.com/todos";
    const url2 = "https://jsonplaceholder.typicode.com/users";

    try {
      const responses = await Promise.all([fetch(url1), fetch(url2)]);

      const data1 = await responses[0].json();
      const data2 = await responses[1].json();
      setData([...data1, ...data2]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

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
