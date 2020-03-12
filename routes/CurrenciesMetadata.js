module.exports = (app, axios, NomiceModel_currency) => {

    app.get("/Currencis/values/uploding", (req, res) => {
        let count = 0
        axios
            .get("https://api.nomics.com/v1/currencies?key="+process.env.NOMICS_API_KEY)
            .then((response) => {
                let currencies_list = response.data
                
                // console.log(currencies_list);
                for (Dict_Elements of currencies_list) {

                    var data = new NomiceModel_currency(Dict_Elements)
                    data.save(function (err, currencies_values) {
                      if (err) return console.error(err);
                      console.log("Done..",count++);
                    });

                }
                console.log(currencies_list.length,"All data length..");
                res.send(currencies_list)

            }).catch((reject) => {
                console.log(reject);
                
                res.send(reject)
            })
    })

    app.get('/currencie_values',(req,res)=>{
        NomiceModel_currency.find({},(err,data)=>{
            if (err) {
                console.log(err);
                
            }
            console.log(data.length);
            
            res.send(data)
        })
    })
}