import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import ReduxStore from '../../store/ReduxStore';
import { useSelector } from 'react-redux';
import { saveSearch } from '../../actions/SearchBlog';

const fillinColor = 'white'
const MAXWIDTH = 400;
const MINWIDTH = 50;
export default function CustomizedInput() {
    const [width, setWidth] = React.useState(MINWIDTH);
    const [searchFlag, setSearchFlag] = React.useState(0);
    const searchData = useSelector(state => state);

    // React.useEffect(() => {
    //     if (searchFlag == 1 && width < MAXWIDTH){
    //         const interval = setInterval(() => {
    //             setWidth(width+ (MAXWIDTH-width)**(.7));
    //         }, 10);
    //         return () => clearInterval(interval)
    //     }

    //     if (searchFlag == 2 && width > MINWIDTH){
    //         const interval = setInterval(() => {
    //             setWidth(width- (width-MINWIDTH)**(.7));
    //         }, 10);
    //         return () => clearInterval(interval)
    //     } else {
    //         setSearchFlag(0);
    //     }
    // }, [width, searchFlag])

  return (
    <Paper
      component="form"
      sx={{ p: '10px 10px', 
      display: 'flex', 
      alignItems: 'center', 
      width: '100%', 
      maxWidth: '500px',
      height: 50,
      backgroundColor: 
      fillinColor, 
      boxShadow: 3,
      borderRadius: '50px',
    }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: 'black', }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
        onFocus={() => setSearchFlag(1)}
        onBlur={() => setSearchFlag(2)}
        onChange={(e) => {
          let tmp = ReduxStore.dispatch(saveSearch(e.target.value));
          // console.log(searchData);

          // console.log(e.target.value);
        }}
      />
      <IconButton type="submit" style={{ color: 'grey'  }} sx={{ p: '0px', }} aria-label="search" disabled>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}