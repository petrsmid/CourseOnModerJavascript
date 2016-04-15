//Comparisons

//Q: What is the difference between =, == and ===    and   !=  and !==

//EXERCISE: bet what evaluates to true and what to false
var x;
x =   5 == "5";                       console.log("5 == \"5\"                  "+x);
x =   5 === "5";                      console.log("5 === \"5\"                 "+x);
x =   "false" == false;               console.log("\"false\" == false          "+x);
x =   null == "null";                 console.log("null == \"null\"            "+x);
x =   undefined == "undefined";       console.log("undefined == \"undefined\"  "+x);
x =   "abc" == true;                     console.log("\"abc\" == true                "+x );
x =   "" == false;                    console.log("\"\" == false               "+x);
x =   {} == true;                    console.log("{} == true               "+x);
x =   {a:10} == true;                 console.log("{a:10} == true            "+x);
x =   [] == false;                    console.log("[] == false               "+x);
x =   [] == "";                       console.log("[] == \"\"                  "+x);
x =   null == undefined;              console.log("null == undefined         "+x);
x =   null === undefined;             console.log("null === undefined        "+x);

