# LinkedIn-Javascript

OBJECTS HAS PROPERTIES THAT HAS METHODS

A backpack (OBJECT), has a color, volume, pockets (PROPERTIES), that can adjust the straps, zippers that can open and close pockets and a lid that can open and close (METHODS).

OBJECTS (nouns): Backpacks, animals, things.

PROPERTIES (adjectives): Color, volume, number of pockets.

METHODS (verbs, PROPERTY-CHANGING FEATURES, WHAT CAN THE OBJECTS PROPERTIES DO?): "I can... open and close the lid and pockets, adjust straps etc"

const backpack = { ----------------------------OBJECT VARIABLE
name: "Everyday Backpack", --------------------STRING PROPERTY
volume: 30, -----------------------------------NUMBER PROPERTY
lidOpen: false, -------------------------------BOOLEAN PROPERTY
zipperOpen: true, -----------------------------BOOLEAN PROPERTY
strapLength: { --------------------------------SUB-OBJECT
left: 26,  
 right: 26,
},
toggleLid: function (lidStatus) { -------------METHOD (A PROPERTY CONTAINING FUNCTIONS)
this.lidOpen = lidStatus;
},
newStrapLength: function(lengthLeft, lengthRight) {
this.strapLength.left = lengthLeft;
this.strapLength.right = lengthRight;
},
};

const = constant // YOU CAN ONLY CHANGE THE PROPERTIES NOT THE VARIABLE ITSELF
