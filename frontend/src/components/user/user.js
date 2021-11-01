import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        width: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: 'blue'
    },
    username: {
        padding: 0,
        margin: 0,
    }
})

export default function User({user}) {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <img src={'http://127.0.0.1:8000'+user.profile.image} alt='user avatar' />
            <h4 className={classes.username}>{user.username}</h4>
        </div>
    )
};