/* tslint:disable:no-console*/
import app from "./app";

import dotenv = require("dotenv");
dotenv.config();
import { PortValidator } from "./validator/portValidator";

const port: any = PortValidator.validate(process.env.PORT, 3000);
app.listen(port, () => {
  console.log(`Listening port ${port}`);
});
