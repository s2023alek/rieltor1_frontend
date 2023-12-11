import Head from 'next/head'
//import getUserData from "...";

export async function getServerSideProps(context) {
    //const user = getUserData(context.params.id);
    const user = {avatar:"none",bio:"a user bio",name:"a username"};

    return {
        props: {
            user: user
        },
    };
}

export default function User({user}) {
    return (
        <div>
            <Head>
                <title>Страница {user.name}</title>
            </Head>
            <main>
                <img src={user.avatar} alt="User photo"/>
                <h1>{user.name}</h1>
                <p>{user.bio}</p>
            </main>
        </div>
    )
}

