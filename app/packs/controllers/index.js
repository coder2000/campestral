import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";

const application = Application.start();
const context = require.context("./", true, /\.[tj]s$/);

application.load(definitionsFromContext(context));
