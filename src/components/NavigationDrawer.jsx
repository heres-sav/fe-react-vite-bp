import { useState } from 'react';
import { Stack, Typography, Drawer, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Anchor } from '@components';

export const NavigationDrawer = ({ state, routes, click }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <Stack
      direction="row"
      alignItems="center"
      position="fixed"
      left="0px"
      bottom="0px"
      width="100%"
      height="48px"
      p="32px 24px"
      zIndex={99}
      boxShadow={`0px 1px 12px 2px ${theme.palette.primary.main}22`}
      bgcolor="secondary.main"
      onClick={() => setOpen((open) => !open)}
    >
      <Stack flex={1} direction="row" justifyContent="space-between" alignItems="center">
        <Typography>{routes.filter(({ href }) => href === state.href)[0]?.label}</Typography>
        <MenuIcon />
      </Stack>
      <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
        <Stack>
          {routes.map(({ href, label }) => (
            <Anchor key={href} href={href} click={(e) => click(e, href)} actionSx={{ padding: '12px 24px' }}>
              {label}
            </Anchor>
          ))}
        </Stack>
      </Drawer>
    </Stack>
  );
};
