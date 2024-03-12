import { Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className=" bg-black text-white mt-10 text-center "
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
            <Typography className=" pb-5" variant="h6">Company</Typography>
            <Typography className="pb-2" variant="h6" gutterBottom>About</Typography>
            <Typography className="pb-2" variant="h6" gutterBottom>Blog</Typography>
            <Typography className="pb-2" variant="h6" gutterBottom>Press</Typography>
            <Typography className="pb-2" variant="h6" gutterBottom>Partners</Typography>
            <Typography className="pb-2" variant="h6" gutterBottom>Jobs</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className=" pb-5" variant="h6">Solution</Typography>
            <Typography className="pb-1" variant="h6" gutterBottom>Marketing</Typography>
            <Typography className="pb-1" variant="h6" gutterBottom>Analytic</Typography>
            <Typography className="pb-1" variant="h6" gutterBottom>Ecomerce</Typography>
            <Typography className="pb-1" variant="h6" gutterBottom>Insight</Typography>
            <Typography className="pb-1" variant="h6" gutterBottom>Suports</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className=" pb-5" variant="h6">Documentaions</Typography>
            <Typography className="pb-1" variant="h6" gutterBottom>Guids</Typography>
            <Typography className="pb-1" variant="h6" gutterBottom>API Status</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className=" pb-5" variant="h6">Legal</Typography>
            <Typography className="pb-1" variant="h6" gutterBottom>Claim</Typography>
            <Typography className="pb-1" variant="h6" gutterBottom>Privacy</Typography>
            <Typography className="pb-1" variant="h6" gutterBottom>Terms</Typography>
        </Grid>
        <Grid className=" pt-20" item xs={12}>
        <Typography variant="body2" component="p" align=" center"> @copy; 2024 My company. All right reserved</Typography>
        <Typography variant="body2" component="p" align=" center"> Made with love by Me.</Typography>
        <Typography variant="body2" component="p" align=" center">
        </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
