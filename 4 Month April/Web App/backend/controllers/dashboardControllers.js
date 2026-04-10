// get all dashboard count to show on dashboard page

const getDashboardCount = async( req , res ) => {
    try {
        res.status(200).json({
            message: "Get Dashboard Data Successful",
        })
    } 
    catch (error) {
        console.log(error)
    }
}

module.exports = { getDashboardCount }