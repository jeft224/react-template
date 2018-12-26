import isEmpty from "lodash/isEmpty";
import isArray from "lodash/isArray";
import isString from "lodash/isString";
import isFunction from "lodash/isFunction";
import indexOf from "lodash/indexOf";
const checkPermission = (authorities, permissions) => {
  if (isEmpty(permissions)) {
    return false;
  }
  if (isArray(authorities)) {
    for (const auth of authorities) {
      if (indexOf(permissions, auth) !== -1) {
        return true;
      }
    }
    return false;
  }
  if (isString(authorities)) {
    return indexOf(permissions, authorities) !== -1;
  }
  throw new Error("[react-router]: Unsupport type of authorities.");
};
export default checkPermission;
