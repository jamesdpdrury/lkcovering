
function convertNewlinesToBreaks(text) {
  return text.replace(/\n/g, '<br>');
}

// Listen for messages from the iframe
window.addEventListener('message', function(event) {
  var data = event.data;

 // Check if the data is of expected type/format
 if (typeof data === 'object' && data !== null) {
    // Update the content of the divs with the received data
    document.getElementById("date").innerHTML = (convertNewlinesToBreaks(data.date || ''));
    document.getElementById("performance").innerHTML = (convertNewlinesToBreaks(data.performance || ''));
    document.getElementById("conductor").innerHTML = '<span>CONDUCTOR </span>' + (convertNewlinesToBreaks(data.conductor || ''));
    document.getElementById("version").innerHTML = (convertNewlinesToBreaks(data.version || ''));
    document.getElementById("overlay").innerHTML = '<div class="' + (convertNewlinesToBreaks(data.updating || '')) + '"><img src="LogoWhite.png"><span>The covering is not ready yet. Please check back again shortly.</span></div>';
    document.getElementById("youngSimbaPerforming").innerHTML = (convertNewlinesToBreaks(data.youngSimbaPerforming || ''));
    document.getElementById("youngNalaPerforming").innerHTML = (convertNewlinesToBreaks(data.youngNalaPerforming || ''));
    document.getElementById("youngSimbaStandby").innerHTML = (convertNewlinesToBreaks(data.youngSimbaStandby || ''));
    document.getElementById("youngNalaStandby").innerHTML = (convertNewlinesToBreaks(data.youngNalaStandby || ''));
    document.getElementById("cast1").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast1name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast1role || '')) + '">' + (convertNewlinesToBreaks(data.cast1role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast1cover || ''));
    document.getElementById("cast2").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast2name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast2role || '')) + '">' + (convertNewlinesToBreaks(data.cast2role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast2cover || '')); 
    document.getElementById("cast3").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast3name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast3role || '')) + '">' + (convertNewlinesToBreaks(data.cast3role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast3cover || '')); 
    document.getElementById("cast4").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast4name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast4role || '')) + '">' + (convertNewlinesToBreaks(data.cast4role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast4cover || '')); 
    document.getElementById("cast5").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast5name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast5role || '')) + '">' + (convertNewlinesToBreaks(data.cast5role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast5cover || '')); 
    document.getElementById("cast6").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast6name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast6role || '')) + '">' + (convertNewlinesToBreaks(data.cast6role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast6cover || '')); 
    document.getElementById("cast7").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast7name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast7role || '')) + '">' + (convertNewlinesToBreaks(data.cast7role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast7cover || '')); 
    document.getElementById("cast8").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast8name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast8role || '')) + '">' + (convertNewlinesToBreaks(data.cast8role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast8cover || '')); 
    document.getElementById("cast9").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast9name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast9role || '')) + '">' + (convertNewlinesToBreaks(data.cast9role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast9cover || '')); 
    document.getElementById("cast10").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast10name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast10role || '')) + '">' + (convertNewlinesToBreaks(data.cast10role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast10cover || '')); 
    document.getElementById("cast11").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast11name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast11role || '')) + '">' + (convertNewlinesToBreaks(data.cast11role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast11cover || '')); 
    document.getElementById("cast12").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast12name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast12role || '')) + '">' + (convertNewlinesToBreaks(data.cast12role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast12cover || '')); 
    document.getElementById("cast13").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast13name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast13role || '')) + '">' + (convertNewlinesToBreaks(data.cast13role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast13cover || '')); 
    document.getElementById("cast14").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast14name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast14role || '')) + '">' + (convertNewlinesToBreaks(data.cast14role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast14cover || '')); 
    document.getElementById("cast15").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast15name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast15role || '')) + '">' + (convertNewlinesToBreaks(data.cast15role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast15cover || '')); 
    document.getElementById("cast16").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast16name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast16role || '')) + '">' + (convertNewlinesToBreaks(data.cast16role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast16cover || '')); 
    document.getElementById("cast17").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast17name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast17role || '')) + '">' + (convertNewlinesToBreaks(data.cast17role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast17cover || '')); 
    document.getElementById("cast18").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast18name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast18role || '')) + '">' + (convertNewlinesToBreaks(data.cast18role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast18cover || '')); 
    document.getElementById("cast19").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast19name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast19role || '')) + '">' + (convertNewlinesToBreaks(data.cast19role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast19cover || '')); 
    document.getElementById("cast20").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast20name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast20role || '')) + '">' + (convertNewlinesToBreaks(data.cast20role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast20cover || '')); 
    document.getElementById("cast21").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast21name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast21role || '')) + '">' + (convertNewlinesToBreaks(data.cast21role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast21cover || '')); 
    document.getElementById("cast22").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast22name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast22role || '')) + '">' + (convertNewlinesToBreaks(data.cast22role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast22cover || '')); 
    document.getElementById("cast23").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast23name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast23role || '')) + '">' + (convertNewlinesToBreaks(data.cast23role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast23cover || '')); 
    document.getElementById("cast24").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.cast24name || '')) + '</div><div class="role ' + (convertNewlinesToBreaks(data.cast24role || '')) + '">' + (convertNewlinesToBreaks(data.cast24role || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.cast24cover || ''));  
    document.getElementById("swing1").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.swing1offname || '')) + '</div><div class="role">' + (convertNewlinesToBreaks(data.swing1offrole || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.swing1offcover || ''));
    document.getElementById("swing2").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.swing2offname || '')) + '</div><div class="role">' + (convertNewlinesToBreaks(data.swing2offrole || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.swing2offcover || ''));
    document.getElementById("swing3").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.swing3offname || '')) + '</div><div class="role">' + (convertNewlinesToBreaks(data.swing3offrole || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.swing3offcover || ''));
    document.getElementById("swing4").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.swing4offname || '')) + '</div><div class="role">' + (convertNewlinesToBreaks(data.swing4offrole || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.swing4offcover || ''));
    document.getElementById("swing5").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.swing5offname || '')) + '</div><div class="role">' + (convertNewlinesToBreaks(data.swing5offrole || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.swing5offcover || ''));
    document.getElementById("swing6").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.swing6offname || '')) + '</div><div class="role">' + (convertNewlinesToBreaks(data.swing6offrole || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.swing6offcover || ''));
    document.getElementById("swing7").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.swing7offname || '')) + '</div><div class="role">' + (convertNewlinesToBreaks(data.swing7offrole || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.swing7offcover || ''));
    document.getElementById("swing8").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.swing8offname || '')) + '</div><div class="role">' + (convertNewlinesToBreaks(data.swing8offrole || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.swing8offcover || ''));
    document.getElementById("swing9").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.swing9offname || '')) + '</div><div class="role">' + (convertNewlinesToBreaks(data.swing9offrole || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.swing9offcover || ''));
    document.getElementById("swing10").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.swing10offname || '')) + '</div><div class="role">' + (convertNewlinesToBreaks(data.swing10offrole || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.swing10offcover || ''));
    document.getElementById("swing11").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.swing11offname || '')) + '</div><div class="role">' + (convertNewlinesToBreaks(data.swing11offrole || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.swing11offcover || ''));
    document.getElementById("swing12").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.swing12offname || '')) + '</div><div class="role">' + (convertNewlinesToBreaks(data.swing12offrole || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.swing12offcover || ''));
    document.getElementById("swing13").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.swing13offname || '')) + '</div><div class="role">' + (convertNewlinesToBreaks(data.swing13offrole || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.swing13offcover || ''));
    document.getElementById("swing14").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.swing14offname || '')) + '</div><div class="role">' + (convertNewlinesToBreaks(data.swing14offrole || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.swing14offcover || ''));
    document.getElementById("swing15").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.swing15offname || '')) + '</div><div class="role">' + (convertNewlinesToBreaks(data.swing15offrole || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.swing15offcover || ''));
    document.getElementById("swing16").innerHTML = '<div class="name">' + (convertNewlinesToBreaks(data.swing16offname || '')) + '</div><div class="role">' + (convertNewlinesToBreaks(data.swing16offrole || '')) + '</div><div class="cover">' + (convertNewlinesToBreaks(data.swing16offcover || ''));
    document.getElementById("walkingCover1").innerHTML = (convertNewlinesToBreaks(data.walkignCover1 || ''));
    document.getElementById("walkingCover2").innerHTML = (convertNewlinesToBreaks(data.walkignCover2 || ''));
    document.getElementById("walkingCover3").innerHTML = (convertNewlinesToBreaks(data.walkignCover3 || ''));
    document.getElementById("fds1").innerHTML = (convertNewlinesToBreaks(data.fds1 || ''));
    document.getElementById("fds2").innerHTML = (convertNewlinesToBreaks(data.fds2 || ''));
    document.getElementById("fds3").innerHTML = (convertNewlinesToBreaks(data.fds3 || ''));
    document.getElementById("fds4").innerHTML = (convertNewlinesToBreaks(data.fds4 || ''));
    document.getElementById("fds5").innerHTML = (convertNewlinesToBreaks(data.fds5 || ''));
    document.getElementById("fds6").innerHTML = (convertNewlinesToBreaks(data.fds6 || ''));
    document.getElementById("mds1").innerHTML = (convertNewlinesToBreaks(data.mds1 || ''));
    document.getElementById("mds2").innerHTML = (convertNewlinesToBreaks(data.mds2 || ''));
    document.getElementById("mds3").innerHTML = (convertNewlinesToBreaks(data.mds3 || ''));
    document.getElementById("mds4").innerHTML = (convertNewlinesToBreaks(data.mds4 || ''));
    document.getElementById("mds5").innerHTML = (convertNewlinesToBreaks(data.mds5 || ''));
    document.getElementById("mds6").innerHTML = (convertNewlinesToBreaks(data.mds6 || ''));
    document.getElementById("fss1").innerHTML = (convertNewlinesToBreaks(data.fss1 || ''));
    document.getElementById("fss2").innerHTML = (convertNewlinesToBreaks(data.fss2 || ''));
    document.getElementById("fss3").innerHTML = (convertNewlinesToBreaks(data.fss3 || ''));
    document.getElementById("fss4").innerHTML = (convertNewlinesToBreaks(data.fss4 || ''));
    document.getElementById("fss5").innerHTML = (convertNewlinesToBreaks(data.fss5 || ''));
    document.getElementById("fss6").innerHTML = (convertNewlinesToBreaks(data.fss6 || ''));
    document.getElementById("mss1").innerHTML = (convertNewlinesToBreaks(data.mss1 || ''));
    document.getElementById("mss2").innerHTML = (convertNewlinesToBreaks(data.mss2 || ''));
    document.getElementById("mss3").innerHTML = (convertNewlinesToBreaks(data.mss3 || ''));
    document.getElementById("mss4").innerHTML = (convertNewlinesToBreaks(data.mss4 || ''));
    document.getElementById("mss5").innerHTML = (convertNewlinesToBreaks(data.mss5 || ''));
    document.getElementById("mss6").innerHTML = (convertNewlinesToBreaks(data.mss6 || ''));
    document.getElementById("notes").innerHTML = (convertNewlinesToBreaks(data.notes || ''));
    document.getElementById("afterWarmUp").innerHTML = (convertNewlinesToBreaks(data.afterWarmUp || ''));




  }
});



document.addEventListener('DOMContentLoaded', function() {
    // Set an interval to reload the page every 45 minutes (2700000 milliseconds)
    setInterval(function() {
        window.location.reload();
    }, 60000);
});




