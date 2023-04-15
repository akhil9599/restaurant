import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
    <Box sx={{
      my:10,
      textAlign:'Center',
      p:2,
      "& h4":{
        fontWeight:"bold",
        my:2,
        font:"2rem",
      },
   "& p":{
    textAlign:"justify",
   },
   "@media(maz-width:600px)":{
    mt:0,
    "& h4":{
      fontSize :"2rem"
    },
   }
    }}>
<Typography variant='h4'>
  Welcome to my Restorant
</Typography >
    
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi impedit molestias enim perspiciatis blanditiis, quibusdam, sint ipsam eius quam tenetur repellat dignissimos totam obcaecati quo dolores quidem explicabo ducimus fugit itaque ratione aspernatur ullam cum maiores! Voluptates voluptate ad nesciunt autem atque pariatur ea porro nihil harum reiciendis architecto itaque, quod, quibusdam nulla aut quaerat asperiores dolores. Adipisci consequatur fugiat numquam, mollitia, labore et deleniti est quo quasi obcaecati animi neque illum incidunt repellat. Adipisci nemo necessitatibus consequuntur quos minima voluptatibus vitae, atque quod voluptates numquam. Quam exercitationem eaque sunt maiores officia quae saepe aut officiis magnam. Quis, quidem aspernatur.
    </p>
    <br />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid error quod aut soluta eveniet maxime impedit sint tempore ratione a? Saepe necessitatibus minima voluptates et libero amet ab officiis consequatur, asperiores ipsa, quos quidem nesciunt mollitia tenetur ad esse? Repellat odio doloribus rem eum placeat nihil dolore aperiam ducimus corporis rerum sit quas iusto nam ratione maiores eos atque dolores impedit nobis nemo, id quae quos in modi. Ducimus tempora illum nulla molestias, natus officia alias sunt, tenetur ipsam repudiandae quae ipsa maiores repellendus nam enim debitis aperiam voluptates eveniet expedita, dolorum labore? Ab, amet obcaecati veniam illum sed laboriosam!</p>
    </Box>
    </Layout>
  )
}

export default About