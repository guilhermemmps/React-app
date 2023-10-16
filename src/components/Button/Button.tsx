import React from 'react';
import Button from '@mui/material/Button';
import './styles.module.css'; // Importe os estilos CSS

const MyButton: React.FC = () => {
  return (
    <Button
      variant="contained"
      classes={{
        root: 'myMuiButton', // Aplique a classe root ao botão
      }}
    >
      Clique em mim
    </Button>
  );
};

export default MyButton;