import needle from 'needle';

needle.post(`http://localhost:3000/remove-user`,
    {stdnum: "8051495845"},
    (err, res) => {
    console.log(res.body);
});

// needle.post(`http://localhost:3000/remove-all-user`,
//     {},
//     (err, res) => {
//     console.log(res.body);
// });