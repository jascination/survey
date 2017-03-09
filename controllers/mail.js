var helper = require('sendgrid').mail;
var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
var mailchimp = require('mailchimp-v3');
    mailchimp.setApiKey(process.env.MAILCHIMP_API);


exports.sendMail = (req, res) => {
      

    var data = req.body;
    console.log(data);

    if(!data.email || !data.message){
        res.sendStatus(500);
        return;
    }

    from_email = new helper.Email(data.email);
    to_email = new helper.Email("theworkculturesurvey@gmail.com");
    subject = "Someone Loves you!";
    content = new helper.Content("text/plain", "From: " + data.name + "\n\n Message: \n" + data.message);
    mail = new helper.Mail(from_email, subject, to_email, content);

    
    var request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: mail.toJSON()
    });

    sg.API(request, function(error, response) {
      console.log(response.statusCode);
      console.log(response.body);
      console.log(response.headers);
      res.sendStatus(200);
    })


};


 

exports.addToList = function(req, res){
    var email = req.body.email;
    var list = '578aede109';
     
    console.log(req.body);

    if(!req.body.email){
        res.sendStatus(500);
        return;
    }else{

        mailchimp.post('lists/' + list + '/members', {
          email_address : req.body.email,
          status        : 'subscribed'
        })
        .then(function(result){
            console.log("Good")
            console.log(result);
            res.sendStatus(200);
          })
        .catch(function(error){
            console.log("Error")
            console.log(error);
            res.sendStatus(500);
        });
    }

}


  