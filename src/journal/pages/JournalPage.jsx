
import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';

export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography >Exercitation voluptate reprehenderit exercitation laborum culpa nisi adipisicing Lorem ea elit in minim.</
      Typography> */}

      <NothingSelectedView/>

      {/* <NoteView/> */}
    

    <IconButton
    size='large'
    sx={{
      color: 'white',
      backgroundColor: 'error.main',
      ':hover': {backgroundColor: 'error.main', opacity: 0.9},
      position: 'fixed',
      right: 50,
      bottom: 50
    }}
    >
      <AddOutlined/> 
    </IconButton>
    </JournalLayout>
   
  )
}
