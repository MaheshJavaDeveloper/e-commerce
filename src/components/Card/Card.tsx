import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, ButtonGroup, Rating } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import moment from 'moment';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

interface CardProps {
    product: product;
}

interface product {
    name: string,
    producer: string,
    description: string,
    imageUrl: string,
    currentPrice: number,
    historicalBestPrice: number,
    rating: number,
    status: number,
    createdBy: string,
    updatedBy: string,
    category: string,
    createdAt: string
}

const card = {
    margin: "10px"
};

const button = {
    padding: "0 10px"
};
const header = {
    padding: "15px 15px 0 15px"
};

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard(props: CardProps) {
    const [expanded, setExpanded] = React.useState(false);  

    return (
        <Card style={card} sx={{ maxWidth: 280 }}>
            <CardMedia
                component="img"
                height="194"
                image={props.product.imageUrl}
                alt="Prodct Image"
            />
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.product.name.toLocaleUpperCase()}
                subheader={props.product.currentPrice + " EUR"}
                // disableTypography={true}
                style={header}
            />
            <CardContent>
                <Typography>
                    50% Off<br/>
                    Make: {props.product.producer} <br/>
                    Published: {moment(props.product.createdAt).format('MMM Do YY')}
                    <Rating name="half-rating" defaultValue={props.product.rating} precision={props.product.rating} />
                </Typography>
            </CardContent >
            <CardActions disableSpacing>
                <ButtonGroup>
                    <Button variant="contained" color="success">Buy</Button> <Button color="success" variant="outlined" startIcon={<ShoppingCartIcon />}>Cart</Button>
                </ButtonGroup>
                <div style={button}>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon color="error" />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon color="error" />
                    </IconButton>
                </div>
            </CardActions>
        </Card >
    );
}