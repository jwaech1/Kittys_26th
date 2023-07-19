import Button from '@mui/material/Button';
import {useState} from "react";
import Grid from '@mui/material/Grid';

function CounterApp() {
    
        const [count, setCount] = useState(0);

        const increaseValue = () => {
            console.log(count)
            setCount(count + 1);
        }
        const lowerValue = () => {
            console.log(count)
            setCount(count - 1);
        }

        return (
            <div>           
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Button variant="contained" onClick={increaseValue}>Increase Counter</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button variant="contained" onClick={lowerValue}>Decrease Counter</Button>
                    </Grid>
                    <Grid item xs={12} md={5}></Grid>
                    <Grid item xs={12} md={6}>
                        {count}
                    </Grid>                    
                </Grid>     
                <br></br>
            </div>

        );
    
}

export { CounterApp };


