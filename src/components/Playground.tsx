"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";

interface Props {
  code: string;
}

export const Playground = ({ code: defaultCode }: Props) => {
  const [code, setCode] = useState(defaultCode);

  function handleOnChange(value?: string) {
    console.log("value", value);
    setCode(value || "");
  }

  return (
    <div className="grid grid-cols-2">
      <div className="bg-[#1e1e1e]">
        <Editor
          className="h-screen"
          defaultLanguage="javascript"
          defaultValue={code.trim()}
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: {
              enabled: false,
            },
            contextmenu: false,
          }}
          onChange={handleOnChange}
        />
      </div>
      <div className="text-black">{"PREVIEW"}</div>
    </div>
  );
};
