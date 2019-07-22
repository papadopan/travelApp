import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Grow from '@material-ui/core/Grow';
import { connect } from 'react-redux';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import * as actions from '../../store/actions';
import { IconButton } from '../../theme/components';

const StyledCountries = styled.div`
  padding: 3rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const Body = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const TItle = styled.p`
  font-size: 3rem;
  margin-right: 1rem;
`;

const SButton = styled(Button)`
  font-size: 3rem;
`;

const Card = styled.div`
  height: 100%;
  width: 230px;
  margin: 1.5rem;
  padding: 1rem;
  box-shadow: 1px 3px 41px -7px rgba(0, 0, 0, 0.65);
`;

const Img = styled.img`
  height: 60%;
  width: 100%;
`;

const Name = styled.p`
  font-size: 1rem;
  letter-spacing: 1px;
  margin-top: 1rem;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const options = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
const Countries = ({ fetchCountries, countries }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(3);

  function handleMenuItemClick(event, index) {
    setSelectedIndex(index);
    fetchCountries(options[index]);
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
      <Header>
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
      </Header>
      <Body>
        {countries.map((country, index) => (
          <Card key={index}>
            <Img src={country.flag} alt="country flag" />
            <Name>{country.name}</Name>
            <Bottom>
              <IconButton edge="start" color="inherit" aria-label="Menu">
                <FavoriteIcon />
              </IconButton>
              <IconButton edge="start" color="inherit" aria-label="Menu">
                <ArrowRightAlt />
              </IconButton>
            </Bottom>
          </Card>
        ))}
      </Body>
    </StyledCountries>
  );
};

const mapStateToProps = state => ({
  countries: state.countries
});

const mapDispatchToProps = dispatch => ({
  fetchCountries: name => dispatch(actions.fetchCountriesByRegion(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries);
