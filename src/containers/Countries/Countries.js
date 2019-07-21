import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Grow from '@material-ui/core/Grow';

const StyledCountries = styled.div`
  padding: 3rem;
  display: flex;
  align-items: center;
`;
const TItle = styled.p`
  font-size: 3rem;
  margin-right: 1rem;
`;

const SButton = styled(Button)`
  font-size: 3rem;
`;

const options = ['Europe', 'America', 'Africa', 'Australia', 'Asia'];
const Countries = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  function handleMenuItemClick(event, index) {
    setSelectedIndex(index);
    setOpen(false);
  }

  function handleToggle() {
    setOpen(prevOpen => !prevOpen);
  }

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  return (
    <StyledCountries>
      <TItle>My next destination will be in</TItle>
      <SButton
        color="secondary"
        variant="text"
        size="large"
        style={{ fontSize: '2rem' }}
        onClick={handleToggle}
        ref={anchorRef}
      >
        {options[selectedIndex]}
      </SButton>
      <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <Paper id="menu-list-grow">
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={event => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </StyledCountries>
  );
};

export default Countries;
