 let ofd = new SCOFDReader(window.app, "123456", {
   showTools: false,
   showOpenFile: false,
   showDocListBar: false
 });
 fetch('./help.ofd').then(async rsp => {
   ofd.openFile(new File([await rsp.arrayBuffer()], '1.pdf'))
 });
 ofd.vm.setShowLeftPanel(false);
 ofd.vm.setShowState(false);
