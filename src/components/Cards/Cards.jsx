import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import styles from './Cards.module.css'
import cx from 'classnames'

const Cards = ({ data:{ confirmed, recovered, deaths, lastUpdate }}) => {


    if(!confirmed){
        return 'Loading...'
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infectados</Typography>
                        <Typography varaint="h5">
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                duration={3.0}
                                separator="." /> 
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString([],{ year: 'numeric', month: 'long', day: 'numeric' })}</Typography>
                        <Typography variant="body2">N&uacute;mero de casos de COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recuperados</Typography>
                        <Typography varaint="h5">
                            <CountUp 
                                start={0}
                                end={recovered.value}
                                duration={3.0}
                                separator="." />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString([],{ year: 'numeric', month: 'long', day: 'numeric' })}</Typography>
                        <Typography variant="body2">N&uacute;mero de pessoas recuperadas do COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Mortes</Typography>
                        <Typography varaint="h5">
                            <CountUp 
                                start={0}
                                end={deaths.value}
                                duration={3.0}
                                separator="." />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString([],{ year: 'numeric', month: 'long', day: 'numeric' })}</Typography>
                        <Typography variant="body2">N&uacute;mero de mortes causadas pelo COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards