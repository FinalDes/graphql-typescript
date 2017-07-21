/* tslint:disable:no-console*/
import app from "./app";

import dotenv = require("dotenv");
dotenv.config();
import { PortValidator } from "./validator/portValidator";

const PORT: any = PortValidator.validate(process.env.PORT, 3000);
app.listen(PORT, () => {
  console.log(`GraphQL Server is now running on http://localhost:${PORT}/graphql`);
});
