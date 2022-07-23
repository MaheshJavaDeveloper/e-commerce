import React, { FC, useEffect, useState } from 'react';
import styles from './CreateProduct.module.scss';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Alert, Button, Checkbox, MenuItem, Modal, Paper, Select, Typography } from '@mui/material';
import { Controller, useForm } from "react-hook-form";

interface CreateProductProps { }
interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

const card = {
  marginLeft: "30%"
};

const button = {
  marginLeft: "15%"
};

const paddingInput = {
  marginLeft: "5%"
};

const options = [
  {
    value: '1',
    label: 'Available',
  },
  {
    value: '0',
    label: 'UnAvailable',
  }
];

export default function CreateProduct(CreateProductProps: any) {

  const { handleSubmit, reset, control, getValues} = useForm();
  const onSubmit = (data: any) => {

    data.createdBy = "WebShopAdmin";
    data.updatedBy = "WebShopAdmin";

    console.log(data);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch('https://idealo-api.herokuapp.com/api/v1/product', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAlert(true);
      });
  };
  const [alert, setAlert] = useState(false);

  return (
    <div style={card}>
      <Box component="form" mt={5}>
        <Controller
          name={"name"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label={"Product Name"} />
          )}
        />
        <span style={paddingInput}></span>
        <Controller
          name={"description"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label={"Description"} />
          )}
        />
        <br />
        <br />
        <Controller
          name={"imageUrl"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label={"Image Link"} />
          )}
        />
        <span style={paddingInput}></span>
        <Controller
          name={"currentPrice"}
          control={control}          
          render={({ field: { onChange, value } }) => (
            <TextField type="number"
            onChange={onChange} value={value} label={"Price"} />
          )}         
        />
        <br />
        <br />
        <Controller
          name={"category"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label={"Category"} />
          )}
        />
        <span style={paddingInput}></span>
        <Controller
          name={"producer"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label={"Brand"} />
          )}
        />
        <br />
        <br />
        <div style={button}>
          <Button onClick={handleSubmit(onSubmit)} variant={"contained"} color="success">Submit</Button>
          <span style={paddingInput}></span>
          <Button onClick={() => reset()} variant={"contained"} color="error">Reset</Button>
        </div>
      </Box> 
      <Modal        
        open={alert}
        onClose={() => setAlert(false)}
      >
        <Alert severity="success">This is a success alert — check it out!</Alert>
      </Modal>     
    </div>
    
  );
}
