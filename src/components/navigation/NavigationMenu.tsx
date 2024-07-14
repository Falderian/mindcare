import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ListItemText, Collapse, List, Drawer, ListItemButton, Menu } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { MenuItems } from './MenuItems';
import IconifyIcon from '../Icon';

export const NavigationMenu = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClick = (item: (typeof MenuItems)['0']) => {
    if (item.children) {
      setOpen(!open);
    } else {
      router.push(item.path);
    }
  };

  const renderMenuItems = (menuItems: typeof MenuItems) => {
    return menuItems.map((item, index) => (
      <React.Fragment key={index}>
        <ListItemButton onClick={() => handleClick(item)}>
          {item.icon && <IconifyIcon icon={item.icon} />}
          <ListItemText primary={item.name} sx={{ ml: 1 }} />
          {item.children && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
        {item.children && (
          <Collapse in={open} unmountOnExit>
            <List component="div" disablePadding>
              {item.children.map((child, idx) => (
                <ListItemButton key={idx} sx={{ pl: 4 }} onClick={() => router.push(child.path)}>
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
    <Drawer variant="permanent" sx={{ width: '20%' }}>
      <List>{renderMenuItems(MenuItems)}</List>
    </Drawer>
  );
};
