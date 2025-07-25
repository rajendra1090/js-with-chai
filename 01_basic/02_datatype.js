//Premitive Data Type
//number  till 2 to power 53
//bigint   
//var bigInt= 12343413412341234n
//boolean= True/False
//string=""
//null = Standalone value
//undefind
//symbol= unquie
let unquieSymbol= Symbol("111");
let unquieSymbol1= Symbol("111");
console.log(unquieSymbol)

// Non Premitive type
//object

//console.log(typeof "Rajendra"); //String
//console.log(typeof null); //object
//console.log(typeof undefined); //undefined

// ----------------* Premitive Datatypes------------

//                   Type                                   typeof

// i)             Number                               number
// ii)            String                                   string
// iii)           Boolean                               boolean
// iv)           Bigint                                   bigint
// v)            Symbol                                symbol
// vi)           Null                                      object
// vii)          Undefined                           undefined


// * -------Non-Premitive OR Referance OR Object datatype------

//                   Type                                   typeof

// i)               Object                                object
// ii)              Array                                  object
// iii)             Function                            function(object)

//Memory Management
//Primitive types (numbers, booleans, strings) are stored in stack memory, while non-primitive types (objects) are stored in heap memory.

//Stack memory operates on a Last-In-First-Out (LIFO) principle, whereas heap memory uses dynamic allocation.

//Variable Behavior
//Changes to primitive type variables create copies, not affecting the original, while changes to non-primitive type variables affect all references.
