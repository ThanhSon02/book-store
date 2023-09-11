const Book = require("../models/bookModal");
const Order = require("../models/orderModal");

class orderController {
    createOrder = async (req, res) => {
        try {
            const {
                user,
                orderItems,
                paymentMethod,
                shippingPrice,
                totalPrice,
                totalOrder,
                isPaid,
                isSuccessOrder,
                isDelivered,
            } = req.body;
            const resultUpdateBook = orderItems.map(async (order) => {
                return await Book.findByIdAndUpdate(
                    order.book._id,
                    {
                        $inc: {
                            in_stock: -order.quantity,
                            selled: +order.quantity,
                        },
                    },
                    {
                        new: true,
                    }
                );
            });
            if (resultUpdateBook) {
                const newOrder = await Order.create({
                    user,
                    orderItems,
                    paymentMethod,
                    shippingPrice,
                    totalPrice,
                    totalOrder,
                    isPaid,
                    isSuccessOrder,
                    isDelivered,
                });
                res.status(200).json({
                    newOrder,
                    message: "Create order successfull",
                });
            } else {
                res.status(401).json({
                    message: "Create order failure",
                });
            }
        } catch (error) {
            res.status(401).json({
                message: "Create order failure",
            });
        }
    };

    // get user order
    getOrder = async (req, res) => {
        try {
            const userID = req.user.id;
            const userOrder = await Order.find({ "user._id": userID });
            res.status(200).json({ userOrder });
        } catch (error) {
            res.status(403).json({
                message: "Get your order failure",
            });
        }
    };

    // get all order by admin
    getAllOrder = async (req, res) => {
        try {
            const allOrder = await Order.find();
            res.status(200).json({
                allOrder,
            });
        } catch (error) {
            res.status(402).json({
                message: "Get all order failure",
            });
        }
    };

    // update order status
    // updateOrderStatus = async (req, res) => {
    //     try {
    //         console.log(req.body);
    //         const orderID = req.body.orderID;
    //         console.log(req.body);
    //         const orderUpdated = await Order.findByIdAndUpdate(
    //             orderID,
    //             {
    //                 isPaid: true,
    //                 isDelivered: true,
    //             },
    //             { returnDocument: "after" }
    //         );
    //         res.status(200).json({
    //             orderUpdated,
    //             message: "Update order status successfull",
    //         });
    //     } catch (error) {
    //         res.status(402).json({
    //             message: "Update order status failure",
    //         });
    //     }
    // };
}

module.exports = new orderController();
