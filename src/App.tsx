import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

const defaultMarkdown = `
# welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
here is some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
There's also [links](https://www.freecodecamp.com), and
> Block Quotes!
And if you want to get really crazy, even tables:
| Wild Header | Crazy Header | Another Header? |
| --- | --- | --- |
| Your content can | be here, and it | can be here.... |
| And here. | Okay. | I think we get it.
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
- And there are numbered lists too.
1. And last but not least, let's not forget embedded images:
![React Logo w/ Text](https://goo.gl/Umyytc)
`;

const App = () => {
  const [markDownText, setMarkDownText] = useState<string>(defaultMarkdown);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Markdown Previewer</h1>
      <div className="boxes-container">
        <textarea
          name="editor"
          id="editor"
          value={markDownText}
          onChange={(e) => setMarkDownText(e.target.value)}
        ></textarea>
        <div id="preview">
          <ReactMarkdown>{markDownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default App;
