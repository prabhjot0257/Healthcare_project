const{constants } = require("../constants");
const errorHandler = (err,req,res,next) =>{
    const statusCode = res.statusCode ? res.
    statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Vlidation Failed",
                message: err.message,
                stackTrace: err.stack,

            });

            break;
            case constants.NOT_FOUND:
                res.json({
                    title: "Not Found",
                    message: err.message,
                    stackTrace: err.stack,
                });
                case constants.UNAUTHORISED:
                    res.json({
                        title:"unauthorised",
                        message:err.message,
                        stackTrace: err.stack,
                    });
                    case constants.SERVER_ERROR:
                        res.json({
                            title:"server Error",
                            message:err.message,
                            stackTrace:err.stack,
                        });

                        default:
                            console.log("no error,All good!!");
                            break;
    }
};

module.exports = errorHandler;