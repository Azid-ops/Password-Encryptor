const encryption = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];

let newPassword = "";
let comparePassword = "";

const password = {
    encrypt : (pass) => {
        for(let i=0;i<pass.length;i++)
        {
            for(let j=0;j<encryption.length;j++)
            {
                if(pass[i] === encryption[j])
                {
                    if(pass[i] === "A")
                    {
                        newPassword += "a4t%";
                    }

                    if(pass[i] === "a")
                    {
                        newPassword += "p(e&";
                    }

                    if(pass[i] === "B")
                    {
                        newPassword += "t&8!";
                    }

                    if(pass[i] === "b")
                    {
                        newPassword += "2{l&";
                    }

                    if(pass[i] === "C")
                    {
                        newPassword += "p&d2";
                    }

                    if(pass[i] === "c")
                    {
                        newPassword += "_+s$";
                    }

                    if(pass[i] === "D")
                    {
                        newPassword += "n*d7";
                    }

                    if(pass[i] === "d")
                    {
                        newPassword += "7N%6";
                    }

                    if(pass[i] === "E")
                    {
                        newPassword += "s(d)";
                    }

                    if(pass[i] === "e")
                    {
                        newPassword += ")cb3";
                    }

                    if(pass[i] === "F")
                    {
                        newPassword += "_8g'";
                    }

                    if(pass[i] === "f")
                    {
                        newPassword += "1`~f";
                    }

                    if(pass[i] === "G")
                    {
                        newPassword += "#v:;";
                    }

                    if(pass[i] === "g")
                    {
                        newPassword += "#v:t";
                    }

                    if(pass[i] === "H")
                    {
                        newPassword += "o^!n";
                    }

                    if(pass[i] === "H")
                    {
                        newPassword += "o7!n";
                    }

                    if(pass[i] === "I")
                    {
                        newPassword += "{jm)";
                    }

                    if(pass[i] === "i")
                    {
                        newPassword += "d2!>";
                    }

                    if(pass[i] === "J")
                    {
                        newPassword += "y#5q";
                    }

                    if(pass[i] === "j")
                    {
                        newPassword += "y<5q";
                    }

                    if(pass[i] === "K")
                    {
                        newPassword += "c4l4";
                    }

                    if(pass[i] === "k")
                    {
                        newPassword += "c_l4";
                    }

                    if(pass[i] === "L")
                    {
                        newPassword += "*8n`";
                    }

                    if(pass[i] === "l")
                    {
                        newPassword += "*on`";
                    }

                    if(pass[i] === "M")
                    {
                        newPassword += ")p|9";
                    }

                    if(pass[i] === "m")
                    {
                        newPassword += ")}|9";
                    }

                    if(pass[i] === "N")
                    {
                        newPassword += "*k/6";
                    }

                    if(pass[i] === "n")
                    {
                        newPassword += "=>/6";
                    }

                    if(pass[i] === "O")
                    {
                        newPassword += "o,.7";
                    }

                    if(pass[i] === "o")
                    {
                        newPassword += "o<.7";
                    }

                    if(pass[i] === "P")
                    {
                        newPassword += "6~+y";
                    }

                    if(pass[i] === "p")
                    {
                        newPassword += "687y";
                    }

                    if(pass[i] === "Q")
                    {
                        newPassword += "-bq*";
                    }

                    if(pass[i] === "q")
                    {
                        newPassword += "-bq*";
                    }

                    if(pass[i] === "R")
                    {
                        newPassword += "l@o.";
                    }

                    if(pass[i] === "r")
                    {
                        newPassword += "lp*%";
                    }

                    if(pass[i] === "S")
                    {
                        newPassword += "z,-=";
                    }

                    if(pass[i] === "s")
                    {
                        newPassword += "z,==";
                    }

                    if(pass[i] === "T")
                    {
                        newPassword += "p:&6";
                    }

                    if(pass[i] === "t")
                    {
                        newPassword += "pL&6";
                    }

                    if(pass[i] === "U")
                    {
                        newPassword += "'LU&";
                    }

                    if(pass[i] === "u")
                    {
                        newPassword += "':U&";
                    }

                    if(pass[i] === "V")
                    {
                        newPassword += "Q=>2";
                    }

                    if(pass[i] === "v")
                    {
                        newPassword += "Pl>2";
                    }

                    if(pass[i] === "W")
                    {
                        newPassword += "0)(y";
                    }

                    if(pass[i] === "w")
                    {
                        newPassword += "0p(y";
                    }

                    if(pass[i] === "X")
                    {
                        newPassword += "Q%b?";
                    }

                    if(pass[i] === "x")
                    {
                        newPassword += "_+b?";
                    }

                    if(pass[i] === "Y")
                    {
                        newPassword += "/a(2";
                    }

                    if(pass[i] === "y")
                    {
                        newPassword += "/tt2";
                    }

                    if(pass[i] === "Z")
                    {
                        newPassword += "&qN^";
                    }

                    if(pass[i] === "z")
                    {
                        newPassword += "&pa^";
                    }
                }
            }
        }
        return newPassword;
    },

    compare : (pass,comparedPassword) => {
        for(let i=0;i<pass.length;i++)
        {
            for(let j=0;j<encryption.length;j++)
            {
                if(pass[i] === encryption[j])
                {
                    if(pass[i] === "A")
                    {
                        comparePassword += "a4t%";
                    }

                    if(pass[i] === "a")
                    {
                        comparePassword += "p(e&";
                    }

                    if(pass[i] === "B")
                    {
                        comparePassword += "t&8!";
                    }

                    if(pass[i] === "b")
                    {
                        comparePassword += "2{l&";
                    }

                    if(pass[i] === "C")
                    {
                        comparePassword += "p&d2";
                    }

                    if(pass[i] === "c")
                    {
                        comparePassword += "_+s$";
                    }

                    if(pass[i] === "D")
                    {
                        comparePassword += "n*d7";
                    }

                    if(pass[i] === "d")
                    {
                        comparePassword += "7N%6";
                    }

                    if(pass[i] === "E")
                    {
                        comparePassword += "s(d)";
                    }

                    if(pass[i] === "e")
                    {
                        comparePassword += ")cb3";
                    }

                    if(pass[i] === "F")
                    {
                        comparePassword += "_8g'";
                    }

                    if(pass[i] === "f")
                    {
                        comparePassword += "1`~f";
                    }

                    if(pass[i] === "G")
                    {
                        comparePassword += "#v:;";
                    }

                    if(pass[i] === "g")
                    {
                        comparePassword += "#v:t";
                    }

                    if(pass[i] === "H")
                    {
                        comparePassword += "o^!n";
                    }

                    if(pass[i] === "H")
                    {
                        comparePassword += "o7!n";
                    }

                    if(pass[i] === "I")
                    {
                        comparePassword += "{jm)";
                    }

                    if(pass[i] === "i")
                    {
                        comparePassword += "d2!>";
                    }

                    if(pass[i] === "J")
                    {
                        comparePassword += "y#5q";
                    }

                    if(pass[i] === "j")
                    {
                        comparePassword += "y<5q";
                    }

                    if(pass[i] === "K")
                    {
                        comparePassword += "c4l4";
                    }

                    if(pass[i] === "k")
                    {
                        comparePassword += "c_l4";
                    }

                    if(pass[i] === "L")
                    {
                        comparePassword += "*8n`";
                    }

                    if(pass[i] === "l")
                    {
                        comparePassword += "*on`";
                    }

                    if(pass[i] === "M")
                    {
                        comparePassword += ")p|9";
                    }

                    if(pass[i] === "m")
                    {
                       comparePassword += ")}|9";
                    }

                    if(pass[i] === "N")
                    {
                        comparePassword += "*k/6";
                    }

                    if(pass[i] === "n")
                    {
                        comparePassword += "=>/6";
                    }

                    if(pass[i] === "O")
                    {
                        comparePassword += "o,.7";
                    }

                    if(pass[i] === "o")
                    {
                        comparePassword += "o<.7";
                    }

                    if(pass[i] === "P")
                    {
                        comparePassword += "6~+y";
                    }

                    if(pass[i] === "p")
                    {
                        comparePassword += "687y";
                    }

                    if(pass[i] === "Q")
                    {
                        comparePassword += "-bq*";
                    }

                    if(pass[i] === "q")
                    {
                        comparePassword += "-bq*";
                    }

                    if(pass[i] === "R")
                    {
                        comparePassword += "l@o.";
                    }

                    if(pass[i] === "r")
                    {
                        comparePassword += "lp*%";
                    }

                    if(pass[i] === "S")
                    {
                        comparePassword += "z,-=";
                    }

                    if(pass[i] === "s")
                    {
                        comparePassword += "z,==";
                    }

                    if(pass[i] === "T")
                    {
                        comparePassword += "p:&6";
                    }

                    if(pass[i] === "t")
                    {
                        comparePassword += "pL&6";
                    }

                    if(pass[i] === "U")
                    {
                        comparePassword += "'LU&";
                    }

                    if(pass[i] === "u")
                    {
                        comparePassword += "':U&";
                    }

                    if(pass[i] === "V")
                    {
                        comparePassword += "Q=>2";
                    }

                    if(pass[i] === "v")
                    {
                        comparePassword += "Pl>2";
                    }

                    if(pass[i] === "W")
                    {
                        comparePassword += "0)(y";
                    }

                    if(pass[i] === "w")
                    {
                        comparePassword += "0p(y";
                    }

                    if(pass[i] === "X")
                    {
                        comparePassword += "Q%b?";
                    }

                    if(pass[i] === "x")
                    {
                        comparePassword += "_+b?";
                    }

                    if(pass[i] === "Y")
                    {
                        comparePassword += "/a(2";
                    }

                    if(pass[i] === "y")
                    {
                        comparePassword += "/tt2";
                    }

                    if(pass[i] === "Z")
                    {
                        comparePassword += "&qN^";
                    }

                    if(pass[i] === "z")
                    {
                        comparePassword += "&pa^";
                    }
                }
            }
        }

        if(comparedPassword === comparePassword)
        {
            return true;
        }

        else
        {
            return false;
        }
    },

    checkLength :(pass) => {
        return pass.length;
    }
}

module.exports = password;