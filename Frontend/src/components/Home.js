import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Background from '../images/babel.png';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Home extends Component {
  render(){
	  const home={
	    width: 'auto',
		display:'flex',
		padding:'12px',
		backgroundColor:'',
	};
	const card={
		minWidth: '345px',
		textAlign:'left',
	};
	const media={
		height:'auto',
	};
	    
	  
	return(
	<div style={home}>
	<Card style={card}>
      <CardActionArea>
        <CardMedia
		  style={media}
          component="img"
          alt="Flash Cards"
          image={Background}
          title="Flashh News"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            About the App..
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
		  Babel aims to be a premium platform that provides DRM-protected news and updates from Twitter and other prominent news agencies.
            Babel is a news reading app that aggregates published news 
			from a variety of sources, like a better-formatted version of RSS.
			It presents stories that are most relevant to your personal 
			interests while keeping you up to date on the rest of the world too.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
	</div>
	
	);
}}

export default Home;