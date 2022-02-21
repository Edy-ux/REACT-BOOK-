/* In the next example, we’ll use recursion to iterate deeply into
an object to retrieve a nested value: */

const dan = {
    type: 'person',
    data: {
      gender: 'male',
      info: {
        id: 22,
        fullname: {
          first: 'Dan',
          last: 'Deacon',
        },
      },
    },
  };
  
  //recursion functions
  const deepPick = (fields, object = {}) => {
    const [first, ...remaining] = fields.split('.');
    console.log(object[first]);
    return remaining.length
      ? deepPick(remaining.join('.'), object[first])
      : console.log(object[first]);
  };
  
  deepPick('data.info.fullname.first', dan);
  //console.log(deepPick('data.info.fullname.last', dan))
  
  // First Iteration
  // first = "data"
  // remaining.join(".") = "info.fullname.first"
  // object[first] = { gender: "male", {info} }
  // Second Iteration
  // first = "info"
  // remaining.join(".") = "fullname.first"
  // object[first] = {id: 22, {fullname}}
  // Third Iteration
  // first = "fullname"
  // remaining.join("." = "first"
  // object[first] = {first: "Dan", last: "Deacon" }
  // Finally...
  // first = "first"
  // remaining.length = 0
  // object[first] = "Deacon"
  
