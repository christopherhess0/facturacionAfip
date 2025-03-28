import { Autocomplete, TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const StyledAutocomplete = styled(Autocomplete)`
  .MuiOutlinedInput-root {
    background-color: white;
    border-radius: 6px;
    font-size: 1rem;
    
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: #3498db;
    }
    
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: #3498db;
    }
  }

  .MuiAutocomplete-input {
    padding: 0.8rem !important;
  }
`;

const EdificioAutocomplete = ({ edificios, value, onChange }) => {
  return (
    <StyledAutocomplete
      options={edificios}
      getOptionLabel={(option) => option.nombreEdificio || ''}
      value={value}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Buscar edificio..."
          variant="outlined"
        />
      )}
      isOptionEqualToValue={(option, value) => 
        option.nombreEdificio === value?.nombreEdificio
      }
      noOptionsText="No se encontraron edificios"
    />
  );
};

export default EdificioAutocomplete; 