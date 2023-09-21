import React from 'react'
import { CardMedia } from '@mui/material'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import { Typography } from '@mui/material'
const displayProductCard = ({ imageURL, detail, price, name }) => {
  return (
    <>
      <Card
        sx={{
          paddingTop:'45px',
          border: 'none',
          height: '100vh',
          width: `100vw`,
          display: `flex`,
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <CardMedia
          style={{
            height: '275px',
            width: '300px',

            top: '0',
          }}
          image={imageURL}
        />
        <CardContent
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',
          }}
        >
          <Typography variant="h4" align="center">
            {name}
            <Typography variant="h5" align="center">
              Rs {price}
            </Typography>
          </Typography>
          <Typography variant="h6" align="center" sx={{ lineBreak: 'normal',color:'gray',marginTop:'20px' }}>
            {detail}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default displayProductCard
