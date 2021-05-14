import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import { Button, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import '../SingleTodo/SingleTodo.css'
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
function SingleTodo ({user, onDelete, onChange}) {
    const classes = useStyles();
    const { path } = useRouteMatch();
    return (
        <div className={"todos-card-not-completed"}>
                <p>{user.title}</p>
            <div className={'control-buttons todos-buttons'}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete(user.id);
                    }}
                >
                    <DeleteRoundedIcon />
                </Button>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">Status:</InputLabel>
                    <Select
                        native
                        value={user.isDone}
                        onChange={(e) => onChange({...user, isDone: e.target.value})}
                        label="Status:"
                        inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={true}>Done</option>
                        <option value={false}>Not done</option>
                    </Select>
                </FormControl>
            </div>

        </div>
    );
}

export default SingleTodo;