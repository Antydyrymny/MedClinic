import useLocalStorageState from 'src/hooks/useLocalStorageState';
import AboutCss from './About.module.css';

export default function About() {
    const [state, setState] = useLocalStorageState('about', 0);

    return (
        <>
            <div>{state}</div>
            <button onClick={() => setState(state + 1)}>Click</button>
            <section>About</section>
        </>
    );
}
