import { ListItem, ListItemText } from '@mui/material';
import './App.css';
import "./styles.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function ListApp() {


    const [items, setItems] = useState(["Item ", "Item ", "Item "]);
    const [inputValue, setInputValue] = useState('');
    const itemsList = items.map(item => <li>{item}</li>)


    useEffect(() => {
        console.log(items)
    }, [items])

    const addItem = () => {
        let newItem = inputValue;
        setItems([...items, newItem + ' ']);
        setInputValue('');
    }
    const addToList = () => {
        addItem();
    }
    const removeFromList = () => {
        setItems((currItems) => currItems.slice(0, -1))
    }


    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={3}>
                    <Paper
                        component="form"
                        sx={{ p: '2px 3px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                        <TextField
                            id="Name"
                            label="New Item"
                            value={inputValue} onChange={(event) => setInputValue(event.target.value)}
                            variant="standard"
                            size="huge"
                        />
                    </Paper>
                </Grid>

            </Grid>


            <p></p>
            <Grid container spacing={2}>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={3}>
                    <Button variant="contained" color="success" onClick={addToList}> Add to List</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button variant="contained" color="error" onClick={removeFromList}>Remove from List</Button>
                </Grid>
            </Grid>
            <br></br>
            <Grid container spacing={2}>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={6}>
                    <Paper
                        component="form"
                        sx={{ p: '2px 3px', display: 'flex', alignItems: 'center' }}
                    >
                        <List>
                            <ListItem>
                                <ListItemText primary={itemsList} />
                            </ListItem>

                        </List>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={5}>
                    <List>
                        <ListItem>
                            <ListItemText primary={items.map(
                                item => <li><Button
                                    variant="contained"
                                    onClick={removeFromList}
                                >{item}
                                </Button></li>
                            )} />
                        </ListItem>

                    </List>
                </Grid>

            </Grid>

        </div>
    );
}

export { ListApp };





