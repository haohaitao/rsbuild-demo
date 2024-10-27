import "./App.css";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const App = () => {
  const [cookies] = useCookies(["branch.haoht123.com.branch"]);
  const [branchValue, setBranchValue] = useState<string | undefined>(undefined);

  useEffect(() => {
    const initialBranchValue =
      cookies["branch.haoht123.com.branch"] || process.env.GIT_BRANCH || "";
    setBranchValue(initialBranchValue);
  }, [cookies]);

  return (
    <div className="content">
      <h1>我是{branchValue}分支的需求</h1>
      <div className="app-env">
        当前分支: {branchValue || "Unknown"}
        <a style={{ marginLeft: "10px" }} href="/_branch">
          切换
        </a>
      </div>
    </div>
  );
};

export default App;
