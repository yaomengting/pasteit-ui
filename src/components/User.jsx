import React, { useEffect, useState } from "react";
import {List, ListItem, ListItemText} from '@material-ui/core'
import CreatePaste from "./CreatePaste";
const paste = require('../services/paste');


function User() {

    const [data, setData] = useState({
        pasteList: [1]
    });
    useEffect(() => {
        paste.getAll()
            .then(res => {
                console.log('res:', res);
                setData({
                    pasteList: res
                })
            });
    }, [])


    return (
        <div>

            {data.pasteList.length == 0 ?
                <div>
                    <label>You haven't created any paste yet, create a new one? -> </label>
                    <a href='/paste/create'>Create paste</a>
                </div>
                :
                <div>
                    <CreatePaste />
                    <List>
                {
                    data.pasteList.map(paste => {
                        return <ListItem>
                            <ListItemText>
                              {paste.content}
                            </ListItemText>
                        </ListItem>
                    })
                }
                    </List>
                </div>}

        </div>

    );
}

export default User;