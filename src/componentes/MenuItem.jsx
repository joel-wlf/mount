import { Grid, Button, Divider } from '@geist-ui/core'


function MenuItem(props) {
    return (
        <>
            {props.child != 1 && <Divider className='fadein' style={{width:'100%', animationDelay: `${props.child * 50}ms`}} />}
            <Grid xs={24} direction='column'>
                <p className='fadein menu--item' style={{animationDelay: `${props.child * 50}ms`}}>{props.text}</p>        
            </Grid>
        </>

    )
}

export default MenuItem