    //nodemailer is a variable which imports nodemailer module
    var nodemailer = require("nodemailer");
    //transporter is a variable that uses .createTransport method which help to build connection url nd have objects
    var transporter = nodemailer.createTransport({
    // service is the key to tell via gmail we want connection i.e gmail services are being used
    service: 'gmail',
    //auth is user's email and passowrd
    auth:{
    user :"",
    pass :""
    }
});
    //mailoptions is a variable that contain objects like sender's email,reciver's email,subject and text
    var mailoptions = {
    from :"",
    to:"",
    subject:"sending email using node.js",
    text:"finally got it"
};
//transporter is an object to send email using .sendMail method
    transporter.sendMail(mailoptions,(error,info)=>{
    if(error)
    //if error occurs then print the output
    {
        console.log(error);
    }
    else
    //else print email sent
    {
        console.log("email sent"+info.response);
    }
});