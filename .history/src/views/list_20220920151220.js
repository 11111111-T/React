// react如何完成列表的渲染
// 技术方法map
// 来个列表
"use strict";
var a = 1;
a = 2;
const songs = [
  { id: 1, name: "痴心绝对" },
  { id: 2, name: "像我这样的人" },
  { id: 3, name: "南山南" },
];

function App() {
  return (
    <div>
      <ul>
        {songs.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
