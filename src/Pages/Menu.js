import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { MenuLists } from '../data/Data'

const Menu = () => {
  return (
    <Layout>
      <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:'center'}}>
        {
          MenuLists.map(menu => (
            <Card sx={{maxWidth:"390px", display:"flex", m:2}}>
              <CardActionArea>
                <CardMedia sx={{ minHeight: '400px' }}
                  component={'img'}
                  src={menu.Image}
                  alt={menu.name} />
                <CardContent>
                  <Typography variant='h5' gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant='body2'>
                    {menu.Description}
                  </Typography>
                  <Typography variant='body2'>
                    {menu.Price} rs <br />
                    <button> order now</button>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </Box>
    </Layout>
  )
}

export default Menu