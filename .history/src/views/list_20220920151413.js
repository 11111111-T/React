"use strict";
// react如何完成列表的渲染
// 技术方法map 重复渲染的是哪个模板 就return 谁
// 注意事项:



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
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
