
import {useDispatch,useSelector} from 'react-redux'
import './Pictures.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@material-ui/core/Grid';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
    alignItems: 'center',
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function Pictures(props) {
  const [expanded, setExpanded] = React.useState(false);
  console.log(props)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = (e) =>{
      e.preventDefault()
  }

  return (
    <Grid
    container
    direction="column"
    alignItems="center"
    justify="center"
  
   >
    <Grid >
    <Card  sx={{ maxWidth: 800 , marginBottom: 5}}>
      <CardHeader
        title={props.rover.name}
        subheader={props.earth_date}
      />
      <CardMedia
        component="img"
        height="800"
        image={props.img_src}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            <h3>Please Click The Drop Down For More Rover Information.</h3>
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleClick} aria-label="add to favorites">
          <FavoriteIcon style={{fill: {}}}/>
        </IconButton>   
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>

          <b>Id: </b>{props.rover.id}<br></br>
          <b>Camera Name</b> {props.camera.full_name}<br></br>
          <b> Date Launched:</b> {props.rover.launch_date}<br></br>
          <b> Date Landed:</b>  {props.rover.landing_date}<br></br>
          <b> Active Status:</b>  {props.rover.status === 'active' ? 'true' : 'false'}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
    </Grid>

  );
}
