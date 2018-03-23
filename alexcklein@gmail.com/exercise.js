var exercise = {};

exercise.countRecords = function(data){
    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------
    console.log(chicago);
    return data.length; 
};

exercise.countDistrictCrimes = function(data,district){
    var crimes=0;
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------
    //console.log(data);
    data.forEach(function(crime){ 
        if(crime[19] === district){
            crimes++;
        } 
    });

    return crimes; 
};

exercise.countPrimaryType = function(data,primaryType){
      //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    var crimesPrimary=0;
    data.forEach(function(crime){ 
        if(crime[13] === primaryType){
            crimesPrimary++;
        } 
    });
    return crimesPrimary; 
};
  

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    var location=0;
    data.forEach(function(crime){ 
        if(crime[29] === location){
            location++;
        } 
    });
    return location; 
};

exercise.buildLatLngPoint = function(crime){
    //-------------------------------------------
    // YOUR CODE
    // build the point for the given crime
    // 
    // For example:
    //
    var point = {};    
    point.latitude = crime[26];
    point.longitude = crime[28];
    return point;    
    
    return 'Error: buildLatLngPoint not implemented';
};




