import Button from '@mui/material/Button';

function Home() {
    const centre = {
        margin: '0',
        position: 'absolute',
        top: '70%',
        left: '45%',
    };

    return (
        <div style={centre}>
            <Button variant="contained">Connect Dapp</Button>
        </div>
    );
}
export default Home;