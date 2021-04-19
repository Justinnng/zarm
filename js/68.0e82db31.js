(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{709:function(n,e,l){"use strict";l.r(e),e.default="# Slider \u6ed1\u52a8\u8f93\u5165\u6761\n\n## \u57fa\u672c\u7528\u6cd5\n\n```jsx\nimport { useState } from 'react';\nimport { Cell, Slider } from 'zarm';\n\nconst Demo = () => {\n  const [value, setValue] = useState(0);\n\n  return (\n    <>\n      <Cell title=\"\u666e\u901a\">\n        <Slider value={value} onChange={setValue} />\n      </Cell>\n\n      <Cell title=\"\u8bbe\u7f6e\u9ed8\u8ba4\u503c\">\n        <Slider defaultValue={20} />\n      </Cell>\n\n      <Cell title=\"\u8bbe\u7f6e\u4e0a\u4e0b\u9650\">\n        <Slider min={-100} max={100} defaultValue={0} />\n      </Cell>\n\n      <Cell title=\"\u7981\u7528\u72b6\u6001\">\n        <Slider disabled defaultValue={20} />\n      </Cell>\n    </>\n  );\n};\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n## \u523b\u5ea6\u4e0e\u6807\u8bb0\n\n```jsx\nimport { Cell, Slider } from 'zarm';\n\nconst MARKS = {\n  0: '0\xb0C',\n  26: '26\xb0C',\n  65: '65\xb0C',\n  100: '100\xb0C',\n};\n\nReactDOM.render(\n  <>\n    <Cell title=\"\u663e\u793a\u523b\u5ea6\">\n      <Slider marks={MARKS} />\n    </Cell>\n\n    <Cell title=\"\u663e\u793a\u6807\u8bb0\" style={{ paddingBottom: 15 }}>\n      <Slider showMark marks={MARKS} />\n    </Cell>\n\n    <Cell title=\"\u6b65\u957f\u4e3a10\" style={{ paddingBottom: 15 }}>\n      <Slider showMark step={10} marks={MARKS} />\n    </Cell>\n\n    <Cell title=\"\u6b65\u957f\u4e3anull\" style={{ paddingBottom: 15 }}>\n      <Slider showMark step={null} marks={MARKS} />\n    </Cell>\n  </>,\n  mountNode,\n);\n```\n\n## \u65b9\u5411\n\n```jsx\nimport { Cell, Slider } from 'zarm';\n\nconst MARKS = {\n  0: '0\xb0C',\n  26: '26\xb0C',\n  65: '65\xb0C',\n  100: '100\xb0C',\n};\n\nReactDOM.render(\n  <Cell title=\"\u5782\u76f4\u65b9\u5411\" style={{ padding: '15px 0' }}>\n    <div style={{ height: 200 }}>\n      <Slider vertical showMark marks={MARKS} />\n    </div>\n  </Cell>,\n  mountNode,\n);\n```\n\n## API\n\n| \u5c5e\u6027         | \u7c7b\u578b                               | \u9ed8\u8ba4\u503c | \u8bf4\u660e                     |\n| :----------- | :--------------------------------- | :----- | :----------------------- |\n| value        | number                             | -      | \u503c                       |\n| defaultValue | number                             | -      | \u521d\u59cb\u503c                   |\n| min          | number                             | 0      | \u6700\u5c0f\u503c                   |\n| max          | number                             | 100    | \u6700\u5927\u503c                   |\n| disabled     | boolean                            | false  | \u662f\u5426\u7981\u7528                 |\n| step         | number                             | 1      | \u6b65\u957f                     |\n| vertical     | boolean                            | false  | \u662f\u5426\u4e3a\u7eb5\u5411               |\n| showMark     | boolean                            | false  | \u662f\u5426\u663e\u793a\u6807\u8bb0\u523b\u5ea6         |\n| marks        | { [key: number]: React.ReactNode } | {}     | \u81ea\u5b9a\u4e49\u6807\u8bb0\u523b\u5ea6\u7684\u6e32\u67d3\u5c55\u793a |\n| onChange     | (value?: number) => void           | -      | \u503c\u53d8\u5316\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570   |\n"}}]);
//# sourceMappingURL=68.0e82db31.js.map