
module.exports = (app, express)=>
{
    app.get('/home', (req, res)=>
    {
    const dataForView = {title: "Medellin"}
    res.render('cont', dataForView);
    });

    app.get('/about', (req, res)=>
    {
    const dataForView = {title: "About"}
    res.render('index', dataForView);
    });
}
