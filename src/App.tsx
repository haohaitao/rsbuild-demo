import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [gitBranch, setGitBranch] = useState<string | undefined>(undefined);

  useEffect(() => {
    // 从 Local Storage 中读取 gitBranch
    const storedGitBranch = localStorage.getItem("gitBranch");
    if (storedGitBranch) {
      setGitBranch(storedGitBranch);
    } else {
      // 初始化 gitBranch
      const initialGitBranch = process.env.GIT_BRANCH || "";
      setGitBranch(initialGitBranch);
      localStorage.setItem("gitBranch", initialGitBranch);
    }
  }, []);

  useEffect(() => {
    const storedGitBranch = localStorage.getItem("gitBranch");
    // 当 gitBranch 发生变化时刷新页面
    if (gitBranch && storedGitBranch !== gitBranch) {
      setGitBranch(gitBranch);
      localStorage.setItem("gitBranch", gitBranch);
      window.location.reload();
    }
  }, [gitBranch]);

  return (
    <div className="content">
      <h1>我是{gitBranch}分支的需求</h1>
      <div className="app-env">
        当前分支: {gitBranch || "Unknown"}
        <a href="/_branch">切换</a>
      </div>
    </div>
  );
};

export default App;
