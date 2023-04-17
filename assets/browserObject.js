const firstName = prompt("Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");
const language = prompt("Kamu bisa berbahasa apa?");

const user = {
    name : {
        first : firstName,
        last : lastName,
    },
    language : language
};

if(user.language === "English"){
    alert("Nice to meet you " + user.name.first +" "+ user.name.last + "!");
}else if(user.language === "French"){
    alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
}else if(user.language === "Japan"){
    alert("Hajimemashite " + user.name.first +" "+user.name.last + "!");
}else{
    alert("Senang bertemu dengan anda " + user.name.first +" "+ user.name.last + "!");
};