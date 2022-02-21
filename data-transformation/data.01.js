const schools = [
  { name: 'Yorktown' },
  { name: 'Stratford' },
  { name: 'Washington & Liberty' },
  { name: 'Wakefield' },
];

const highSchools = schools.map((school) => ({ name: school.name }));
console.log(highSchools);

const editName = (oldName, name, arr) =>
  arr.map((item) => (item.name === oldName ? { ...item, name } : item));

const updateName = editName('Stratford', 'Paulo César Nova A', schools);

console.log(updateName);

/* Let’s say we needed to transform the schools object into an array of
schools:
 */

const schools = {
  Yorktown: 10,
  'Washington & Liberty': 2,
  Wakefield: 5,
};

const schoolArray = Object.keys(schools).map((key) => ({
  name: key,
  wins: schools[key],
}));

console.log(schoolArray);

/* [
  { name: 'Yorktown', wins: 10 },
  { name: 'Washington & Liberty', wins: 2 },
  { name: 'Wakefield', wins: 5 }
 */

//REDUCE

const ages = [21, , 18, 42, 40, 64, 63, 34];

const maxAge = ages.reduce((max, value) => (value > max ? value : max), 0);

console.log('Max age is ' + maxAge);

/* 
max = 0
21 > 0 = true, return 21
18 > 21 = false return 21,  
42 > 21 = true 
40 > 42 = false 
64 > 40 = true 
63 > 64 = false
34 > 63 = false 
maxAge is 75
*/

const colors = [
  {
    id: 'xekare',
    title: 'rad red',
    rating: 3,
  },
  {
    id: 'jbwsof',
    title: 'big blue',
    rating: 2,
  },
];

const hashColors = colors.reduce((hash, { id, title, rating }) => {
  hash[id] = { title, rating };
  return hash;
}, {});

console.log(hashColors);

