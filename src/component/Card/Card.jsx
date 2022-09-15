import React from 'react'
import CountUp from 'react-countup'

import cx from 'classnames'
import styles from './Card.module.css'


import{Card,Typography,Grid,CardContent} from '@mui/material'

function cards({data:{confirmed,deaths,recovered,lastUpdate}}) {
  // console.log(recovered)
  if(!confirmed){
    return 
  }
  
 
  return (
 
    <div className={styles.container}>
      <Grid container spacing={10} justify='center'>
        <Grid item component={Card} xs={12} md={5} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Infected</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={confirmed.value} duration={5} separator=',' />
              
              </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>on of infected cases</Typography>
          </CardContent>

        </Grid>

        <Grid item component={Card} xs={12} md={5}  className={cx(styles.card,styles.death)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Death</Typography>
            <Typography variant='h5'>
            <CountUp start={0} end={deaths.value} duration={5} separator=',' />
              
              </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>on of infected cases</Typography>
          </CardContent>

        </Grid>

        {/* <Grid item component={Card} xs={12} md={4}  className={cx(styles.card,styles.recovered)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Recovered</Typography>
            <Typography variant='h5'>
            <CountUp start={0} end={recovered.value} duration={5} separator=',' />
              
             </Typography>

            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>on of infected cases</Typography>
          </CardContent>

        </Grid> */}
      </Grid>
      
    </div>
  )
}

export default cards