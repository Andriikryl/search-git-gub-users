import React, {useState} from 'react'
import {IRepo} from '../models/models'
import {useActions} from '../hooks/actions'
import {useAppSelector} from '../hooks/redux'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export function RepoCard({ repo }: { repo: IRepo }) {
  const {addFavourite, removeFavourite} = useActions()
  const {favourites} = useAppSelector(state => state.github)

  const [isFav, setIsFav] = useState(favourites.includes(repo.html_url))
  
  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addFavourite(repo.html_url)
    setIsFav(true)
  }

  const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    removeFavourite(repo.html_url)
    setIsFav(false)
  }
  
  return (
    <Card sx={{ minWidth: 275}} className="mt-10">
      <a href={repo.html_url} target="_blank">
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      <h2 className="text-lg font-bold">{repo.full_name}</h2>
      </Typography>
      <Typography variant="h5" component="div">
      <p className="text-sm">
    //       Forks: <span className="font-bold mr-2">{repo.forks}</span>
    //       Watchers: <span className="font-bold">{repo.watchers}</span>
    //     </p>
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
    {!isFav && <Button variant="contained" color="success"
          onClick={addToFavourite}
        >Add</Button>}

        {isFav && <Button 
          onClick={removeFromFavourite}
        >Remove</Button>}
    </CardActions>
    </a>
  </Card>
  )
}