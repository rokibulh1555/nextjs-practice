import Link from "next/link";
import Head from "next/head";
import Router from "next/router";

function HomePage(props) {
    return (
        <div>
            <Head>
                <title>Home Page</title>
            </Head>
            <div>Welcome to Homepage</div>

            <span onClick={()=> Router.push('/?counter=1', undefined, {shallow: true})}>Reload</span>

            <br />
            <div>Next stars: {props.stars}</div>

            <img src="/logo.jpg" alt="" />
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const json = await res.json();

    return {
        props: {
            stars: json.stargazers_count
        }
    }
}

export default HomePage;