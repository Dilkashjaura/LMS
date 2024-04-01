import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';

const BookCard = ({book}) => {
  
  return (
    <div>
        <Card style={{fontFamily:''}} sx={{width:"200px",height:"350px"}}>
              <Stack justifyContent={"center"} alignItems={"center"} >
            <CardContent>

            <CardMedia
            component="img"
            sx={{width:"100%",height:"200px", marginTop:"0"}}
            image={`http://localhost:8000/${book.coverimage}`}
          />
              <Typography style={{marginTop:'10px', fontSize: '13px'}}>{`TITILE    :   ${book.title}`}</Typography>
              <Typography style={{fontSize: '13px'}}>{`AUHTOR    :   ${book.author}`}</Typography>
              <Typography style={{fontSize: '13px'}}>{`CATEGORY    :   ${book.category}`}</Typography>
              <Typography style={{fontSize: '13px'}}>{`DESCRIPTION   :   ${book.description}`}</Typography>

            </CardContent>
            <Button variant="contained"sx={{ fontSize: '5px', fontWeight:'bold', marginTop:'-7px'}}>Delete</Button>
              </Stack>



      



        </Card>
    </div>
  )
}

export default BookCard;