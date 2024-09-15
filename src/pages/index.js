import { TbBrandTwitter, TbShare, TbDownload, TbCopy } from "react-icons/tb";
import React, { useRef, useState, useEffect } from "react";
import {
  download,
  fetchData,
  downloadJSON,
  cleanUsername,
  share,
  copyToClipboard
} from "../utils/export";
import ThemeSelector from "../components/themes";

const App = () => {
  const inputRef = useRef();
  const canvasRef = useRef();
  const contentRef = useRef();
  const [loading, setLoading] = useState(false);
  const [username] = useState("ZXINNATTAPAT");
  const [theme] = useState("githubDark");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  fetchData(cleanUsername(username))
  .then((data) => {
      setData(data);
  })
  .catch((err) => {
    console.log(err);
    // setLoading(false);
    setError("I could not check your profile successfully...");
  });

  useEffect(() => {
    if (!data) {
      return;
    }
    draw();
  }, [data, theme]);


  const draw = async () => {
    if (!canvasRef.current || !data) {
      setError("Something went wrong... Check back later.");
      return;
    }
    const { drawContributions } = await import("github-contributions-canvas");

    drawContributions(canvasRef.current, {
      data,
      username: username,
      themeName: theme,
    });
  };

  const _renderGraphs = () => {
    return (
      <div>
        {data !== null && (
          <>
            <canvas ref={canvasRef} />
          </>
        )}
      </div>
    );
  };

  return (
    <div>
        <ThemeSelector currentTheme={theme}/>
        {_renderGraphs()}
    </div>
  );
};

export default App;
