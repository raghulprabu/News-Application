import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Cards = ({ data }) => {
  console.log(data);

  const readMore = (url) => {
    window.open(url);
  };

  return (
    <Grid container spacing={3}>
      {data.map((curItem, index) => {
        if (!curItem.urlToImage) {
          return null;
        } else {
          return (
            
            <Grid key={index} size={3}>
              <Card className='custom-Card'>
                <CardMedia
                  component="img"
                  height="200"
                  image={curItem.urlToImage}
                  alt={curItem.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom onClick={() => readMore(curItem.url)} style={{ cursor: 'pointer' }}>
                    {curItem.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {curItem.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => readMore(curItem.url)}
                    style={{ marginTop: '10px' }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        }
      })}
    </Grid>
  );
};

export default Cards;
