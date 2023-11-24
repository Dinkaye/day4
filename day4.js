//1.Write a code which can give grades to students according to theirs scores:
let result=prompt('Enter result','exa=50');
switch (true) {
    case result>=0 && result<50:
        console.log('F');
        break;
    case result<60 && result>=50: 
        console.log('D');
        break;
    case result<70&&result>=60:
        console.log(`C`);
        break;
    case result>=70&&result<80:
        console.log(`B`);
        break;
    case result>=80&&result<=100:
        console.log(`A`)
        break;
    default:
        console.log('wrong input')  
    } 
  //2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
  let enter_month=prompt('Enter month','exa=september');
  let month=enter_month.toLowerCase();
if (month=='september' || month=='october' || month=='november') {
    console.log('Autumn')
  } else if (month=='december' || month=='january' || month=='february') {
    console.log('winter')
  } else if (month=='march' || month=='april' || month=='may') {
    console.log(`spring`)
  } else if(month=='june' || month=='july' || month=='august') {
    console.log(`summer`)
  }
  //3.Check if a day is weekend day or a working day. Your script will take day as an input.
  let day=prompt('what is the day today','exa:monday');
  let enterd_day=day.toLowerCase();
  if (enterd_day=='saturday' || enterd_day=='sunday') {
    console.log(enterd_day,'is a weekend')
  } else {
    console.log(enterd_day,'is a working day')
  }
  //exercise 3 1.Write a program which tells the number of days in a month
  let months=prompt('enter a month','september');
  let monthss=months.toLowerCase();
  if(monthss=='september' || monthss=='april' || monthss=='november' || monthss=='june'){
    console.log(monthss,'has 30 days')
  } else if(monthss=='february'){
    console.log(monthss,'has 28 days')
  } else{
    console.log(mothss,'has 31 days')
  }