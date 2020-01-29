import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { NavLink } from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';

const fab={
  margin:'20%',
};
const twitterIcon={
		  marginRight:'10px',
	  };
const getFeed={
  padding: '13px', 
  textDecoration: 'none',
};
const formControl= {
   margin: '1px',
   minWidth: '100px',
   backgroundColor:'#e0e0e0',
  
};


class NavBar2 extends Component {
	constructor(props) {
		super(props);
		this.state = {select:'none'};
		
		this.handleChange = field => e => {
			this.props.handleLocation(e.target.value);
			this.setState({[field]: e.target.value});
	}
	}
	render(){
    return(
        <div style={{flexGrow: 1, textAlign:'left',}}>
        <AppBar position="static" style={{backgroundColor: '#ffad33'}}>
            <Toolbar>
			<NavLink to="/" >
				<IconButton edge="start" style={{marginRight: '2px'}} color="inherit" aria-label="home">
					<Fab variant="extended" aria-label="like" size="small">
						<HomeIcon fontSize='medium'/>
					</Fab>
				</IconButton>
				</NavLink>
                <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
                BABEL <span style={{fontSize:'14px', fontStyle:'italic'}}>Local News for Everyone</span>
                </Typography>
                <NavLink to="/national" style={getFeed}>
					<Fab variant="extended" aria-label="like" size="small">
						<AssistantPhotoIcon style={twitterIcon} fontSize='small'/>
						News
					</Fab>
			    </NavLink>
				<NavLink to="/news" style={getFeed}>
					<Fab variant="extended" aria-label="like" size="small">
						<TwitterIcon style={twitterIcon} fontSize='small'/>
						 Feed
					</Fab>
			    </NavLink>
			
			{/* <Fab variant="extended" aria-label="like" size="small">
			<LocationOnIcon fontSize='small'/> */}
						<FormControl style={formControl}>
						{/*<InputLabel id="location">Location</InputLabel>*/}
						<Select
						  style={{paddingLeft:'5px'}}
						  labelId="location"
						  id="location_"
						  value={this.state.select}
						  onChange={this.handleChange('select')}
						>
						  <MenuItem value="none" disabled>
						  Location
						  </MenuItem>
						  <MenuItem value={'LUCKNOW'}>Lucknow</MenuItem>
						  <MenuItem value={'KANPUR'}>Kanpur</MenuItem>
						  <MenuItem value={'DELHI'}>Delhi</MenuItem>
						  <MenuItem value={'LAS_VEGAS'}>Las Vegas</MenuItem>
						</Select>
					  </FormControl>
					  {/* </Fab> */}
				
            </Toolbar>
        </AppBar>
        </div>
    );
}}
export default NavBar2;