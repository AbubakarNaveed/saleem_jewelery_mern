import React from 'react'
import { makeStyles } from '@mui/styles'
import { Card } from '@mui/material'
import { CardHeader } from '@mui/material'
import { CardActions } from '@mui/material'
import { CardContent } from '@mui/material'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { CardMedia } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const CoffeCard = ({ id, title, subtitle, imageUrl, detail }) => {

  const detail_summary=(words)=>{

    let array=words.split(" ")
    if(array.length<3)
      {return words}

    
    return `${array[0]} ${array[1]} ${array[2]} ....`
   
   }
  
  const navigation = useNavigate()
  return (
    <Card>
      <CardHeader title={title} subheader={subtitle} />
      <CardMedia style={{ height: '150px' }} image={imageUrl} />
      <CardContent>
        <Typography variant="body2" component="p">
          {detail_summary(detail)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            navigation(`/view/${id}`)
          }}
        >
          view
        </Button>
      </CardActions>
    </Card>
  )
}

export default CoffeCard
