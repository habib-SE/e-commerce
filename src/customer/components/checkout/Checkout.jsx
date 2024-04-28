import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import DeleveryAddressForm from './DeleveryAddressForm';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const querysearch = new URLSearchParams(location.search);
    let step = querysearch.get("step");
    if (step === null || isNaN(step) || parseInt(step) >= steps.length) {
      step = 1; // Set default step to 1 if not provided or invalid
    }
    setActiveStep(parseInt(step, 10));
  }, [location.search]);

  const handleStepClick = (stepIndex) => {
    updateStepInUrl(stepIndex);
    setActiveStep(stepIndex);
  };

  const updateStepInUrl = (step) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("step", step);
    const newUrl = `${location.pathname}?${searchParams.toString()}`;
    navigate(newUrl);
  };

  return (
    <div className='px-10 lg:px-20'>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel onClick={() => handleStepClick(index)}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={() => handleStepClick(activeStep - 1)}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              
              
            </Box>
            <div className=' mt-10'>
              {activeStep === 1 ? <DeleveryAddressForm /> : <OrderSummary />}
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
