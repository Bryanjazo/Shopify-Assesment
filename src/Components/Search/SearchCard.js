
import {useDispatch,useSelector} from 'react-redux'
import '../Pictures.css'
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
import {FacebookShareButton, FacebookIcon,TwitterIcon,TwitterShareButton,LinkedinShareButton,LinkedinIcon} from "react-share";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@material-ui/core/Grid';
import Heart from "react-animated-heart";


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


export default function SearchCard(props) {
    console.log(props)
  const [expanded, setExpanded] = React.useState(false);
  const [heartStatusFalse,setHeartStatusFalse] = React.useState(false)
  const [heartStatusTrue,setHeartStatusTrue] = React.useState(true)
  const [heartStatus, setHeartStatus] = React.useState(false)
  const status = localStorage.getItem('click') || false

  const dispatch = useDispatch()

//   React.useEffect(() => {
//     dispatch(setHeartStatus(status))
// }, [dispatch])


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const handleClick = (e) =>{
      e.preventDefault()
      setHeartStatus(!heartStatus)
      localStorage.setItem('click',heartStatus)
      
   
  }

  console.log(status)
  


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
        title={props.copyright}
        subheader={props.date}
      />
      <CardMedia
        component="img"
        height="800"
        image={props.url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            <h3>Please Click The Drop Down For More Rover Information.</h3>
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleClick} aria-label="add to favorites">
        <Heart isClick={heartStatus} onClick={handleClick} />
        </IconButton>   
        <IconButton aria-label="share">
        <FacebookShareButton url={'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=0gy1oqP1DslGJv9aV7euxFtg7yAt81uoBnUPXrae'}>
            <FacebookIcon size={40} round={true}/>
        </FacebookShareButton>
        </IconButton>
        <IconButton aria-label="share">
        <TwitterShareButton url={'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=0gy1oqP1DslGJv9aV7euxFtg7yAt81uoBnUPXrae'}>
            <TwitterIcon size={40} round={true}/>
        </TwitterShareButton>
        </IconButton>
        <IconButton aria-label="share">
        <LinkedinShareButton url={'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=0gy1oqP1DslGJv9aV7euxFtg7yAt81uoBnUPXrae'}>
            <LinkedinIcon size={40} round={true}/>
        </LinkedinShareButton>
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

         {props.explanation}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
    </Grid>

  );
}
