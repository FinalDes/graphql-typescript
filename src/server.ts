/* tslint:disable:no-console*/
import app from "./app";

import dotenv = require("dotenv");
import { PortValidator } from "./validator/portValidator";
dotenv.config();

const port: any = PortValidator.validate(process.env.PORT, 3000);
app.listen(port, () => {
  console.log(`Listening port ${port}`);
});
