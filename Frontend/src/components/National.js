import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import NavBar2 from './NavBar2';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';

const root= {
    overflow: 'hidden',
	padding:'24px',
	paddingLeft:'20%',
	paddingRight:'20%',
	backgroundColor:'#b2ebf2',
};
const card= {
    marginBottom:'15px',
	textAlign:'left',
};
const sentiment={"positive":"green","negative":"#ff1744","neutral":"#2196f3"};

class National extends Component {

  constructor(props) {
    super(props);
    this.state = {
    error: null,
    isLoaded: false,
    items: [],
    };

  }

  componentDidMount() {
    fetch(`http://localhost:5000/national`)
//    fetch(`http://localhost:5000/national/news`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptionsm actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render(){


  console.log(this.state);
  const { error, isLoaded, items } = this.state;
//  const trending=items[`trend_${this.props.location}`][0].trends;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...<CircularProgress color="secondary"/></div>;
    } else {
      return (
        <div style={root}>
	{/*{items.map(item => (*/}
		{items[`news`].map(item => (
		<Card style={card}>
		  <CardActionArea>
			<CardContent>
			  <Typography gutterBottom variant="h5" component="h2">
				{item.title}
			  </Typography>
			  <Typography variant="body2" color="textSecondary" component="p">
			  {item.description}
			  </Typography>
			</CardContent>
		  </CardActionArea>
		  <CardActions>
			<Button onClick={()=> window.open(`${item.url}`, "_blank")} size="small" color="primary">
			  More
			</Button>
		  </CardActions>
		</Card>
		))}

    </div>
      );
    }
}
}
export default National;