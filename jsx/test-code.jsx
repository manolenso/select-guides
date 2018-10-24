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
var nbVert =  prompt("Nombre selections verticals?", "", "Verticales?" );
var nbHorz =  prompt("Nombre selections horizontals?", "", "Horizontales?" );
vertGuide (myDocument, myBounds[0] );
horGuide (myDocument, myBounds[1] );
vertGuide (myDocument, myBounds[2] );
horGuide (myDocument, myBounds[3] );
// ajoute des guides au centre du document

vertGuide (myDocument, myBounds[0] + (myBounds[2] - myBounds[0])/nbVert );
horGuide (myDocument, myBounds[1] + (myBounds[3] - myBounds[1])/nbHorz );
// restore les prefs
app.preferences.rulerUnits = originalRulerUnits
}
else {
alert ("Il n'y a pas de document ouvert!")
};
////// fonction tracer un guide vertical
function vertGuide (doc, x) {
// =======================================================
var idMk = charIDToTypeID( "Mk  " );
    var actDescript1 = new ActionDescriptor();
    var idNw = charIDToTypeID( "Nw  " );
        var actDescript2 = new ActionDescriptor();
        var idPstn = charIDToTypeID( "Pstn" );
        var idRlt = charIDToTypeID( "#Rlt" );
        actDescript2.putUnitDouble( idPstn, idRlt, x );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idVertical = charIDToTypeID( "Vrtc" );
        actDescript2.putEnumerated( idOrnt, idOrnt, idVertical );
    var idGd = charIDToTypeID( "Gd  " );
    actDescript1.putObject( idNw, idGd, actDescript2 );
executeAction( idMk, actDescript1, DialogModes.NO );
};
////// fonction tracer un guide horizontal
function horGuide (doc, y) {
// =======================================================
var idMk = charIDToTypeID( "Mk  " );
    var actDescript1 = new ActionDescriptor();
    var idNw = charIDToTypeID( "Nw  " );
        var actDescript2 = new ActionDescriptor();
        var idPstn = charIDToTypeID( "Pstn" );
        var idRlt = charIDToTypeID( "#Rlt" );
        actDescript2.putUnitDouble( idPstn, idRlt, y );
        var idHoriz = charIDToTypeID( "Hrzn" );
        actDescript2.putEnumerated( idOrnt, idOrnt, idHoriz );
    var idGd = charIDToTypeID( "Gd  " );
    actDescript1.putObject( idNw, idGd, actDescript2 );
executeAction( idMk, actDescript1, DialogModes.NO );
};