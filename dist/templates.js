angular.module("coder-dojo-signup").run(["$templateCache", function($templateCache) {$templateCache.put("app/accept/accept.html","<div class=container><div class=row><div class=\"col-md-6 col-md-offset-3\"><h1>Congratulations!</h1><h5 class=text-center>You have successfully signed up for the Coder Dojo Girls Event at Bankwest on October 5. You should receive a calendar invite soon and if you have any further questions please contact us at: coderdojo@bankwest.com.au</h5></div></div></div>");
$templateCache.put("app/closed/closed.html","<div class=container><div class=row><div class=\"col-md-6 col-md-offset-3\"><h1>Sign ups are closed</h1><h5 class=text-center>Thank you for your interest in Bankwest Coder Dojo. We regret to inform you that sign ups are now closed. We have either reached capacity or the registration time period has passed. Keep an eye out for ways to get involved in Bankwest Coder Dojo events in the future.</h5><br><h5 class=text-center>For more information contact:&nbsp;<b>coderdojo@bankwest.com.au</b></h5></div></div></div>");
$templateCache.put("app/form/form.html","<div class=container><div class=row><h1 class=col-sm-12>Coder Dojo @ Bankwest Term 3 Sign Up</h1></div><div class=row><p>Coder Dojo is a series of free programming classes for kids aged 6-17 held on the Podium level of Bankwest place. It is open to Bankwest and Commonwealth Bank colleagues and friends so feel free to invite anyone else; as long as they have a way of getting into the building.</p><p>Term 3 will be starting on the 4th of August and will run weekly from 4:30-6:00pm on Tuesdays for 6 weeks.</p><p><strong>Please note that children 11 years old or younger will need to be accompanied by a guardian.</strong></p><p>We will be doing a majority of the activities on laptops, the ninjas can bring in their own or we can supply them, just make sure you tick the \'Laptop Required\' field.</p></div><form ng-submit=registerNinja()><div class=\"form-group col-sm-12 col-md-6\"><label for=userName class=control-label>Your Name</label> <input type=text class=form-control id=userName ng-model=signup.name required></div><div class=\"form-group col-sm-12 col-md-6\"><label for=userEmail class=control-label>Your Email</label> <input type=email class=form-control id=userEmail ng-model=signup.email required></div><h3>Ninja Information</h3><div class=row><div class=col-xs-12 ng-repeat=\"ninja in signup.ninjaInformation\"><div class=\"col-sm-5 col-xs-8\"><div class=form-group><label for=ninjaName class=control-label>Name</label> <input type=text class=form-control id=ninjaName ng-model=ninja.name required></div></div><div class=\"col-sm-2 col-xs-4\"><div class=form-group><label for=ninjaAge class=control-label>Age</label> <input type=number class=form-control id=ninjaAge min=6 max=17 ng-model=ninja.age required></div></div><div class=\"col-sm-3 col-xs-6\"><div class=form-group><label for=ninjaLaptop class=control-label>Laptop Required</label> <input type=checkbox class=\"control-checkbox form-control\" id=ninjaLaptop ng-model=ninja.laptopRequired></div></div><div class=\"col-sm-2 col-xs-6\"><button type=button class=\"btn btn-danger btn-remove\" ng-click=removeNinja(ninja)>Remove</button></div></div></div><div class=row><div class=col-lg-12><button type=button ng-click=addNinja() class=\"btn btn-success\">Add Ninja</button></div></div><h3>Activities</h3><div class=row><div class=\"form-group col-lg-12\"><label for=activities class=control-label>We run a range of activities for the ninjas, what actvities would they be interested in? (Tick all that apply)</label><div class=checkbox ng-repeat=\"activity in signup.activities\"><label><input type=checkbox ng-model=activity.selected> {{activity.name}}</label></div></div></div><h3>Dietary Considerations</h3><div class=row><div class=\"form-group col-lg-12\"><label for=dietaryConsideration class=control-label>Some food may be supplied as part of Coder Dojo, do your Ninjas have any special dietary requirements?</label> <textarea rows=4 columns=50 id=dietaryConsideration ng-model=signup.dietaryConsiderations class=form-control></textarea></div></div><button type=submit class=\"btn btn-primary\">Submit</button></form></div>");
$templateCache.put("app/error/error.html","<div class=container><div class=row><div class=\"col-md-6 col-md-offset-3\"><h1>Error</h1><h5>An error has occurred, either try again or let us know that an error has occurred at coderdojo@bankwest.com.au.</h5></div></div></div>");
$templateCache.put("app/register/register.html","<div class=container><div class=\"row main-img\"><div class=\"col-md-2 col-md-offset-2 text\"><h2>5.10.2015</h2></div><div class=\"col-md-4 text-center\"><i class=\"fa fa-female fa-5x\"></i>&nbsp;&nbsp;&nbsp; <span><img src=images/coderdojo.png></span></div><div class=\"col-md-4 text time\"><h2>10am - 3pm</h2></div></div><div class=row><h3 class=\"col-md-6 col-md-offset-3 text-center\">Girls Coder Dojo Event</h3></div><div class=row><h5 class=\"col-md-6 col-md-offset-3 text-center closer\">Bankwest Place 300 Murray Street, Perth WA</h5></div><br><div class=row><div class=col-md-12><p>Coder Dojo is a programming club for young people between the ages of 7 and 17. At a Dojo, young people learn how to code, develop websites, apps, programs, build and program robots and explore technology in an informal and creative environment. The first ever Girls Coder Dojo Event at Bankwest is aimed to help bridge the gender gap in technology based fields for now and future generations. The event will be run by all female mentors actively working in the technology field who hope to inspire the female ninjas of Coder Dojo WA.</p><br><p>This is an exclusive event for female ninjas actively involved in a Coder Dojo in WA and space is limited, so you need a registration code to continue. If you do not have a registration code, please contact the Coder Dojo Champions of the Dojo you regularly attend. Thank you for your cooperation.</p></div></div><br><div class=row><div class=\"col-md-4 col-md-offset-4\"><form ng-submit=vm.submit()><div class=form-group><label for=code class=sr-only>Registration Code</label> <input type=text class=form-control id=code ng-model=vm.code placeholder=\"Registration Code\"></div><button type=submit class=\"btn btn-default\">Submit</button></form></div></div><br><br><div class=row><div class=\"col-md-12 text-center\"><p>For any other queries please contact us at <b>coderdojo@bankwest.com.au</b></p></div></div></div>");
$templateCache.put("app/view/view.html","<div class=container><table class=table><thead><tr><td>#</td><td>Name</td><td>Email</td><td>Ninja Name</td><td>Ninja Age</td><td>Laptop Required</td></tr></thead><tbody ng-repeat=\"parent in ninjas\"><tr><td></td><td>{{parent.name}}</td><td>{{parent.email}}</td><td colspan=3></td></tr><tr ng-repeat=\"ninja in parent.ninjaInformation\"><td>{{$index + 1}}</td><td colspan=2></td><td>{{ninja.name}}</td><td>{{ninja.age}}</td><td>{{ninja.laptopRequired}}</td></tr></tbody></table></div>");}]);