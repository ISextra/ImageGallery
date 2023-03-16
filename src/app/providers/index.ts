import { compose } from 'redux'
import { withRouter } from "./with-router";

export const withProviders = compose(withRouter);