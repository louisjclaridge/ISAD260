    function login() 
    {
    	var emailValue = document.getElementById('email').value;	//defining values for email/passwords fields
    	var password = document.getElementById('pass').value;

      //Statement to A( Make sure the username and password is correct B( the email contains an @ symbol and C( that the email field is not empty
      if (emailValue == 'example@email.com' && password == 'password') 
      {
        	window.location = 'secure.html';
      }
      else
      {
      	if (emailValue.indexOf('@') == -1 && emailValue != '')
      	{
      		alert('Please enter a valid email')
        }
        else
        {
      	alert('Username/Password Incorrect')
      	}
      }
      //returning false to trick the page into not refreshing and nulling all the actions of the script
      return false;
    }

    function notImplemented()
    {
    	alert('Feature not yet implemented')
    }

    function notAvailable()
    {
    	alert('Page not available')
    }

