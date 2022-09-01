import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './work-card.css'
import { render } from "@testing-library/react";
import { Link, Navigate } from "react-router-dom";
import Work from "./work";


function Workcard() {
  return (

    <div className="work-space">
      <div className="work-space-row">
      <Card sx={{ maxWidth: 600, marginBottom: 4 }}>
        <Link to="/work" style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="280"
              image="./MOTF.jpeg"
              alt="museum of the future"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Museum of the Future
              </Typography>
              <Typography variant="body" color="text.secondary">
              Public installation showcasing how enterprise software and technologies are shaping our future.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>

       <Card sx={{ maxWidth: 600, marginBottom: 4}}>
       <Link to="/work" style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="280"
          image="./sustainability.png"
          alt="sustainable community app"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            Sustainable Community App
          </Typography>
          <Typography variant="body" color="text.secondary">
          Community Social Platform encouraging sustainable behaviors adoption for one of the most prominent real estate developers in the region.
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
       </Card>
      </div>

      <div className="work-space-row">
      <Card sx={{ maxWidth: 600, marginBottom: 4 }}>
      <Link to="/work" style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image="./hayati.png"
          alt="hayati app"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            Hayati Health App
          </Typography>
          <Typography variant="body" color="text.secondary">
          Health app helping people with chronic diseases living in the UAE maintain a healthy lifestyle.
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
       </Card>

       <Card sx={{ maxWidth: 600, marginBottom: 4  }}>
       <Link to="/work" style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image="./under-construction.png"
          alt="xo project"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            XO,
          </Typography>
          <Typography variant="body" color="text.secondary">
          Mobile app helping you be thoughtful with your family and friends by never forgetting to celebrate an important moment.

          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
       </Card>
      </div>
    </div>

  );
}

export default Workcard;