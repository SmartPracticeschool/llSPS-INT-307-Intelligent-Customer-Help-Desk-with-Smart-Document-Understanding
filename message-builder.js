const util = require('util');

module.exports = {
  setWorkspaceId(workspaceId) {
    this.workspace_id = workspaceId;
  },
  message(messageOpts) {
    const params = Object.assign({
      workspaceId: this.workspace_id
    }, messageOpts);

    console.log('Assistant Message Params: ');
    console.log(util.inspect(params, false, null));
    return params;
  }
};
