const homelist=(req,res) => {
    res.render('index',{title:'Home'});

};
const locationinfo=(req,res) => {
    res.render('index',{title:'Locations info'});

};
const addReview=(req,res) => {
    res.render('index',{title:'Add Review'});

};


module.exports={
    homelist,
    locationinfo,
    addReview
  
};