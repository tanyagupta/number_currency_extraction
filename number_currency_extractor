function get_numbers (str_array, extract) {
  var numbers_data = {all_numbers:[], currency:""};
  
  for (s in str_array) {
    var potential_number = str_array[s];
    var currency_regex = /\$|[\u00A3,\u00A5, \u20A1]/;// add the unicode of the currency symbol you want
    if (potential_number.search(currency_regex)==0) {
      var a_number = extract(potential_number.slice(1));
      if (a_number){
        numbers_data['all_numbers'].push(a_number);
        numbers_data['currency']=potential_number[0];
      }
    }
    else {
      var a_number = extract(potential_number);
      if (a_number){
        numbers_data['all_numbers'].push(a_number);
      }
    }
  }
      
    
  return numbers_data;


}


function extract_dot_system (number_string) {
    var extracted_num;
    if (number_string.indexOf(',') <0) {
      extracted_num = Number (number_string)
    } 
    else {
      number_string = number_string.replace(',','');
      extracted_num = Number (number_string)
    }
    return extracted_num;
  }



function extract_comma_system (number_string) {
    
  number_string =translate(number_string)
  //Logger.log(number_string)
  var extracted_num;
    if (number_string.indexOf(',') <0) {
      extracted_num = Number (number_string)
    } 
    else {
      number_string = number_string.replace(',','');
      extracted_num = Number (number_string)
    }
    return extracted_num;
  }







function translate (string) {
  
  //string = '123.456.789,01'
  var new_str =""
  
  for (var i=0; i<string.length;i++) {
    var change='';
    if (string[i]==',')
      change = '.'
    else if (string [i] =='.')
      change =','
    
    if (change.length >0)
      new_str = new_str+ change
     else
       new_str = new_str+string[i];
  }
  
  return new_str;
  
  
}









function test_numbers () {
  
  
  var str_array = ['£123', '51,123.5', '$34.5561']
  var spanish = ['¥125.502,6']
  
  //var currency_regex = /\$|[\u20A1]/;// add the unicode of the currency symbol you want
  //Logger.log(spanish[0].search(currency_regex));
  
 Logger.log(get_numbers(spanish, extract_comma_system));
  
  
}
