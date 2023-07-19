function MyButton() {
    return(
        <button>I'm a button</button>
    );
}

export default function Myapp() {
    return (
        <div>
            <h1>Olá mundo</h1>
            <img className="avatar"/>
            <MyButton/>
        </div>
    );
}
const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

export default function Profile() {
    return (
        <>
        <h1>{user.name}</h1>
        <img className="avatar" src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
            with:user.imageSize,
            height: user.imageSize
        }}
        />
        </>
    );
}