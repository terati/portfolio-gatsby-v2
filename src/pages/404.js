import * as React from "react";

import Layout from "../components/layout";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const NotFoundPage = () => (
  <Layout>
    <Box
      sx={{
        paddingTop: '100px'
      }}
    >
      <Typography variant="h1">
        404 NOT FOUND
      </Typography>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Box>
  </Layout>
)

export default NotFoundPage