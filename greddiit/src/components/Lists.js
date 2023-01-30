import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListContent from './ListContent';

{/* <RedditIcon color="action" sx={{fontSize: 50}}/> */}
export default function Lists() {   
  return (
    <List sx={{ pt: 0 }}>
        <ListContent />
        <Divider variant="inset" component="li" />
        <ListContent />
        <Divider variant="inset" component="li" />
        <ListContent />
        <Divider variant="inset" component="li" />
        <ListContent />
    </List>
  );
}