import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import menus from '../../constants/menu'

export default function MainListItems({handleMenu}) {
    return (
    <div>
      <ListItem button onClick={() => handleMenu(menus.TODO)}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Tarefas" />
      </ListItem>
      <ListItem button onClick={() => handleMenu(menus.ABOUT)}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Sobre" />
      </ListItem>
    </div>
  );
}