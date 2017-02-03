require('fh-js-sdk');

angular.module('todoApp', [require('fh-wfm-mediator'), require('fh-wfm-workorder'), require('fh-wfm-result'), require('fh-wfm-workflow')])
  .service('raincatcherService', function (workorderSync) {

    return {
      workorderManager: workorderSync.createManager()
    }

  })
  .controller('WorkflowsController', function (raincatcherService) {
    var workflowController = this;
    console.log(raincatcherService.workorderManager);
    workflowController.workflows = [/*TODO populate list from mediator*/];

    workflowController.createWorkflow = function () {
      //TODO
    };

  });