// Creation de guides basée sur la sélection (et/ou) la taille
#target photoshop
if (app.documents.length > 0) {
var myDocument = app.activeDocument;
var originalRulerUnits = app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.POINTS;
//fonction hasSelection(doc)
var res = false;
var as = myDocument.activeHistoryState;
myDocument.selection.deselect();
if (as != myDocument.activeHistoryState) {
res = true;
myDocument.activeHistoryState = as;
};

if (res == true) {
var mySelection = myDocument.selection;
var myBounds = mySelection.bounds
}

else {
var myLayer = myDocument.activeLayer;
var myBounds = myLayer.bounds
};
// crée les guides;
vertGuide (myDocument, myBounds[0] );
horGuide (myDocument, myBounds[1] );
vertGuide (myDocument, myBounds[2] );
horGuide (myDocument, myBounds[3] );
// ajoute des guides au centre du document (désactivées)
//vertGuide (myDocument, myBounds[0] + (myBounds[2] - myBounds[0])/2 );
//horGuide (myDocument, myBounds[1] + (myBounds[3] - myBounds[1])/2 );
// restore les prefs
app.preferences.rulerUnits = originalRulerUnits
}
else {
alert ("Il n'y a pas de document ouvert!")
};
////// fonction vertical guide
function vertGuide (doc, x) {
// =======================================================
var idMk = charIDToTypeID( "Mk  " );
    var desc3 = new ActionDescriptor();
    var idNw = charIDToTypeID( "Nw  " );
        var desc4 = new ActionDescriptor();
        var idPstn = charIDToTypeID( "Pstn" );
        var idRlt = charIDToTypeID( "#Rlt" );
        desc4.putUnitDouble( idPstn, idRlt, x );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idVrtc = charIDToTypeID( "Vrtc" );
        desc4.putEnumerated( idOrnt, idOrnt, idVrtc );
    var idGd = charIDToTypeID( "Gd  " );
    desc3.putObject( idNw, idGd, desc4 );
executeAction( idMk, desc3, DialogModes.NO );
};
////// fonction horizontal guide
function horGuide (doc, y) {
// =======================================================
var idMk = charIDToTypeID( "Mk  " );
    var desc5 = new ActionDescriptor();
    var idNw = charIDToTypeID( "Nw  " );
        var desc6 = new ActionDescriptor();
        var idPstn = charIDToTypeID( "Pstn" );
        var idRlt = charIDToTypeID( "#Rlt" );
        desc6.putUnitDouble( idPstn, idRlt, y );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idHrzn = charIDToTypeID( "Hrzn" );
        desc6.putEnumerated( idOrnt, idOrnt, idHrzn );
    var idGd = charIDToTypeID( "Gd  " );
    desc5.putObject( idNw, idGd, desc6 );
executeAction( idMk, desc5, DialogModes.NO );
}