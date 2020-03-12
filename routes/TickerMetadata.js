module.exports = (app, axios, NomiceModel_ticker) => {
    app.get("/ticker/values/uploding", (req, res) => {
        axios
            .get("https://api.nomics.com/v1/currencies/ticker?key="+process.env.NOMICS_API_KEY)
            .then((resolve) => {
                let count = 0
                let ticker_list = resolve.data
                
                for (Dict_Elements of ticker_list) {
                    var data = new NomiceModel_ticker(Dict_Elements)

                    data.save(function (err, next_data) {
                        if (err) return console.error(err);
                        console.log("Done..",count++);

                    })
                }
                console.log(ticker_list.length,"All data length...");
                res.send(ticker_list)

            }).catch((reject) => {
                console.log(reject);

                res.send(reject)
            })

    })

    app.get('/ui_list', (req, res) => {
        NomiceModel_ticker.find({}).select(['-name','-id','-_id','-1d','-7d','-30d','-365d']).then(Response=>{
            res.send(Response);
            
        }).catch(Reject =>{
            console.log(Reject);
            
        })
    })

    app.get('/order_by/:value',(req,res)=>{
        const user_choice = req.params.value
        // res.send(typeof(user_choice))
        NomiceModel_ticker.find({}).select(['-name','-id','-_id','-1d','-7d','-30d','-365d']).sort([[user_choice, 1]]).then(Response=>{
            res.send(Response);
            
        }).catch(Reject=>{
            console.log(Reject);
            
        })
    })

    app.get('/dicts/:value',(req,res)=>{
        let value = req.params.value
        NomiceModel_ticker.find({}).select(['-_id',value])
        .then(Response =>{
            res.send(Response)
        }).catch(Reject =>{
            console.log(Reject);
            
            res.send(Reject)
        })
    })


}