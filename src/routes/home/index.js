import { h } from 'preact';
import { useState } from 'preact/hooks'
import style from './style.css';

const Home = () => {
	const [ link, setLink ] = useState("");
	const shortenLink = () => {
		/**
		 * For now let's not use axios or some other library.
		 * Use fetch method until app becomes complex.
		 * PS: let's keep it little tricky and funny :P
		 */
	}
	return <div class={style.home}>
		<input 
			placeholder="Paste your ugly link here"
			value={ link }
			onChange={ e => setLink(e.target.value)}
		/>
		<button onClick={shortenLink}>Shorten Link</button>
	</div>
};

export default Home;
