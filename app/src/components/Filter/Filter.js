import React from 'react'

import {ClickAwayListener, Grow, Paper, Popper, MenuList, MenuItem, Button, Typography} from '@material-ui/core';

import { KeyboardArrowDown } from '@material-ui/icons';

export default function Filter({options = [], onChange = () => {}}) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef();
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
        onChange(options[index].id);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return <div className="filter-row">
        <Button variant="outlined" ref={anchorRef} onClick={handleToggle}>
            Группировка: {options[selectedIndex].label}&nbsp;<KeyboardArrowDown />
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined}  transition disablePortal>
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                >
                    <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuList id="split-button-menu">
                                {options.map((option, index) => (
                                    <MenuItem
                                        key={option.id}
                                        selected={index === selectedIndex}
                                        onClick={(e) => handleMenuItemClick(e, index)}
                                    >
                                        <Typography>{option.label}</Typography>
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </Popper>
    </div>
}