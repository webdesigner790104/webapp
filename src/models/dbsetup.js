const collection = require('../utilities/connection');

const customerDb = [
    {
        customerName: "Santhu",
        password: "12345678"
    },
    {
        customerName: "John",
        password: "87654321"
        
    }
]
exports.setupDb = () => {
    return collection.getCustomerCollection().then((customer) => {
        return customer.deleteMany().then(() => {
            return customer.insertMany(customerDb).then(() => {
                            if (data) return "Insertion Successfull"
                            else {
                                let err = new Error("Insertion failed");
                                err.status = 400;
                                throw err;
                            }
                        })
                    })
                })
            }
