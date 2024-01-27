export const CreateSuccess = (statusCode, SuccessMessage, data)=> {
    const successObj = {
        status: statusCode,
        message: SuccessMessage,
        data: data
    }
    return successObj;
}