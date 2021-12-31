import { useState } from "preact/hooks";
import style from "./style.css";
const API_URL = "https://eraaxit-url-shortner.herokuapp.com"
const Home = () => {
  const [link, setLink] = useState("");
  const [shortLink, setShortLink] = useState("");

  const shortenLink = async () => {
	  if(shortLink===""){
    let data = {
      longURL: link,
    };
    const r = await fetch(`${API_URL}/api/`, {
      //the api url needs to go in env variables
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await r.json();
	console.log(json);

    setShortLink(`/${json.shortURL}`);}
	else{
		location.reload();
	}
  };

  const copy = ()=>{
	  navigator.clipboard.writeText(shortLink);
  }

  return (
    <div class={style.home}>
      <div class={style.long_link}><strong>https://</strong>
      <input
        placeholder="Paste your ugly link here"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        required
      /></div>
      <button onClick={shortenLink} class={style.create_button}>
        {shortLink === "" ? "Shorten Link" : "Create Another"}
      </button>
      {shortLink === "" ? (
        <p></p>
      ) : (
        <div class={style.short_link}>
          <strong>{shortLink}</strong>
          <button class={style.copy_button} onClick={copy}>Copy</button>
        </div>
      )}
    </div>
  );
};

export default Home;
