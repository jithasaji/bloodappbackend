const requests = require('../Models/requestSchema')

//request blood

exports.requestblood = async (req, res) => {

    console.log("inside request blood controller function");
    const personid = req.payload
    const { personname, location, bloodgroup, bloodunit  ,requestStatus} = req.body
    // res.status(200).json("blood request is recieved!!!")
    console.log(personname, location, bloodgroup, bloodunit);
    try {
        const newRequests = new requests({
            personname, location, bloodgroup, bloodunit, personid ,requestStatus
        })

        await newRequests.save()
        res.status(200).json(newRequests)

    } catch (err) {
        res.status(401).json(`Requests API Failed!!!${err}`)

    }
}
//actions

exports.action = async (req,res) => {
    console.log("inside action controller function");
    const personid = req.payload

    try {
        const result = await requests.find({personid})
        // if(result.status===200){
            res.status(200).json(result)

        // }
    } catch (err) {
        res.status(406).json(`actions API Failed!!!${err}`)

    }
}

