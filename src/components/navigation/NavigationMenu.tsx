import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { ListItemText, Collapse, List, Drawer, ListItemButton } from '@mui/material';
import React, { useState } from 'react';
import { MenuItems } from './MenuItems';

export const NavigationMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const renderMenuItems = (menuItems: typeof MenuItems) => {
    return menuItems.map((item, index) => (
      <React.Fragment key={index}>
        <ListItemButton onClick={item.children ? handleClick : undefined}>
          <ListItemText primary={item.name} />
          {item.children && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
        {item.children && (
          <Collapse in={open} unmountOnExit>
            <List component="div" disablePadding>
              {item.children.map((child, idx) => (
                <ListItemButton key={idx} sx={{ pl: 4 }}>
                  <ListItemText primary={child.name} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    ));
  };

  return (
    <Drawer variant="permanent">
      <List sx={{ width: 240 }}>{renderMenuItems(MenuItems)}</List>
    </Drawer>
  );
};
